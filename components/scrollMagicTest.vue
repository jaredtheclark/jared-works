<div id="app">
  <div class="pinContainer" ref="pin">
    <section v-for="(p, index) in panels" class="panel" :class="`panel-${index}`" :style="{backgroundColor: p.bgColor}" >
      {{ p.title }}
    </section>
  </div>
</div>
<style>

body {
  margin: 0;
}

.pinContainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.panel {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3rem;
}
</style>

<script>
var app = new Vue({
  el: '#app',
  mounted() {
    this.$nextTick(this.pinContainerScene)
  },
  data() {
    return {
      panels: [{
          title: 'panel 1',
          bgColor: '#29b6f6'
        },
        {
          title: 'panel 2',
          bgColor: '#ef5350'
        },
        {
          title: 'panel 3',
          bgColor: '#ec407a'
        },
        {
          title: 'panel 4',
          bgColor: '#66bb6a'
        }
      ]
    }
  },
  methods: {
    pinContainerScene() {
      const Length = this.panels.length

      // Create a new Timeline (equivalent to new TimelineMax())
      const tl = new this.$gsap.TimelineMax()

      for (var i = 0; i < Length; i++) { // For each panel in this.panels array:
        let animFrom, animOutLetters;
        switch (i) { // Set animFrom value, depending on the index i of the item
          case 0:
            break; // First panel is already visible on page load, so no animation
          case 1:
            animFrom = {
              x: '-100%'
            } // Second panel comes from the left
            break;
          case 2:
            animFrom = {
              x: '100%'
            } // Third one comes from the right
            break;
          case 3:
            animFrom = {
              y: '-100%'
            } // Finally, the last one comes from the top
            break;
        }
        if (i !== 0) { // For each panel except the one whom index is 0, create the tween and add it to the tl timeline
          tl.fromTo(`section.panel-${i}`, 1.5, animFrom, {
            x: '0%',
            y: '0%',
            ease: Linear.easeNone
          })
        }
      }

      // create scene and set its params
      const scene = new this.$scrollmagic.Scene({
          triggerElement: '.pinContainer',
          triggerHook: 'onLeave',
          duration: `${Length * 200}%` // each panel animation will last 200% of the screen's height
        })
        .setPin('.pinContainer')
        .setTween(tl)

      // Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
      this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene)

      // TAAAAAAADAAAAAAAAAAAA
    }
  },
  destroyed() {
    // Destroy ScrollMagic when our component is removed from DOM
    this.$ksvuescr.$emit('destroy')
  }
})
</script>
