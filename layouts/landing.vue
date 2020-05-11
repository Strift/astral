<template>
  <div class="h-screen">
    <PerfectScrollbar
      class="overflow-hidden h-screen"
      @ps-scroll-y="onScroll"
    >
      <BackgroundVideo>
        <Navbar class="absolute z-10" />
        <LandingHero />
      </BackgroundVideo>
      <div class="bg-black text-gray-lightest">
        <div class="container mx-auto">
          <LandingNav
            :sections="sections"
          />
          <div class="mt-16 mb-16">
            <nuxt />
          </div>
        </div>
        <BaseFooter class="mt-12" />
      </div>
    </PerfectScrollbar>
  </div>
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import LandingHero from '~/components/LandingHero'
import LandingNav from '~/components/LandingNav'
import Navbar from '~/components/Navbar'
import BaseFooter from '~/components/BaseFooter'
import BackgroundVideo from '~/components/BackgroundVideo'

export default {
  components: {
    PerfectScrollbar,
    LandingHero,
    LandingNav,
    Navbar,
    BaseFooter,
    BackgroundVideo
  },
  data () {
    return {
      sections: [
        { text: 'Presentation', url: '/' },
        { text: 'Progress', url: '/progress' },
        { text: 'Recrutement', url: '/recrutement', alert: true }
      ]
    }
  },
  methods: {
    onScroll (event) {
      this.$store.commit('setScrollY', event.target.scrollTop)
    }
  }
}
</script>
