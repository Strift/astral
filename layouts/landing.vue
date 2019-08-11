<template>
  <div class="h-full w-full">
    <BaseHeader />
    <Hero />
    <div class="bg-black text-gray-lightest">
      <div class="container mx-auto">
        <Navbar
          :sections="sections"
        />
        <div class="mt-16 mb-16">
          <nuxt />
        </div>
      </div>
      <footer class="container mx-auto text-center text-white mt-24 pb-10">
        &copy; 2019 Astral
      </footer>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import Navbar from '~/components/Navbar'
import BaseHeader from '~/components/BaseHeader'

export default {
  components: {
    Hero,
    Navbar,
    BaseHeader
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
