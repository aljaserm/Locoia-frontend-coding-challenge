<template>
  <el-container>
    <el-header>
      <h1>Winners List</h1>
    </el-header>
    <el-main>
      <el-list class="winners-list">
        <el-list-item v-for="winner in winners" :key="winner">
          <div>{{ winner.charAt(0).toUpperCase() + winner.slice(1) }}</div>
        </el-list-item>
      </el-list>
    </el-main>
  </el-container>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ElContainer, ElHeader, ElMain, ElList, ElListItem } from 'element-plus';

export default {
  name: 'Winners',
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElList,
    ElListItem,
  },
  setup() {
    // Access the Vuex store
    const store = useStore();
    // Compute the winners list
    const winners = computed(() => store.state.winners);

    return {
      winners,
    };
  },
};
</script>

<style scoped lang="scss">
.winners-list {
  text-align: left;
  display: block;
  width: 100%;
}
</style>
