<template>
  <div class="home">
   Hello People
  </div>
  <div v-for="char in chars" :key="char.id">
    <p> {{ char.name }} </p>
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
      chars: []
    }
  },
  mounted() {
     fetch(`https://www.breakingbadapi.com/api/characters`)
          .then(res => 
              res.json()
          )
          .then(data => {
            this.chars = data
            console.log(this.chars.proxy)
          })
          
  }
}
</script>

<style>

</style>
