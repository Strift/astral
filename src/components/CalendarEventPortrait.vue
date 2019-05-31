<template>
  <img
    :src="imageUrl"
    class="rounded-full h-8"
  />
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>
