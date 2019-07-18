<template>
<div>
  <div class="main">
    <Wavey />
    <newbar />
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

import newbar from '~/components/newbar.vue'
import Wavey from '~/components/Wavey.vue'


export default {
  components: {
    AppFooter,
    newbar,
    Wavey
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
