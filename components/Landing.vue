<template>
  <div class="h-screen overflow-hidden relative bg-video z-0">
    <div class="absolute h-full w-full">
      <div class="flex h-full">
        <div class="mx-auto my-auto text-white text-center px-6">
          <h1 class="font-title text-7xl lg:text-hero tracking-widest">
            Astral
          </h1>
          <p class="uppercase font-semibold mb-24 font-sans tracking-widest">
            Guilde WoW Classic
            <span class="hidden md:inline"> -</span>
            <br class="inline md:hidden">
            Serveur PvP
          </p>
        </div>
      </div>
    </div>
    <video
      src="https://firebasestorage.googleapis.com/v0/b/astral-6e63b.appspot.com/o/astral-bg.mov?alt=media&token=1af54505-31b1-4333-93c3-f56dac9b7bea"
      autoplay
      muted
      loop
      class="absolute bottom-0 hidden xl:block"
      style="z-index: -1"
    />
  </div>
</template>

<script>
export default {

}
</script>

<style type="text/css" scoped>
p {
  font-size: 20px;
}

.bg-video {
  background-image: url(~assets/images/background.jpg);
  background-position: bottom;
}
</style>
