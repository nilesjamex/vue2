<template>
<div v-if="list">
  <div v-for="lis in list" :key="lis">
  <p>{{lis.name}}</p>
  </div>
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
            console.log(this.list)
          })
    }
}
</script>

<style>

</style>