<template>
<div class="overlay" ref="overlay">
</div>
  <div class="home">
   Hello People
 
  <form @submit.prevent="handleSearch">
    <input type="text" name="search" v-model="search" />
    <button type="submit">Search</button>
  </form>
  <div v-for="char in chars" :key="char.id">
    <div class="charlist">
      <div></div>
    </div>
  </div>
   </div>
</template>

<script>
import {gsap} from 'gsap'
import {watch} from 'vue'
export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      url: 'https://www.breakingbadapi.com/api/characters?limit=10&offset=10',
      search: "",
      chars: []
    }
  },
  methods: {
    handleSearch() {
      console.log(this.url)
    },
    getData() {
       fetch(this.url)
          .then(res => 
              res.json()
          )
          .then(data => {
            this.chars = data
            console.log(this.chars)
          })
    }
  },
   mounted() {
          this.getData()
          }
}
</script>

<style scoped>
.overlay {
    background: url(../assets/bghome.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    z-index: 1;
}
.home {
  background: url(../assets/overlay.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
}
</style>
