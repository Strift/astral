<template>
  <div class="h-screen overflow-hidden relative bg-bottom bg-video z-0">
    <slot name="default" />
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

<style type="text/css" scoped>
.bg-video {
  background-image: url(~assets/images/background.jpg);
}
</style>
