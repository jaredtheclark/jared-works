<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
  <div class="main">
    <Wavey />
    <newbar />
    <div class="container">
    <div id="big-circle">
      <svg height="1249" viewBox="0 0 1249 1249" width="1249" xmlns="http://www.w3.org/2000/svg"><path d="m624.5 1034.35937c226.359082 0 409.85937-183.500288 409.85937-409.85937s-183.500288-409.859375-409.85937-409.859375-409.859375 183.500293-409.859375 409.859375 183.500293 409.85937 409.859375 409.85937zm0 214.64063c-344.901826 0-624.5-279.598174-624.5-624.5s279.598174-624.5 624.5-624.5 624.5 279.598174 624.5 624.5-279.598174 624.5-624.5 624.5z" fill="#f6f9ff"/></svg>
    </div>
    <section id="intro">
      <div>
        <h1>
        digital strategy, front end design &amp; dev
        </h1>
        <a href="/resume.pdf" download="Jared_Clark_Resume">resumé download</a>
      </div>
    </section>
    <section id="lauren-james">
      <div>
        <span>2019</span>
        <h1>Lauren James</h1>
        <div class="divider"></div>
        <p>
Lauren James is an online retailer that sells high fashion women's apparel. I joined the Lauren James team in 2017 as UX Lead and now work as the Director of Digital Strategy &amp; Marketing.
         </p>
      </div>
      <div class="floating-images">
        <img src="~assets/images/projects/floating-6.jpg" />
        <floating1/>
        <floating2/>
        <floating4/>
        <img src="~assets/images/projects/floating-5.png" />
      </div>
    </section>
    <section id="scribel">
      <div>
        <span>2018</span>
        <h1>Scribel</h1>
        <div class="divider"></div>
        <p>
          Scribel is an app a few friends and I worked on that helps courtroom Interpreters by setting up a peer-to-peer connection between two WebRTC capable devices.
        </p>
      </div>
      <img src="~assets/images/projects/images-scrible-mockup@2x.png" />
    </section>
    <section id="water-levels">
      <div>
        <span>2018 - <span style="font-style:italic;">Current</span> Date</span>
        <h1>Water Levels</h1>
        <div class="divider"></div>
        <p>
          Water Levels started as a small front-end project for a friend grew into an obsession with water levels. waterlevels.us is a website powered by Vue that informs users of water levels in real time with the USGS API.
        </p>

      </div>
      <img src="~assets/images/projects/images-waterlevels-mockup@2x.png" />
    </section>
  </div>
  </div>
  <AppFooter />
</div>
  </div>
</template>


<style lang="scss">

.container{
  padding-bottom:8rem;
}
/* giant circle that zoops along the left side of the viewport*/
#big-circle{
  position: absolute;
  top: 100%;
  left: -80%;
  z-index: -1;
  transform: translateX(-50%)scale(.8);
}
  .container {
    grid-row-gap: 16rem;
    position: relative;
    overflow:hidden;

      #intro > div  {

          & > h1 {
            line-height: 2.75rem;
            margin:11rem 0 1rem;
          }

              a {
                position: relative;
                align-self: flex-start;
                line-height: 2rem;
                color:#1F293C;
                //overflow: hidden;

                  &::after {
                    content:'';
                    position: absolute;
                    bottom:0;
                    left:0;
                    width:100%;
                    height:2px;
                    background-color: transparent;
                    transform: translate(-100%,0);
                    opacity:1;
                    z-index: -1;

                    // transition:
                    //   transform 900ms steps(1) 900ms;
                    will-change: transform, background-color;
                    }
                  &:hover::after {
                     animation://dlHover_1 300ms,
                               dlHover_2 steps(1),
                               dlHover_3 400ms cubic-bezier(0.250, 0.250, 0.000, 1.650);;

                    transform: translate(0, 0);
                    background-color:#919CB0;
                  }

                  @keyframes dlHover_1 {
                    0% {transform:translate(-100%, 0)}
                    100%{
                      transform:translate(100%, 0);
                    }
                  }
                  @keyframes dlHover_2 {
                    0% {
                      transform:translate(100%, 0) scale(1, 1);
                      background-color:#919CB0;
                    }
                    100%{
                      transform:translate(0, -1em) scale(1, 2);
                      background-color:white;
                    }
                  }
                  @keyframes dlHover_3 {
                    0% {
                      transform:translate(0, -1em) scale(1, 2);
                      background-color: white;
                    }
                    100%{
                      transform:translate(0, 0) scale(1, 1);
                      background-color: #919CB0;
                    }
                  }
                }
            }


    & section {
      grid-row-gap: 1.5em;

      &  > div {
        grid-column: span 12;
        display: flex;
        flex-direction: column;
        align-self: center;

          span:first-child {
            font-family: AvenirNext-Regular, sans-serif;
            letter-spacing: 2px;
            color: #80889B;
            font-size: 10px;

          }

          h1 {
            line-height: 3.75rem;
          }

          .divider {
            width:3rem;
            height:2px;
            margin-bottom:.5rem;
          }

          p {
            font-size: .75rem;
            font-weight: normal;
            line-height: 1.25rem;
            color:#616678;
            @media screen and (min-width:1140px) {
              & {
                font-size:1rem;
              }
            }
          }

      }

      img {
        grid-column: span 12;
      }

      /* color the dividers for each project */
      &#lauren-james .divider{
        background-color: #ffa0bf;
      }

      &#scribel .divider{
        background-color: #154CFF;
      }

      &#water-levels .divider{
        background-image: linear-gradient(-90deg, #2065F3 0%, #35A0FA 100%);
      }

      /* position the floating images */
      &#lauren-james {
        .floating-images {
          position: relative;
          height:32vw;
          margin-top: 10%;

          &  > * {
            position:absolute;
            box-shadow: 0 3px 17px 0 rgba(0,0,0,0.18);

              &:nth-child(1){
                width: 90%;
              }

              &:nth-child(2){
                top: -5%;
                left: 80%;
                border-radius: 100%;
                width: 7%;
              }

              &:nth-child(3){
                right: 5%;
                bottom: 10%;
                width: 45%;
              }

              &:nth-child(4){
                top: 30%;
                left: -4%;
                width: 33%;
              }

              &:nth-child(5){
                width: 19%;
                bottom: 17%;
                left: 3%;
              }


            }
            @media screen and (max-width: 800px) {
              & {
                margin-top:0;
              }
              & img:nth-child(1){
                width: 100vw;
              }

              & svg:nth-child(2){
                top: 34%;
                left: -1%;
                border-radius: 100%;
                width: 11%;
                z-index: 2;
              }

              & svg:nth-child(3){
                right: 3%;
                bottom: auto;
                width: 68%;
                top: 100%;
                z-index: 2;
              }

              & svg:nth-child(4){
                top: 65%;
                right: -3%;
                width: 49%;
                left: auto;

              }

              & img:nth-child(5){
                width: 39%;
                bottom: -95%;
                left: -2%;
              }

            }

          }

        }
        @media screen and (max-width: 500px){
          &#scribel img{
            transform: translate(20%, 22%)scale(1.5);
          }
        }
      }

  }


/* first media query! */
@media screen and (min-width: 800px) {
  .container section > div:first-child, section img {
    grid-column: 2 / span 4;
  }
  .container section:not(#lauren-james) > div:nth-child(2) {
      grid-column: 6 / span 6;
  }

  #big-circle{
    transform: scale(1.2);
  }

  #intro{
    margin:8.25em 0 6.75em;
      > div {
        grid-column: span 8;
          h1 {
            max-width: 50vw;
          }
      }
  }

  .container section#lauren-james {
    margin: -4rem 0;

      & > div.floating-images {
        grid-column: 7 / span 6;
      }

    }


  #scribel {
    & > div {
      grid-column: 2 / span 3;
    }

    img{
      grid-column: 6 / span 7;
    }

  }
    #water-levels{
      > div:first-child {
        grid-column: 2 / span 3;
      }

      img{
        grid-column: 6 / span 7;
      }
      img:nth-of-type(2){
      }
      .divider{
        background-color: blue
      }
    }
    #learn-more{
      div {
        grid-column: 3 / span 8;
      }
    }

    #big-circle {
      left:-50%;
    }
  }
  @media screen and (min-width: 1200px){
    #lauren-james {
          margin:0;
    }
    section div:first-child {
      grid-column: 2 / span 3;
    }
    .intro div h1 {
      max-width: 40vw;
    }
  }



.main {
  min-height: 100vh;
}
</style>
<script>

import AppFooter from '~/components/AppFooter.vue'

import newbar from '~/components/newbar.vue'
import Wavey from '~/components/Wavey.vue'

import floating1 from '~/assets/images/projects/floating-1.svg?component';
import floating2 from '~/assets/images/projects/floating-2.svg?component';
import floating3 from '~/assets/images/projects/floating-3.svg?component';
import floating4 from '~/assets/images/projects/floating-4.svg?component';


export default {
  components: {
    AppFooter,
    newbar,
    Wavey,

    floating1,
    floating2,
    floating4
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

  },





    // const { $gsap, $ScrollTrigger } = useNuxtApp()


  

  mounted () {
    // this.$nextTick(this.dividerAnimate),
    this.$nextTick(this.circleParallax);
  },
  methods:{
    // dividerAnimate () {
    //   const divtl = new this.$gsap.TimelineMax( { repeat:-1, yoyo:true, delay:0 });
    //   divtl.to('.divider', 50, {
    //     width: {function(){
    //       min = (2);
    //       max = (4);
    //       var result = Math.floor(Math.random() * (max - min)) + min + "rem";
    //       console.log(result)
    //       return result; //The maximum is exclusive and the minimum is inclusive
    //     }}
    //   })
    // },
    // circleParallax (){

    //   //create new gsap instance and add a tween
    //   const circle_timeline = new this.$gsap.TimelineMax({ease: Power2.easeInOut});
    //   var circle_tween = circle_timeline.to('#big-circle', .5, {top:"-5%"})

    //   // create scene and set its params
    //   const scene = new this.$scrollmagic.Scene({
    //     offset: '100vh',
    //     triggerElement:'.container',
    //     triggerHook:'onLeave',
    //     duration: 4000,
    //     loglevel: 2
    //   })
    //   .setTween(circle_tween)

    // //Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
    // this.$ksvuescr.$emit('addScene', 'circleParallax', scene)
    // }
  },

}





</script>
