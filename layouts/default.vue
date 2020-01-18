<template>
  <div>

     <div v-if="$auth.loggedIn">
       {{ $auth.user.email }}
       <v-btn text>Logout</v-btn>
     </div>

     <div v-else>
       <router-link text to="/login">Login</router-link>
       <router-link text to="/register">Register</router-link>
     </div>


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
