<template>
  <nav>
    <ul class="flex flex-wrap text-white text-xl">
      <li
        v-for="section in sections"
        :key="section.section"
        :class="{ 'text-white border-b-4 border-primary': section.active, 'text-gray-light': !section.active }"
        class="inline-flex pb-8 px-6"
      >
        <nuxt-link
          :to="section.url"
          :class="{ flex: section.alert }"
          class="font-title tracking-widest"
        >
          {{ section.text }}
          <span
            v-if="section.alert"
            class="bg-green h-3 w-3 rounded-full ml-2 my-auto"
          />
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { validateNavSectionArray } from '~/lib/validators'

export default {
  components: {
  },
  props: {
    sections: {
      type: Array,
      required: true,
      validator: validateNavSectionArray
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
