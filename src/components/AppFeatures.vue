<template>
  <div class="appFeatures">
      <div class="square">
          <img src="../assets/appfeatures.png" alt="">
      </div>
      <div class="featureslist">
          <div v-for="feature in features" :key="feature.id">
              <div class="featuresplit">
                  <div>
                       <hr />
                  </div>
                  <div>
                     <h2> {{ feature.title }} </h2>
                     <p> {{ feature.content }} </p>
                  </div>
              </div>
          </div>
          <div>
              <button @click="flipit" >GET STARTED <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8188 7.00439C16.8188 6.73193 16.7046 6.46826 16.5024 6.2749L10.728 0.500488C10.4995 0.280762 10.2622 0.184082 10.0161 0.184082C9.45361 0.184082 9.04932 0.57959 9.04932 1.11572C9.04932 1.39697 9.16357 1.63428 9.33936 1.81006L11.3169 3.81396L13.8657 6.14307L11.8267 6.02002H1.17432C0.585449 6.02002 0.181152 6.42432 0.181152 7.00439C0.181152 7.57568 0.585449 7.97998 1.17432 7.97998H11.8267L13.8657 7.85693L11.3169 10.186L9.33936 12.1899C9.16357 12.3657 9.04932 12.603 9.04932 12.8843C9.04932 13.4204 9.45361 13.8159 10.0161 13.8159C10.2622 13.8159 10.4995 13.7192 10.7104 13.5171L16.5024 7.7251C16.7046 7.53174 16.8188 7.26807 16.8188 7.00439Z" fill="#2A52E2"/>
</svg>
</button>
          </div>
      </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
gsap.registerPlugin(ScrollTrigger, Flip)
export default {
     mounted() {
     gsap.timeline({ scrollTrigger: {
         trigger: '.appFeatures',
         x: 600,
         end: "+=800",
         scrub: 1,
         markers: false
     }
     }).from(".featuresplit", {
         opacity: 0,
         x: -200,
         easeIn: 'BounceIn',
     })
 },
 data() {
        return {
            features: [
                {
                id: 1,
                title: 'Niffty major features includes the following but not limited:', 
                content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone.'
            },
            {
                id: 2,
                title: 'Niffty major features includes the following but not limited:', 
                content: ''
            },
            {
                id: 3,
                title: 'Niffty major features includes the following but not limited:', 
                content: ''
            }
            ]
        }
    }
}
</script>

<style scoped>
.appFeatures {
    display: flex;
    justify-content: space-around;
    background: #045C58;
    padding: 5% 5% 0 0;
}
.featuresplit {
    display: flex;
    grid-gap: 0.4rem;
    height: auto;
}
hr {
    background: #57FEF6;
    border-radius: 2px;
    width: 4px;
    height: 3rem;
    margin-top: 2rem;
}
h2 {
    font-family: 'Karla' sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin-top: 2rem;
    margin-bottom: 1rem;
}
p {
    font-family: 'Karla' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin-bottom: 4rem;
}
button {
    background-color: white;
    font-family: 'Karla' sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #045C58;
    width: 310px;
    padding: 0 3rem;
    transition: all 0.5s ease-in-out;
}
button:hover {
    background-color: #045C58;
    color: white;
}

@media screen and (max-width: 1024px) {
    .appFeatures {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 5% 5% 0 0;
    }
    .featureslist {
        padding: 1rem 0 2rem 6rem;
    }
    .featuresplit {
        text-align: left;
    }
}

@media screen and (max-width: 900px) {
    .featureslist {
        padding: 1rem 0 2rem 2rem;
    }
    h2 {
    font-size: 1.3rem;
    line-height: 30px;
    letter-spacing: 0.01em;
}
p {
    font-size: 1rem;
    line-height: 30px;
    letter-spacing: 0.01em;
}
}
@media screen and (max-width: 650px) {
    h2 {
    font-size: 1rem;
    line-height: 30px;
    letter-spacing: 0.01em;
}
p {
    font-size: 0.8rem;
    line-height: 30px;
    letter-spacing: 0.01em;
}
.featuresplit {
    grid-gap: 0.9rem;
}
button {
    font-size: 18px;
}
}
</style>