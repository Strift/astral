<template>
  <div class="h-screen overflow-hidden relative">
    <div class="absolute z-10 h-full w-full">
      <div class="flex h-full">
        <div class="mx-auto my-auto text-white text-center">
          <h1 class="font-title">
            Astral
          </h1>
          <p class="uppercase font-semibold mb-24 font-sans">
            Guilde WoW Classic - Serveur PvP
          </p>
        </div>
      </div>
    </div>
    <video id="myVideo" autoplay muted loop class="absolute z-0 bottom-0">
      <source src="/background.mov" type="video/mp4">
    </video>
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
