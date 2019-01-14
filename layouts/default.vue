<template>
  <div>
    <div class="main">
      <Wavey/>
      <newbar/>
      <nuxt/>
    </div>
    <AppFooter/>
  </div>
</template>
<style lang=scss>
  .main{
    min-height: 100vh;
  }
</style>
<script>
  import newbar from '~/components/newbar.vue'
  import AppFooter from '~/components/AppFooter.vue'
  import Wavey from '~/components/Wavey.vue'

  export default {
    components: {
      newbar,
      AppFooter,
      Wavey
    },
  }



</script>
