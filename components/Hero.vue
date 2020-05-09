<template>
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
    </div>
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
