<template>
  <div v-if="list">
  <p>{{list.name}}</p>
  </div>
</template>

<script>
export default {
    props: [ "id" ],
    data() {
        return {
            list: null
        }
    },
    mounted() {
         fetch('https://www.breakingbadapi.com/api/characters/' + this.id)
          .then(res => 
              res.json()
          )
          .then(data => {
            this.list = data
            console.log(this.chars)
          })
    }
}
</script>

<style>

</style>