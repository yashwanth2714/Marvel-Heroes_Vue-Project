<template>
  <div id="app">
    <div id="nav">
      <div id="logo"><img :src="logo" alt="Marvel" ></div>
      <router-link to="/" id="link1">Characters</router-link> |
      <router-link to="/about" id="link2">Comics</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
        logo: require('@/assets/marvelLogo1.webp')
    }
  }
}
</script>
<style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

    #nav {
      padding: 10px;
      margin-bottom: 30px;
      background: #100e17;
      border-bottom: 1px solid #201c29;
      display: flex;
      flex-flow: row wrap;
    }

    #nav a {
      font-weight: bold;
      color: White;
    }

    #nav a.router-link-exact-active {
      color: #42b983;
    }

    .items div {
        color: #f5d67b;
    }
    #logo {
      flex: 2
    }
    #link1, #link2 {
      display: none;
    }
    #logo img {
      width: auto;
      height: 70px;
    }
</style>
