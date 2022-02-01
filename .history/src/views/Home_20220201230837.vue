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
      url: ,
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
