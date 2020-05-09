<template>
  <div
    class="group h-12 w-12 rounded-full border-2 border-white m-auto flex floatting"
    :style="{ opacity: opacity }"
  >
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 330 330"
      style="enable-background:new 0 0 330 330;"
      xml:space="preserve"
      class="h-6 w-6 m-auto fill-current group-hover:text-primary"
    >
      <title>Scroll down icon</title>
      <g id="XMLID_169_">
        <path
          id="XMLID_197_"
          d="M304.394,139.394l-139.39,139.393L25.607,139.393c-5.857-5.857-15.355-5.858-21.213,0.001
      c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150
      c5.858-5.858,5.858-15.355,0-21.213C319.749,133.536,310.251,133.535,304.394,139.394z"
        />
        <path
          id="XMLID_221_"
          d="M154.398,190.607c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150
      c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-139.39,139.393L25.607,19.393
      c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L154.398,190.607z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'

import useScroll from '~/lib/composables/useScroll'

// const SCROLL_HEIGHT = 300

export default {
  setup () {
    const { scrollY } = useScroll()

    const opacity = computed(() => {
      const value = scrollY.value > 400 ? 0 : 100 - scrollY.value / 4
      return `${value}%`
    })

    return {
      opacity
    }
  }
}
</script>

<style type="text/css" scoped>
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-0.5rem);
  }
  100% {
    transform: translatey(0px);
  }
}

.floatting {
  transform: translatey(0px);
  animation: float 2s ease-in-out infinite;
}
</style>
