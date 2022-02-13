<template>
<div class="overlay" ref="overlay">
</div>
  <div class="home">
   Hello People
 
  <form @submit.prevent="handleSearch">
    <input type="text" name="search" v-model="search" />
    <button type="submit">Search</button>
  </form>
  <select name="" id="select">
    <option @click="handleDefault" value="default">Default</option>
    <option @click="handleBreakingBad" value="Breaking Bad">Breaking Bad</option>
    <option @click="handleBetterCallSaul" value="Better Call Saul">Better call saul</option>
  </select>
   <div class="charlist">
  <div class="gridlist" v-for="char in chars" :key="char.id">
    <div>
      <div class="subgrid">
        <img class="img" :src="char.img" alt="alt">
        <p> {{ char.name }} </p>
        <router-link :to="{ name: `Details`, params: {id: char.char_id} }">
        <button> more</button>
        </router-link>
      </div>
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
      class: "",
      chars: []
    }
  },
  methods: {
    handleSearch() {
      this.url = `https://www.breakingbadapi.com/api/characters?name=${this.search}`
      },
    handleDefault() {
      this.url = 'https://www.breakingbadapi.com/api/characters?limit=10&offset=10'
      console.log(this.url)
      },
      handleBreakingBad() {
      this.url = 'https://www.breakingbadapi.com/api/characters?category=Breaking+Bad'
      },
      handleBetterCallSaul() {
      this.url = 'https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul'
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
    //  this.getData()
   }
}
</script>

<style scoped>

.charlist {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  padding: 20px 7%;
}
.gridlist {
  height: 450px;
  width: 100%;
}
.subgrid {
  background-color: #06394e;
  margin: 1rem;
}
.img {
  object-fit: contain;
  height: 350px;
  width: 100%;
}
</style>
