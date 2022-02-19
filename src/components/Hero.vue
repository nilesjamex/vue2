<template>
  <div class="hero">
      <div class="herotext square">
          <h1 class="herotext__head">
              Your No.1 NFT market place for rare collections
          </h1>
          <p class="herotext__sub">
              A wonderful serenity has taken possession of my entire soul, 
              like these sweet mornings of spring which I enjoy with my whole heart.
          </p>
          <div class="buttonDiv">
              <button @click="flipit" class="button1">Download App</button>
              <button class="button2">Visit MarketPlace</button>
          </div>
          <div class="heroSponsor">
              <h5 class="heroSponsor__text">
                  Supported by:
              </h5>
              <div class="heroSponsor__list">
                  <img src="../assets/access.png" alt="">
                  <img src="../assets/kuda.png" alt="">
                  <img src="../assets/keystone.png" alt="">
              </div>
          </div>
      </div>
      <div class="square">
          <img class="image" src="../assets/hero.png" alt="hero">
      </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
gsap.registerPlugin(ScrollTrigger, Flip)
export default {
    methods: {
     flipit() {
         const squares = gsap.utils.toArray(".square");
          const state = Flip.getState(squares);
          swap(squares);
          Flip.from(state, {duration: 2, ease: "power1.inOut"});
          function swap([a, b]) {
  a.parentNode.children[0] === a ? a.parentNode.appendChild(a) : a.parentNode.appendChild(b);
}
     }
 },
 mounted() {
     gsap.timeline()
     .from(".herotext__head", {
         duration: 0.5,
         opacity: 0,
         y: -100,
         delay: 0.3,
         easeIn: 'BounceIn',
     })
     .from(".herotext__sub", {
         duration: 0.5,
         opacity: 0,
         y: -100,
         delay: 0.5,
         easeIn: 'BounceIn',
     })
     .from(".buttonDiv", {
         duration: 0.5,
         opacity: 0,
         y: -100,
         delay: 0.7,
         easeIn: 'BounceIn',
     })
     .from(".heroAponsor", {
         duration: 0.5,
         opacity: 0,
         y: -100,
         delay: 0.5,
         easeIn: 'BounceIn',
     })
     .from(".heroSponsor", {
         duration: 0.5,
         opacity: 0,
         y: 100,
         delay: 0.3,
         easeIn: 'BounceIn',
     })
     .from(".image", {
         duration: 0.5,
         opacity: 0,
         delay: 0.3,
         easeIn: 'BounceIn',
     })
 }
}
</script>

<style>
.hero {
    display: flex;
    justify-content: space-around;
    padding: 2% 5rem;
}
.herotext {
    width: 50%;
}
.herotext__head {
    font-family: 'Karla' sans-serif;
    font-style: bold;
    font-weight: 800;
    font-size: 3.7rem;
    line-height: 90px;
    /* or 150% */
    letter-spacing: 0.02rem;
    /* Ink */
    color: #08102D;
}
.herotext__sub {
    font-family: 'Karla' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.8;
    text-align: left;
    letter-spacing: 0.01rem;
    color: #6E6E71;
    width: 70%;
}
.buttonDiv {
    margin: 1rem 0;
    display: flex;
    grid-gap: 1rem;
}
.button1 {
    background: #045C58;
    font-family: 'Karla' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    transition: all 0.6s ease-in-out;
}
.button1:hover {
    height: 60px;
    box-shadow: 5px 10px #CDFCFA inset;
}
.button2:hover {
    height: 60px;
    box-shadow: 5px 10px #045C58 inset;
}
.button2 {
    transition: all 0.6s ease-in-out;
    background: #CDFCFA;
    border: 1.5px solid #045C58;
    box-sizing: border-box;
    font-family: 'Karla' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #032406;
}
.heroSponsor {
    align-self: flex-end;
    margin-top: 4rem;
}
.heroSponsor__text {
    font-family: 'Karla' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    /* identical to box height, or 167% */
    letter-spacing: 0.01em;
    color: #6E6E71;
}
.heroSponsor__list {
    display: flex;
    grid-gap: 1.3rem;
}

@media screen and (max-width: 1024px) {
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 3rem;
}
.image {
    width: 90%;
    padding: 0 0.5rem;
}
.herotext {
    width: 80%;
}
.herotext__head {
    font-family: 'Karla' sans-serif;
    font-style: bold;
    font-weight: 800;
    font-size: 3.7rem;
    line-height: 90px;
    letter-spacing: 0.02rem;
}
.herotext__sub {
    font-size: 1.3rem;
    line-height: 1.4;
    text-align: left;
    letter-spacing: 0.01rem;
    width: 100%;
}
.heroSponsor {
    margin-bottom: 2.5rem;
}
  .buttonDiv {
      text-align: center;
  }
}

@media screen and (max-width: 900px) {
    .hero {
    padding: 1% 1rem;
}
    .herotext__head {
    font-size: 2rem;
    line-height: 50px;
    letter-spacing: 0.02rem;
}
.herotext__sub {
    font-size: 1.3rem;
    line-height: 1.7rem;
    text-align: left;
    letter-spacing: 0.01rem;
    width: 100%;
}   
}
@media screen and (max-width: 650px) {
    .hero {
    padding: 1% 0rem;
}
    .herotext__head {
    font-size: 1.5rem;
    line-height: 40px;
    letter-spacing: 0.02rem;
}
.herotext__sub {
    font-size: 1rem;
    line-height: 1.7rem;
    text-align: left;
    letter-spacing: 0.01rem;
    width: 100%;
}
.heroSponsor {
    margin-top: 2rem;
}
.heroSponsor__list {
    display: flex;
    flex-wrap: wrap;
}   
}
@media screen and (max-width: 480px) {
    .hero {
    padding: 1% 0rem;
}
    .herotext__head {
    font-size: 1.2rem;
    line-height: 40px;
    letter-spacing: 0.02rem;
}
.herotext__sub {
    font-size: 1rem;
    line-height: 1.7rem;
    text-align: left;
    letter-spacing: 0.01rem;
    width: 100%;
}  
.button1 {
    width: 170px;
    font-size: 0.7rem;
}
.button2 {
    width: 170px;
    font-size: 0.7rem;
}
}
</style>