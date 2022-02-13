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
            url: `https://www.breakingbadapi.com/api/characters/${id}`,
            list: null
        }
    },
    mounted() {
         fetch(this.url)
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