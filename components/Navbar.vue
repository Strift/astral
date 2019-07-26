<template>
  <nav>
    <ul class="flex text-white font-title text-xl">
      <li
        v-for="button in buttons"
        :key="button.section"
        :class="{ 'text-white border-b-4 border-primary': button.active, 'text-gray-600': !button.active }"
        class="inline-block pb-8 px-6"
      >
        <button
          :class="{ flex: button.alert }"
          @click="$emit('nav', button.section)"
        >
          {{ button.text }}
          <span
            v-if="button.alert"
            class="bg-green-500 h-3 w-3 rounded-full ml-2 my-auto"
          />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { validateNavButtonArray } from '~/lib/validators'

export default {
  components: {
  },
  props: {
    buttons: {
      type: Array,
      required: true,
      validator: validateNavButtonArray
    }
  },
  methods: {
    onClick (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
nav {
  box-shadow: 0px -2px 0px #4a5568 inset;
}
</style>
