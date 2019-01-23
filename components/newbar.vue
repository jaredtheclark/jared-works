<template>
    <nav class="topbar">
      <arrow/>
      <p>
        <span>Jared Clark</span>
        <span>digital creator</span>
        <a href="mailto:jared@jared.works">Contact Me</a>
      </p>
    </nav>
</template>

<style lang="scss" scoped>
  .topbar{
    width:100vw;
    display:flex;
    padding-top:1.5em;
    p{
      font-size:.75em;
      line-height: 1.25;
      letter-spacing: 1.25px;
      font-weight: 300;
      justify-content: flex-start;
      display: inline-flex;
      line-height: 1.25;
      flex: 0 1 100%;
      span{
        justify-content: flex-start;
        margin-left:8px;

        &:nth-child(2){
          color:#80889B;
        }
      }
    a {
        margin: 0 1rem 0 auto;
      }
    }
  }
</style>

<script>
  import arrow from '~/assets/images/ui/cool-arrow-short.svg'

  export default {
    components:{
      arrow
    }
  }
</script>
