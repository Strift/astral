<template>
  <div>
    <BaseHeader/>
    <Landing/>
    <div class="bg-black">
      <div class="container mx-auto">
        <Navbar/>
        <div class="mt-16 mb-16">
          <slot name="default"/>
        </div>
      </div>
      <footer class="container mx-auto text-center text-white mt-24 pb-10">
        &copy; 2019 Astral
      </footer>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader'
import Landing from '@/components/Landing'
import Navbar from '@/components/Navbar'

export default {
  name: 'home',
  components: {
    BaseHeader,
    Landing,
    Navbar
  }
}
</script>
