<template>
    <div class="post-container">
        <h1>My blog posts</h1>
        <ul class="post-list">
            <li class="post-list-item" v-for="post in posts" :key="post.attributes.title">
                <nuxt-link :to="getPermalink(post)">{{ post.attributes.title }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>
<style scoped>
  .post-container {
    padding: 1rem 3rem;
  }
  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .post-list-item {
    padding-top: 1rem;
  }
</style>
<script>
export default {
  async asyncData() {
    const resolve = require.context("~/content/", true, /\.md$/);
    const imports = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);
      return resolve(key);
    });
    return {
      posts: imports
    };
  },
  data() {
    return {
      prefix: 'posts'
    }
  },
  methods: {
    getPermalink(post) {
        return  `${this.prefix}/${post.meta.resourcePath.split('\\').pop().split('/').pop().split('.')[0]}`;
    }
  }
};
</script>