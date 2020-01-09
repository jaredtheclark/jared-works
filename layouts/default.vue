<template>


  <div>
     <ul>
       <li>
         <router-link to="/apollo-test/">Index</router-link>
       </li>
       <li>
         <router-link to="/apollo-test/page-a">Page A - only logged in user</router-link>
       </li>
       <li>
         <router-link to="/apollo-test/page-b">Page B</router-link>
       </li>
     </ul>




  <div class="main">
    <nuxt />
  </div>
  <AppFooter />
</div>
</template>
<style lang=scss>
.main {
  min-height: 100vh;
}
</style>
<script>

import AppFooter from '~/components/AppFooter.vue'


export default {
  components: {
    AppFooter
  },

  data() {
    return {

    }
  },
  head() {
    return {
      meta: [
      ]
    }
  },
  created: function() {

  }
}
</script>
