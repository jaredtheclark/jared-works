<template>
  <div class="container">
    <nav class="mainNav grid">
      <nuxt-link to="/">
        <AppLogo/>
      </nuxt-link>
      <ul>
        <li><nuxt-link to="/about">about</nuxt-link></li>
        <li><nuxt-link to="/projects">projects</nuxt-link></li>
        <li><nuxt-link to="/contact">contact</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">

.mainNav{
  padding:4em 0;
  a{
    grid-column: span 2;
  }
   ul{
    grid-column: 10 / span 3;
    list-style: none;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: flex-end;

     li{
      margin-left:1.5em;
    }
  }
}
</style>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo
    }
  }
</script>
