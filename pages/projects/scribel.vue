<template>
  <section class="container">
    <div>
      <h1 class="title">
        jared.works
      </h1>
      <h2 class="subtitle">
        In fact, I'm working on this site right now.
      </h2>
    </div>
  </section>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'
//
// export default {
//   components: {
//     AppLogo
//   }
// }
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 900;
  font-size: 24px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 16px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
