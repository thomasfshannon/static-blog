<template>
  <div class="post-container">
    <nav>
      <ul class="breadcrumb">
        <li><nuxt-link to="/posts">blog</nuxt-link></li>
        <li>/</li>
        <li v-if="slug"><strong>{{ slug }}</strong></li>
      </ul>
    </nav>
    <component :is="singlePostComponent" />
  </div>
</template>
<style scoped>
  .post-container {
    padding: 1rem 3rem;
  }
  .breadcrumb {
    display: flex;
    padding-bottom: 1rem;
  }
  .breadcrumb li {
    margin-right: 1rem;
    list-style: none;
  }

  .breadcrumb li a {
    color: #000;
    text-decoration: none;
  }

  .breadcrumb li a:hover {
    text-decoration: underline;
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
        singlePostComponent: post.vue.component,
        slug: params.slug,
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