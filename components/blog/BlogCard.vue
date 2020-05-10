<template>
  <BaseCard class="float-on-hover hover:shadow-lg hover:bg-blue hover:bg-opacity-50">
    <div class="text-white text-xl font-title tracking-wider mb-4">
      {{ title }}
    </div>
    <div class="mb-8">
      {{ preview }}
    </div>
    <div class="flex items-center">
      <img
        src="https://pbs.twimg.com/profile_images/1068880894851723264/ZVEW4vi__400x400.jpg"
        alt="Author"
        class="rounded-full h-10"
      >
      <div class="ml-4">
        {{ author.name }}
      </div>
      <div class="ml-auto">
        {{ date | localeDate | capitalize }}
      </div>
    </div>
  </BaseCard>
</template>

<script>
import capitalize from '~/lib/filters/capitalize'
import localeDate from '~/lib/filters/localeDate'
import BaseCard from '~/components/ui/BaseCard'

export default {
  components: {
    BaseCard
  },

  props: {
    title: { type: String, required: true },
    preview: { type: String, required: true },
    author: { type: Object, required: true },
    date: { type: String, required: true }
  },

  filters: {
    capitalize,
    localeDate
  }
}
</script>
