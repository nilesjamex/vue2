<template>
  <div class="waitsplit">
      <div class="waitlist__text">
          <h2>
              Don’t look too far away, we are with your reach start with joining us.
          </h2>
          <p>
              Join our waitlist by inputing your email address below.
          </p>
          <form @submit.prevent="handleSubmit">
              <input type="email" name="" placeholder="Input email address here" v-model="email">
              <button>Download Niffty <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 7L21 12L16 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
          </form>
      </div>
      <div>
          <img src="../assets/waitlist.png" alt="">
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
         trigger: '.waitsplit',
         x: 400,
         end: "+=500",
         scrub: 'true'
     }
     })
     .from(".waitlist__text", {
         opacity: 0,
         x: -350,
         delay: 0.7,
         easeIn: 'BounceIn',
     })
 },
    data() {
        return {
            email: ''
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.email)
            this.email = ''
        }
    }
}
</script>

<style scoped>
 .waitsplit {
     display: flex;
     justify-content: space-around;
     padding: 0 12rem;
 }
 .waitlist__text {
     align-self: center;
 }
 h2 {
     font-family: 'Karla' sans-serif;
     font-style: normal;
     font-weight: bold;
     font-size: 34px;
     line-height: 40px;
     letter-spacing: -0.02em;
     color: #032406;
     width: 70%;
     margin: 2rem 0;
 }
 p {
     font-family: 'Karla' sans-serif;
     font-style: normal;
     font-weight: 500;
     font-size: 18px;
     line-height: 30px;
     letter-spacing: 0.01em;
     color: #6E6E71;
     width: 70%;
     margin: 2rem 0;
 }
 img {
     position: relative;
     z-index: 1;
     bottom: 4rem;
 }
 input[type=email] {
     background: #D9FDFB;
     border-radius: 8px 0px 0px 8px;
     font-size: 18px;
     height: 62px;
     padding: 0 2rem;
     font-family: 'Karla' sans-serif;
     font-style: normal;
     font-weight: 500;
     line-height: 30px;
     letter-spacing: 0.01em;
     color: #6E6E71;
 }
 button {
     background: #045C58;
     border-radius: 0px 8px 8px 0px;
     font-family: 'Karla' sans-serif;
     font-style: normal;
     font-weight: 500;
     font-size: 18px;
     line-height: 30px;
     letter-spacing: 0.01em;
     color: #FFFFFF;
     margin: 1rem 0;
 }
 ::placeholder {
     font-family: 'Karla' sans-serif;
     font-style: normal;
     font-weight: 500;
     font-size: 18px;
     line-height: 30px;
     letter-spacing: 0.01em;
     color: #6E6E71;
 }

 @media screen and (max-width: 1024px) {
     .waitsplit {
     display: flex;
     flex-direction: column-reverse;
     align-items: center;
     align-content: space-around;
     padding: 0 12rem;
 }
  .waitlist__text {
     align-self: center;
 }
 h2 {
     font-size: 34px;
     line-height: 40px;
     letter-spacing: -0.02em;
     color: #032406;
     width: 100%;
     margin: 2rem 0;
 }
 p {
     font-size: 18px;
     line-height: 30px;
     letter-spacing: 0.01em;
     width: 100%;
     margin: 2rem 0;
 }
 }
 @media screen and (max-width: 900px) {
     h2 {
     font-size: 1.5rem;
     line-height: 30px;
     letter-spacing: -0.02em;
 }
 p {
     font-size: 1rem;
     line-height: 20px;
     letter-spacing: 0.01em;
     width: 100%;
     margin: 2rem 0;
 }
 }
 @media screen and (max-width: 650px) {
     .waitsplit {
     padding: 0 2rem;
 }
 }
</style>