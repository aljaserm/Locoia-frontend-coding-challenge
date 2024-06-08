<template>
  <div></div>
</template>

<script>
import { ElMessageBox } from 'element-plus';
import { getAll } from '@/api/peopleApi';

export default {
  name: 'NameSearchResponse',
  props: {
    name: {
      type: String,
      required: true,
    },
    checkName: {
      type: Function,
      required: true,
    },
  },
  methods: {
    /**
     * Check if the entered name is a lucky name.
     */
    async checkName() {
      if (this.name.length < 2 || !/^[A-Za-z]+$/.test(this.name)) {
        ElMessageBox.alert('Please enter a valid name with at least 2 letters.', 'Invalid Input');
        return;
      }

      try {
        const luckyNames = await getAll();
        if (luckyNames.some((person) => person.name.toLowerCase() === this.name.toLowerCase())) {
          ElMessageBox.confirm(
              `Congratulations, ${this.name} is a lucky name! You've won a prize. Will you accept it?`,
              'Lucky Name',
              {
                confirmButtonText: 'Accept',
                cancelButtonText: 'Reject',
              }
          ).then(() => {
            this.$emit('result', true);
          }).catch(() => {
            // Do nothing on reject
          });
        } else {
          ElMessageBox.alert(`I'm sorry, ${this.name} is not in today's list of lucky names.`, 'Not Lucky');
        }
      } catch (error) {
        ElMessageBox.alert('An error occurred while checking the name. Please try again later.', 'Error');
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 50%;
}
</style>
