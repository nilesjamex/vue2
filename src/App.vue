<template>
<div>
  <Nav />
</div>
  <router-view/>
</template>
<script>
import Nav from './components/Nav.vue'
export default {
 components: { Nav }
}
</script>

<style>
* {
  /* overflow-X: hidden; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

li {
  list-style: none;
}

button {
  border-radius: 6px;
    width: 218px;
    height: 62px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
