<template>
  <div class="h-screen overflow-hidden relative bg-bottom bg-video z-0">
    <div class="layout absolute h-full w-full text-white">
      <div
        class="h-full text-center flex"
        style="grid-row: 2"
      >
        <div class="m-auto">
          <h1 class="font-title text-7xl lg:text-hero tracking-widest">
            Astral
          </h1>
          <p
            class="uppercase font-semibold mb-16 font-sans tracking-widest"
            style="font-size: 20px;"
          >
            Guilde PvE HL
            <span class="hidden md:inline"> -</span>
            <br class="inline md:hidden">
            Sulfuron (JCJ)
          </p>
        </div>
      </div>
      <div
        class="flex h-full"
        style="grid-row: 3"
      >
        <client-only>
          <ScrollDownIcon />
        </client-only>
        <!-- <p class="floatting bg-green px-4 py-1 rounded-full m-auto">
          Recrutement ouvert
        </p> -->
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
import ScrollDownIcon from '~/components/ui/ScrollDownIcon'

export default {
  components: {
    ScrollDownIcon
  }
}
</script>

<style type="text/css" scoped>
.bg-video {
  background-image: url(~assets/images/background.jpg);
}

.layout {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 20% 60% 20%;
grid-column-gap: 0px;
grid-row-gap: 0px;
}
</style>
