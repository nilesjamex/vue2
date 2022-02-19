<template>
  <div class="featureMain">
      <div class="featurelist" v-for="feature in features" :key="feature.title">
          <img src="../assets/green.png" alt="">
          <h2> {{ feature.title }} </h2>
          <p> {{ feature.content }} </p>
      </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
     mounted() {
     gsap.timeline({ scrollTrigger: {
         trigger: '.featureMain',
         x: 400,
         end: "+=500",
         scrub: 'true'
     }
     })
     .from(".featurelist", {
         opacity: 0,
         y: 200,
         delay: 0.7,
         easeIn: 'BounceIn',
     })
 },
    data() {
        return {
            features: [
                {
                title: 'Market Place', 
                content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings.'
            },
            {
                title: 'Rare Collection', 
                content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings.'
            },
            {
                title: 'Ethereum Network', 
                content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings.'
            }
            ]
        }
    }
}
</script>

<style scoped>
.featureMain {
    display: flex;
    grid-gap: 5rem;
    justify-content: space-around;
    text-align: center;
    padding: 3% 9%;
}
.featurelist {
    width: 310px;
    height: 206px;
}
h2 {
    font-family: 'Karla' sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height, or 125% */
    text-align: center;
    letter-spacing: 0.01em;
    color: #000000;
    margin: 0.7rem 0;
}
p {
    font-family: 'Karla' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    /* or 167% */
    text-align: center;
    letter-spacing: 0.01em;
    /* Gray */
    color: #6E6E71;
}

@media screen and (max-width: 900px) {
    .featurelist {
    width: 310px;
    height: 250px;
}
h2 {

    font-size: 1rem;
    line-height: 30px;
}
p {
    font-size: 1rem;
    line-height: 30px;
}
}
@media screen and (max-width: 650px) {
    .featureMain {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 1rem;
    justify-content: space-around;
    text-align: center;
    padding: 3% 9%;
}
    .featurelist {
    width: 310px;
    height: 200px;
}
h2 {

    font-size: 1rem;
    line-height: 30px;
}
p {
    font-size: 1rem;
    line-height: 30px;
}
}

</style>