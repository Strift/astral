<template>
  <div>
    <BackgroundVideo>
      <BaseHeader class="absolute z-10" />
      <Hero />
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
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import LandingNav from '~/components/LandingNav'
import BaseHeader from '~/components/BaseHeader'
import BaseFooter from '~/components/BaseFooter'
import BackgroundVideo from '~/components/BackgroundVideo'

export default {
  components: {
    Hero,
    LandingNav,
    BaseHeader,
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
  }
}
</script>
