<template>
  <footer class="container">
    <div>
      <p>
        <span>Jared Clark</span>
        <span>digital creator</span>
        <a href="mailto:jaredtheclark@gmail.com">Contact Me</a>
        <ShortArrow/>
      </p>

    </div>
  </footer>
</template>
<style lang="scss" scoped>
  footer{
    background-color:#F6F9FF;
    border-top:.5rem solid #F3F6FC;
      #social-icons{
        grid-column: span 3;
      }

  a{
      grid-column: 10/span 2;
      color:#E0E0E0;
    }

  div{
      margin: .5em 0 3em;
    }
  }

  footer > div > p  {
    display:flex;
    justify-content: flex-start;

    > * {
      font-size: .75rem;
      font-weight:500;
      letter-spacing:1.25px;
      color: #4A4A4A;
    }

    span {
      margin-right: 8px;
      &:nth-child(2){
        font-weight:300;
        color:#828282;
        @media screen and (max-width: 390px){
          display:none;
        }
      }
    }

    a {
      margin-left:auto;
    }

  }
   svg {
    animation: slide1 2s ease-in-out infinite;
    margin: .5rem;
}

@keyframes slide1 {
  0%{
    transform: translate(0, 0);
  }
  50% {
    transform: translate(8px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>

<script>
  import ShortArrow from '~/assets/images/ui/cool-arrow-short.svg'

  export default {
    components: {
      ShortArrow
    }
  }
</script>
