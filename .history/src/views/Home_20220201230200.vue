<template>
  <div class="home">
   Hello People
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
      url: 'https://www.breakingbadapi.com/api/characters',
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
          })
          console.log(this.chars)
  }
}
</script>

<style>

</style>
