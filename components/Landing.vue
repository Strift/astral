<template>
  <div class="h-screen overflow-hidden relative bg-video z-0">
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
      src="/astral-bg-web.mp4"
      autoplay
      muted
      loop
      class="absolute bottom-0 hidden lg:block"
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

.bg-video {
  background-image: url(~assets/images/background.jpg);
  background-position: bottom;
}
</style>
