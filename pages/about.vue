<template>
  <div class="container">
    <section>
      <h2>Hi, Nice to meet you, I’m Jared Clark.</h2>
      <p>If you for some reason hadn’t noticed, I work</p>
      <p>I'm currently working a Senior Product Manager at Lauren James and am interested in improving Ecommerce with design and technology, I also spend some of my time thinking about Water Levels.</p>
      <p>I've previously worked as a ux designer at an agency, and originally got interested in ecommerce in college at another fashion startup. Before Lauren James, I lived in a society. When I'm not designing, find me on two wheels ripping it through the trees or the streets.</p>
      <p>If you’re into it, check me out around the web here!</p>
      <SocialIcons/>
      <p>Or if you’re super not, <a href="">shoot me an email</a> or <a href="">checkout my resumé</a></p>
    </section>
  </div>
</template>

<script>
  import SocialIcons from '~/components/SocialIcons.vue'

  export default {
    components: {
      SocialIcons
    }
  }
</script>

<style lang="scss">
  section > * {
    grid-column: 3 / span 8;
  }
</style>
