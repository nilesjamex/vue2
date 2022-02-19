<template>
  <div class="footsplit">
      <div>
          <h1>
              NIFFTY
          </h1>
      </div>
      <div class="listsplit">
          <div class="list" >
              
              <ul>
              <li>
                  <h2>
                  About
              </h2>
              </li>
              <li>About</li>
              <li>Features</li>
              <li>Career</li>
              <li>Our Vision</li>
          </ul>
          </div>
          
          <div>
              <ul>
                  <li>
                  <h2>
                  Company
              </h2>
              </li>
              <li>Our Mission</li>
              <li>Our Team</li>
              <li>Partner With Us</li>
              <li>FAQ</li>
          </ul>
          </div>
          <div>
              <ul>
              <li>
                  <h2>
                  Support
                  </h2>
              </li>
              <li>Account</li>
              <li>Support Center</li>
              <li>Feedback</li>
              <li>Contact Us</li>
          </ul>
          </div>
         <div>
              <ul>
              <li>
                  <h2>
                  Get in touch
                 </h2>
              </li>
              <li>Download App</li>
              <li>Subscribe</li>
          </ul>
          </div>
      </div>
  </div>
  <Socials />
</template>

<script>
import Socials from "./Socials.vue"
export default {
    components: { Socials }

}
</script>

<style scoped>
.footsplit {
    display: flex;
    justify-content: space-between;
    padding: 3rem 4rem;
}
h1 {
    font-family: 'Poppins' sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    color: #00C7BE;
}
.listsplit {
    display: flex;
    justify-content: space-between;
    grid-gap: 2rem;
    width: 60%;
}
li {
    margin: 0 0 2rem 0;
    font-family: 'Karla' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #08102D;
}
h2 {
    font-family: 'Karla' sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #08102D;
}

@media screen and (max-width: 900px) {
    .footsplit {
    display: flex;
    flex-direction: column;
    padding: 3rem 4rem;
}
}
@media screen and (max-width: 768px) {
    .listsplit {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 1rem 0rem;
    width: 100%;
}
}
@media screen and (max-width: 650px) {
      .footsplit {
    padding: 1rem 2rem;
}
    li {
    margin: 0 0 0.7rem 0;
    font-size: 0.8rem;
    line-height: 30px;
}
h2 {
    font-size: 1rem;
    line-height: 30px;
}

}
</style>