import { ref, onMounted, onBeforeUnmount } from '@vue/composition-api'

export default function () {
  const scrollX = ref(window.scrollX)
  const scrollY = ref(window.scrollY)

  const onScroll = () => {
    scrollX.value = window.scrollX
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return {
    scrollX,
    scrollY
  }
}
