<template>
  <div class="container">
    <!-- Form for entering the name -->
    <el-form @submit.prevent="checkName" class="form">
      <el-form-item :rules="rules" :model="name">
        <!-- Input field for the name with Enter key handling -->
        <el-input v-model="name" placeholder="Enter your name" @keyup.enter="handleEnterKey"></el-input>
      </el-form-item>
      <!-- Button to submit the name -->
      <el-button type="primary" @click="checkName">Submit</el-button>
    </el-form>

    <!-- Component to display the name search response -->
    <name-search-response :name="name" @result="handleResult"></name-search-response>

    <!-- Divider -->
    <el-divider></el-divider>

    <!-- Winners list header -->
    <h2>Winners List</h2>

    <!-- List of winners -->
    <el-list class="winners-list">
      <el-list-item v-for="winner in winners" :key="winner">
        <div>{{ winner.charAt(0).toUpperCase() + winner.slice(1) }}</div>
      </el-list-item>
    </el-list>

    <!-- Button to clear the winners list -->
    <el-button type="danger" @click="clearWinners" class="clear-button">Clear Winners</el-button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import NameSearchResponse from '@/components/NameSearchResponse.vue';
import { ElMessageBox, ElForm, ElFormItem, ElInput, ElButton, ElDivider } from 'element-plus';
import { getAll } from '@/api/peopleApi';

export default {
  name: 'NameSearcher',
  components: {
    NameSearchResponse,
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElDivider,
  },
  setup() {
    // Reactive variable to hold the entered name
    const name = ref('');

    // Access the Vuex store
    const store = useStore();

    // Compute the winners list with capitalization
    const winners = computed(() => store.state.winners.map(winner => winner.charAt(0).toUpperCase() + winner.slice(1)));

    // Validation rules for the input field
    const rules = {
      required: true,
      validator: (rule, value, callback) => {
        const trimmedValue = value.trim();
        if (trimmedValue.length < 2 || !/^[A-Za-z]+$/.test(trimmedValue)) {
          callback(new Error('Please enter a valid name with at least 2 letters.'));
        } else {
          callback();
        }
      }
    };

    /**
     * Handle the result of the name search.
     * @param {boolean} isLucky - Indicates if the name is lucky.
     */
    const handleResult = (isLucky) => {
      if (isLucky) {
        store.commit('addWinner', name.value.trim().toLowerCase());
        name.value = '';
      }
    };

    /**
     * Check if the entered name is a lucky name.
     */
    const checkName = async () => {
      const normalizedName = name.value.trim().toLowerCase();
      if (normalizedName === "") {
        return;
      }
      if (store.state.winners.includes(normalizedName)) {
        ElMessageBox.alert(`I'm sorry, ${name.value.trim()} has already received their prize today!`, 'Already Won');
        return;
      }

      try {
        const luckyNames = await getAll(true);
        if (luckyNames.some((person) => person.name.toLowerCase() === normalizedName)) {
          ElMessageBox.confirm(
              `Congratulations, ${name.value.trim()} is a lucky name! You've won a prize. Will you accept it?`,
              'Lucky Name',
              {
                confirmButtonText: 'Accept',
                cancelButtonText: 'Reject',
              }
          ).then(() => {
            handleResult(true);
          }).catch(() => {
            // Do nothing on reject
          });
        } else {
          ElMessageBox.alert(`I'm sorry, ${name.value.trim()} is not in today's list of lucky names.`, 'Not Lucky');
        }
      } catch (error) {
        ElMessageBox.alert('An error occurred while checking the name. Please try again later.', 'Error');
      }
    };

    /**
     * Handle the Enter key press in the input field.
     * @param {Event} event - The keyup event.
     */
    const handleEnterKey = (event) => {
      if (name.value.trim() !== "") {
        checkName();
      }
    };

    /**
     * Clear the winners list.
     */
    const clearWinners = () => {
      store.commit('clearWinners');
    };

    return {
      name,
      winners,
      rules,
      checkName,
      handleEnterKey,
      clearWinners,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}

.form {
  margin-bottom: 20px;
}

.winners-list {
  text-align: left;
  display: block;
  width: 100%;
}

.clear-button {
  margin-top: 20px;
}
</style>
