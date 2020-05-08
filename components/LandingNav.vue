<template>
  <nav>
    <ul class="flex flex-wrap text-white text-xl">
      <NavItem
        v-for="section in sections"
        :url="section.url"
        :alert="section.alert ? true : false"
        :key="section.text"
      >
        {{ section.text }}
      </NavItem>
    </ul>
  </nav>
</template>

<script>
import NavItem from '~/components/NavItem'
import { validateNavSectionArray } from '~/lib/validators'

export default {
  components: {
    NavItem
  },
  props: {
    sections: {
      type: Array,
      required: true,
      validator: validateNavSectionArray
    }
  }
}
</script>

<style scoped>
nav {
  box-shadow: 0px -2px 0px #4a5568 inset;
}
</style>
