<template>
  <div :class="{ 'home': $route.path === '/'}">

      <svg id="wavey-boi" viewBox="0 0 414 618" xmlns="http://www.w3.org/2000/svg">
        <path
        d="M414 191.17c-94.968 0-150.817-57.626-228.289-61.03C108.241 126.739 76.908 69.654 0 66.728V0h414v267.087-75.918z"
        fill="#f6f9ff"/>
      </svg>

  </div>
</template>

<script>
  export default {
    name: "Wavey",
    data() {
      return {};
    },
    created () {
        if (process.browser) {
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    destroyed () {
        if (process.browser) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    },
    mounted () {
      this.$nextTick(this.waveyBoi)
    },

    methods: {
      handleScroll () {
        console.log(window.scrollY)
      },
      waveyBoi () {

        var paths = [
            { d:"M414 457.4c-94.968 0-150.475 46.01-244.626 0C75.223 411.39 76.908 270.014 0 267.087V0h414v457.4z"},
            { d:"M414 453.168c-94.968 0-150.817-52.254-228.289-55.657C108.241 394.11 76.908 537.683 0 534.757V0h414v453.168z"},
            { d:"M414 191.17c-94.968 0-150.817-57.626-228.289-61.03C108.241 126.739 76.908 69.654 0 66.728V0h414v267.087-75.918z"},
            { d:"M414 191.17c-132.584 109.918-92.381-78.06-191.97-114.491C122.444 40.248 76.909 384.713 0 381.787V0h414v267.087-75.918z"}
        ];
        // console.log(this.$el.$anime)
        const targets = this.$el;
        this
          .$anime
          .timeline()
          .add({
            targets:'#wavey-boi path',
            d: {
              value:paths[0].d
            },
            easing: 'easeOutExpo'
          })

          /* ... etc ... */




      //   // create scene and set its params
      //   const scene = new this.$scrollmagic.Scene({
      //     triggerElement: '#lauren-james',
      //     triggerHook: 'onEnter',
      //     duration: `${100}%`
      //   })
      //   .setPin('#intro')
      //   .setTween(tl)
      //
      // // Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
      // this.$ksvuescr.$emit('addScene', 'waveyBoi', scene)
      }
    }
  }


</script>

<style scoped>
  #wavey-boi {
    top: 0;
    width: 100vw;
    z-index: -1;
    position: fixed;
  }
  .animated {
    will-change: margin-top, scale;
    transition: margin-top 300ms ease-out, scale 300ms ease-out;
    transform: scale(.5);
  }
  .animated.home {
    margin-top:20vh;
    transform: scale(1);

  }

</style>
