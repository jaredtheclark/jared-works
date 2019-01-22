<template>
  <div :class="{ 'home': $route.path === '/'}">
      <div id="top-boi"></div>
      <svg id="wavey-boi" preserveAspectRatio="none" viewBox="0 0 414 574" xmlns="http://www.w3.org/2000/svg">
        <path
        d="M414 457.4c-94.968 0-150.475 46.01-244.626 0C75.223 411.39 76.908 382.014 0 379.087V0h414v457.4z"
        fill="#f6f9ff"/>
      </svg>

  </div>
</template>

<script>
  export default {
    components:{
    name:"Wavey"
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
        //console.log(window.scrollY)
      },

      waveyBoi () {

        var paths = [
          "M414 513.4c-94.968 0-118.475 14.01-212.626-32C107.223 435.39 76.908 454.014 0 451.087V0h414v513.4z",
          "M414 465.4c-94.968 0-118.475 102.01-212.626 56C107.223 475.39 76.908 510.014 0 507.087V0h414v465.4z",
          "M414 401.4c-94.968 0-94.968 76.45-212.626 120C83.716 564.951 76.908 510.014 0 507.087V0h414v401.4z",
          "M414 401.4c-94.968 56-94.968 12.45-212.626 56C83.716 500.951 76.908 446.014 0 443.087V0h414v401.4z"
        ];


        // Create a new Timeline (equivalent to new TimelineMax())
        const tl = new this.$gsap.TimelineMax( { repeat:-1, yoyo:true, delay:0 });
        const tlScroll = new this.$gsap.TimelineMax( {delay:0 });
        const tlEndScroll = new this.$gsap.TimelineMax( {delay:0 });


        var easing =  Linear.easeInOut;
        var speed = 3;

        tl.to('#wavey-boi path', speed, {
          attr:{
            d:paths[0]
          },
          ease: easing
        })
          .to('#wavey-boi path', speed, {
            attr: {
              d:paths[1]
            },
            ease: easing
          })
          .to('#wavey-boi path', speed, {
            attr: {
              d:paths[2]
            },
            ease: easing
          })
          .to('#wavey-boi path', speed, {
            attr: {
              d:paths[3]
            },
            ease: easing
          })

        //'close' the blob
        function closeBlob(){
          tlScroll.to('#wavey-boi path', 1, {
            attr:{
            d: "M414 9.4C319.032 65.4 331.65 0 201.374 0 71.097 0 76.908 54.014 0 51.087V0h414v9.4z"
          },
            ease: Power2.easeIn
          })
        }


        //'open' the blob [default state]
        function openBlob(){
          tlEndScroll.to('#wavey-boi path', 1, {
            attr:{
              d: "M414 457.4c-94.968 0-150.475 46.01-244.626 0C75.223 411.39 76.908 382.014 0 379.087V0h414v457.4z"
            },
              ease: Power2.easeOut
          })
          setTimeout(function() {

              }, 1000)
              tl.play()
        }


        // window.addEventListener('scroll', function() {
        //   if (window.scrollY > 0) {
        //     tl.pause()
        //     //closeBlob()
        //   }
        //
        //   else {
        //     //openBlob()
        //     tl.play()
        //     //tlScroll.pause()
        //
        //   }
        //
        // })


        // // create scene and set its params
        // const scene = new this.$scrollmagic.Scene({
        //   triggerElement: '.topbar',
        //   triggerHook: 'onLeave',
        //   duration: 500
        // })
        // // .setPin('#wavey-boi')
        // .setTween(tlScroll)


      //Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
      //this.$ksvuescr.$emit('addScene', 'waveyBoi', scene)
      }
    }
  }


</script>

<style scoped>
  #top-boi{
    position: absolute;
    background-color: #f6f9ff;
    height:3rem;
    width:100vw;
    z-index: -1;
  }
  #wavey-boi {
    top: 3rem;
    width: 100vw;
    z-index: -1;
    position: absolute;
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
  @media screen and (min-width:800px){
    #wavey-boi {
      height: 75vh;
    }
  }

</style>
