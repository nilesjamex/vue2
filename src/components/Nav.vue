<template>
  <nav>
      <div>
          <h2 class="name">NIFFTY</h2>
      </div>
      <div>
          <ul>
              <li>MarketPlace</li>
              <li>How It Works</li>
              <li>About Us</li>
              <li>Blog</li>
          </ul>
      </div>
      <div>
          <button>Download App</button>
      </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    margin: 1rem 3rem;
    height: 10vh;
    align-items: center;
}
.name {
    font-family: 'Poppins' sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.7rem;
    line-height: 45px;
    color: #00C7BE;
    text-transform: uppercase;
}
ul {
    display: flex;
    grid-gap: 4rem;
}
li {
    font-family: 'Karla' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 30px;
    /* identical to box height, or 167% */
    letter-spacing: 0.01rem;
    color: #08102D;
}
button {
    font-family: 'poppins' sans-serif;
    border-radius: 6px;
    width: 218px;
    height: 62px;
    background-color: #045C58;
    color: #fff;
}
</style>