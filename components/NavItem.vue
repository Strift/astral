<template>
  <li
    :class="{ 'text-white border-b-4 border-primary': isActive, 'text-gray-light': !isActive }"
    class="inline-flex pb-8 px-6"
  >
    <nuxt-link
      :to="url"
      :class="{ flex: alert }"
      class="font-title tracking-widest"
    >
      <slot name="default" />
      <span
        v-if="alert"
        class="bg-green h-3 w-3 rounded-full ml-2 my-auto"
      />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    alert: {
      type: [Boolean],
      required: true
    }
  },
  computed: {
    isActive () {
      return this.$route.path === this.url || this.$route.path === `${this.url}/`
    }
  }
}
</script>
