<template>
  <nav>
      <div>
          <h2 class="name">NIFFTY</h2>
      </div>
      <div class="menu" :class="{activenav: active}">
          <ul>
              <li>MarketPlace</li>
              <li>How It Works</li>
              <li>About Us</li>
              <li>Blog</li>
          </ul>
           <div>
          <button>Download App</button>
      </div>
      </div>
      <div @click="toggles" :class="{toggleanime: active}" class="toggle">
          <div className="toggle-line line1"></div>
          <div className="toggle-line line2"></div>
          <div className="toggle-line line3"></div>
      </div>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            body: document.querySelector("body")
        }
    },

    methods: {
        toggles() {
            this.active = !this.active
            if (this.active) {
    body.style.cssText = "overflow-y:hidden;";
  } else {
    body.style.cssText = "overflow:none;";
  }
        }
    }

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
.menu {
    display: flex;
    justify-content: space-between;
    width: 70%;
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
.toggle {
    display: none;
}

@media screen and (max-width: 900px) {
    nav {
        margin: 1rem 0rem;
    }
    .menu {
        display: inline-block;
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: #00C7BE;
        color: #fff;
        top: 0;
        bottom: 0;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translateX(100%);
        transition: all ease-out 0.2s;
        overflow-x: hidden;
        
    }
    ul {
       display: flex;
        flex-direction: column;
        grid-gap: 4rem; 
        text-align: left;
    }
    li {
        font-size: 2rem;
        color: #fff;
    }
    .activenav {
        transform: translateX(0);
      }
    .toggle {
        display: block;
        cursor: pointer;
        order: 2;
        z-index: 10;
        margin-right: 1rem;
}
    .toggle-line {
        width: 30px;
        height: 3px;
        background-color: #222222;
        margin: 5px;
      }
      .toggleanime .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
      }

      .toggleanime .line2 {
        opacity: 0;
      }

      .toggleanime .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
      }
}
</style>