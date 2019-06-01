<template>
  <div class="background flex flex-col h-full w-full font-sans text-white">
    <HomeHeader/>
    <div class="my-auto text-center">
      <h1 class="font-hairline text-brand text-shadow-md leading-snug">
        Astral
      </h1>
      <h2 class="text-xl text-shadow font-semibold tracking-wide">
        Alliance | Guilde PvE semi-hardcore | Serveur PvP
      </h2>
    </div>
    <HomeFooter/>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader'
import HomeFooter from '@/components/HomeFooter'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>

<style type="text/css" scoped>
.background {
  background-image: url('../assets/images/background.jpg');
  @apply .bg-cover;
}
</style>
