<template>
  <div class="home">
   Hello People
  </div>
  <form @submit="handleSearch">
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
      chars: [],
      search: ""
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
    handleSubmit(e) {
      updated() ;{
      this.url = `https://www.breakingbadapi.com/api/characters?name=${this.search}?limit=10&offset=10`
      }
    }
  }
}
</script>

<style>

</style>
