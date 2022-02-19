<template>
  <div class="benefitsplit">
      <div>
          <img src="../assets/benefits.png" alt="benefit" />
      </div>
      <div class="benefittext">
          <h2>
              Niffty major features includes the following but not limited:
          </h2>
          <div class="feature" v-for="feature in features" :key="feature.title">
              <div>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="28" cy="28" r="28" fill="#D4DCF9"/>
                 <path d="M27.942 48.6437C38.9303 48.6437 48 39.574 48 28.6051C48 17.6361 38.9109 8.56641 27.9226 8.56641C16.9537 8.56641 7.90332 17.6361 7.90332 28.6051C7.90332 39.574 16.973 48.6437 27.942 48.6437ZM22.2056 36.0275V21.6865C22.2056 20.6012 22.9032 19.9036 23.9497 19.9036H24.88V18.3726C24.88 17.8299 25.2482 17.4617 25.7714 17.4617C26.2947 17.4617 26.6823 17.8299 26.6823 18.3726V19.9036H27.9614V18.3726C27.9614 17.8299 28.3296 17.4617 28.8528 17.4617C29.3761 17.4617 29.7637 17.8299 29.7637 18.3726V19.9617C32.535 20.2911 34.2598 22.0159 34.2598 24.4772C34.2598 26.1051 33.252 27.6361 31.7985 28.295C33.7947 28.8958 35.0931 30.543 35.0931 32.6554C35.0931 35.5624 33.097 37.4422 29.7637 37.7329V39.3221C29.7637 39.8647 29.3761 40.2329 28.8528 40.2329C28.3296 40.2329 27.9614 39.8647 27.9614 39.3221V37.7717H26.6823V39.3221C26.6823 39.8647 26.2947 40.2329 25.7714 40.2329C25.2482 40.2329 24.88 39.8647 24.88 39.3221V37.7717H23.9497C22.8839 37.7717 22.2056 37.0934 22.2056 36.0275ZM25.2288 27.326L27.7869 27.3454C29.9962 27.3648 31.2365 26.4345 31.2365 24.7872C31.2365 23.295 30.1319 22.4423 28.252 22.4423H25.2288V27.326ZM25.2288 35.2135L28.4458 35.1942C30.7908 35.1748 32.0505 34.2639 32.0505 32.481C32.0505 30.7174 30.752 29.8066 28.2714 29.8066H25.2288V35.2135Z" fill="#032406"/>
                </svg>
              </div>
              <div>
                   <h5>
                 {{ feature.content }}
             </h5>
              </div>
          </div>
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
         trigger: '.benefitsplit',
         x: 400,
         end: "+=500",
         scrub: 'true'
     }
     })
     .from(".benefittext", {
         opacity: 0,
         x: -350,
         delay: 0.7,
         easeIn: 'BounceIn',
     })
 },
     data() {
        return {
            features: [
                {
                title: 1, 
                content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings.'
            },
            {
                title: 2, 
                content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings.'
            },
            {
                title: 3, 
                content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings.'
            }
            ]
        }
    }

}
</script>

<style scoped>
 .benefitsplit {
     display: flex;
     justify-content: space-between;
     background-color: #00C7BE;
     padding: 10% 4% 0 0;
 }
 h2 {
     font-family: 'Karla' sans-serif;
     font-style: normal;
     font-weight: bold;
     font-size: 34px;
     line-height: 40px;
     /* or 118% */
     letter-spacing: -0.02em;
     /* White */
     color: #FFFFFF;
     margin-bottom: 5rem;
     width: 80%;
 }
 h5 {
     font-family: 'Karla' sans-serif;
     font-style: normal;
     font-weight: 500;
     font-size: 24px;
     line-height: 35px;
     /* or 146% */
     letter-spacing: 0.01em;
     /* White */
     color: #FFFFFF;
     width: 80%;
 }
 .feature {
     display: flex;
     grid-gap: 1.8rem;
     margin-top: 2rem;
 }
 .benefittext {
     margin: 2rem 4rem;
     padding-left: 7rem;
 }

 @media screen and (max-width: 1024px) {
     .benefitsplit {
     display: flex;
     flex-direction: column-reverse;
     justify-content: space-between;
     padding: 10% 4% 0 0;
 }
 }
 @media screen and (max-width: 900px) {
     .benefittext {
     margin: 2rem 2rem;
     padding-left: 2rem;
 }
     h2 {
     font-size: 1.5rem;
     line-height: 30px;
     width: 100%;
 }
 h5 {
     font-size: 1rem;
     line-height: 30px;
     width: 100%;
 }
 }
 @media screen and (max-width: 650px) {
     h2 {
     font-size: 1rem;
     line-height: 30px;
     width: 100%;
 }
 h5 {
     font-size: 0.8rem;
     line-height: 30px;
     width: 100%;
 }
 .benefittext {
     padding-left: 1rem;
 }
 }
</style>