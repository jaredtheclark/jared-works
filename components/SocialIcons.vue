<template>
  <div id="social-icons">
    <Behance/>
    <Codepen/>
    <Dribbble/>
    <Spotify/>
  </div>
</template>


<script>
  import Behance from '~/assets/images/icons/behance.svg'
  import Codepen from '~/assets/images/icons/codepen.svg'
  import Dribbble from '~/assets/images/icons/dribbble.svg'
  import Spotify from '~/assets/images/icons/spotify.svg'

  export default {
    name:'SocialIcons',
    components:{
      Behance,
      Codepen,
      Dribbble,
      Spotify
    }
  }

</script>

<style lang="scss">
  #social-icons{
    display:flex;

    svg{
        width:1.5em;
        margin-right:2.5em;
    }
  }

</style>
