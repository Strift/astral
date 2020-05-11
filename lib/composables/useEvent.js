import { onMounted, onBeforeUnmount } from '@vue/composition-api'

export default function (event, handler) {
  onMounted(() => {
    window.addEventListener(event, handler)
  })

  onBeforeUnmount(() => {
    window.removeEventListener(event, handler)
  })
}
