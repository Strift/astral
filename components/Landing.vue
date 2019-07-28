<template>
  <div class="h-screen overflow-hidden relative">
    <div class="absolute h-full w-full">
      <div class="flex h-full">
        <div class="mx-auto my-auto text-white text-center">
          <h1 class="font-title tracking-widest">
            Astral
          </h1>
          <p class="uppercase font-semibold mb-24 font-sans tracking-widest">
            Guilde WoW Classic - Serveur PvP
          </p>
        </div>
      </div>
    </div>
    <video
      src="/background.mov"
      poster="~assets/images/bg-poster.png"
      autoplay
      muted
      loop
      class="absolute bottom-0"
      style="z-index: -1"
    />
  </div>
</template>

<script>
export default {

}
</script>

<style type="text/css" scoped>
h1 {
  font-size: 100px;
}

p {
  font-size: 20px;
}
</style>
