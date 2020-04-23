<template>
    <nav>
        <ul>
            <li><nuxt-link to="/">home</nuxt-link></li>
            <li><nuxt-link to="/posts">blog</nuxt-link></li>
            <li><nuxt-link to="/about">about</nuxt-link></li>
        </ul>
    </nav>
</template>
<style scoped>
    li {
        list-style: none;
        margin-right: 1rem;
    }
    nav ul {
        background: #181818;
        padding: 1rem 3rem;
        color: #f7f7f7;
        display: flex;
    }

    nav a {
        color: inherit;
        text-decoration: none;
    }
</style>
<script>
export default {
    
}
</script>