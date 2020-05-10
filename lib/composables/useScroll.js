import { ref } from '@vue/composition-api'
import useEvent from '~/lib/composables/useEvent'

export default function () {
  const scrollX = ref(window.scrollX)
  const scrollY = ref(window.scrollY)

  const onScroll = () => {
    scrollX.value = window.scrollX
    scrollY.value = window.scrollY
  }

  useEvent('scroll', onScroll)

  return {
    scrollX,
    scrollY
  }
}
