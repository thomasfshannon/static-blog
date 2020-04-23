<template>
  <div>
    <v-nav></v-nav>
    <nuxt />
  </div>
</template>

<script>
import VNav from '../components/layout/Nav'
export default {
  components: {
    VNav,
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

* {
    margin: 0;
    padding: 0;
}

li {
  list-style: none;
}
</style>
