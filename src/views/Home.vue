<template>
  <Hero />
  <Features />
  <AppFeatures />
  <InApp />
</template>

<script>
import Hero from '.././components/Hero.vue'
import Features from '.././components/Features.vue'
import AppFeatures from '.././components/AppFeatures.vue'
import InApp from '.././components/InApp.vue'
export default {
 components: { Hero, Features, AppFeatures, InApp }
}
</script>

<style>

</style>