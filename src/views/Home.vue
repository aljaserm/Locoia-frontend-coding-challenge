<template>
  <div class="home-container">
    <!-- Header for the home page -->
    <h2>Is your name lucky?</h2>
    <p>Welcome to the game where we find out whether your name is one of our lucky names of the day.
      All you have to do is type your name below and we will tell you!</p>
    <!-- Name searcher component -->
    <name-searcher></name-searcher>
    <!-- Link to view the winners -->
    <router-link to="/winners">View Winners</router-link>
  </div>
</template>

<script>
import NameSearcher from '@/components/NameSearcher.vue';

export default {
  name: 'Home',
  components: {
    NameSearcher,
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 50vw;
  display: grid;
  justify-items: center;
}
</style>
