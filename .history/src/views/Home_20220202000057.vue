<template>
  <div class="home">
   Hello People
  </div>
  <form @submit.prevent="handleSearch">
    <input type="text" name="search" v-model="search" />
    <button type="submit">Search</button>
  </form>
  <div v-for="char in chars" :key="char.id">
    <div class="charlist">
      <div></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


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
  mounted() {
     fetch(this.url)
          .then(res => 
              res.json()
          )
          .then(data => {
            this.chars = data
            console.log(this.chars)
          })
          },
  methods: {
    handleSearch() {
      console.log(this.url)
    }
  }
}
</script>

<style scoped>
.home {
  background: url(../assets/bghome.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
