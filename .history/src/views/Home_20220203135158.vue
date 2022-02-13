<template>
<div class="overlay" ref="overlay">
</div>
  <div class="home">
   Hello People
 
  <form @submit.prevent="handleSearch">
    <input type="text" name="search" v-model="search" />
    <button type="submit">Search</button>
  </form>
   <div class="charlist">
  <div v-for="char in chars" :key="char.id">
      <div>
        <p> {{ char.name }} </p>
      </div>
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

.charlist {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
