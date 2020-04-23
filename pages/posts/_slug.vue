<template>
  <div class="post-container">
    <component :is="singlePostComponent" />
  </div>
</template>
<style scoped>
  .post-container {
    padding: 1rem 3rem;
  }
</style>
<script>
import Prism from 'prismjs'
export default {
  async asyncData({ params }) {
    try {
      let post = await import(`~/content/${params.slug}.md`);
      return {
        title: post.attributes.title,
        singlePostComponent: post.vue.component
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  },
  mounted() {
    Prism.highlightAll()
  },
};
</script>