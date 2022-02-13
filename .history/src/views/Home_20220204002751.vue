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
  <div class="gridlist" v-for="char in chars" :key="char.id">
      <div>
        <img class="img" :src="char.img" alt="alt">
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
      this.url = `https://www.breakingbadapi.com/api/characters?name=${this.search}`

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
          },
   updated() {
      console.log(this.url)
     this.getData()
   }
}
</script>

<style scoped>

.charlist {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.gridlist {
  height: 250px;
  width: 30%;
}
.img {
  object-fit: contain;
}
</style>
