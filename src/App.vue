<template>
  <div id="app">
    <MainNav/>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@import '~bootstrap/dist/css/bootstrap.css';
</style>

<script>
  import MainNav from '@/components/MainNav.vue'

  export default {
    name: "App",
    components: { MainNav }
  }
</script>
