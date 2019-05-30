<template>
  <div class="flex flex-col h-full w-full font-sans text-white">
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
