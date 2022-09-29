<script lang="ts">
import GridGame from './components/GridGame.vue';
import HomeView from './components/HomeView.vue'

export default {
  name: 'App',
  components: {
    'grid-game': GridGame,
    'home-view': HomeView,
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <home-view msg="Game of life!" />
    </div>
  </header>

  <main>
    <grid-game
      message="coucou"
      :current-speed="10"
     />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
