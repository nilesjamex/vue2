<template>
  <div class="hero">
      <div class="herotext">
          <h1 class="herotext__head">
              Your No.1 NFT market place for rare collections
          </h1>
          <p class="herotext__sub">
              A wonderful serenity has taken possession of my entire soul, 
              like these sweet mornings of spring which I enjoy with my whole heart.
          </p>
          <div class="buttonDiv">
              <button class="button1">Download App</button>
              <button class="button2">Visit MarketPlace</button>
          </div>
          <div class="heroSponsor">
              <h5 class="heroSponsor__text">
                  Supported by:
              </h5>
              <div class="heroSponsor__list">
                  <img src="" alt="">
                  <img src="" alt="">
                  <img src="" alt="">
              </div>
          </div>
      </div>
      <div>
          <img src="../assets/hero.png" alt="hero">
      </div>
  </div>
</template>

<script>
export default {

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
    z-index: 1;
}
.herotext__head {
    font-family: 'Karla' sans-serif;
    font-style: bold;
    font-weight: 800;
    font-size: 60px;
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
    line-height: 30px;
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
    color: #fff;
}
.button2 {
    background: #CDFCFA;
    border: 1.5px solid #045C58;
    box-sizing: border-box;
    color: #045C58;
}
.heroSponsor {
    place-items: flex-end;
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
</style>