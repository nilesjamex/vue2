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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
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

@media screen and (max-width: 500px) {
  button {
    font-size: 0.4rem;
} 
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
