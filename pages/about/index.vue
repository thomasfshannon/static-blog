<template>
  <div class="about-container">
    <p>I'm just a dude with a <nuxt-link to="/posts">blog</nuxt-link>.</p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
    .about-container {
        padding: 1rem 3rem;
    }
</style>
