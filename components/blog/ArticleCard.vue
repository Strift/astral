<template>
  <BaseCard class="card hover:shadow-lg">
    <div class="font-semibold text-white text-lg mb-4">
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
    localeDate (dateString) {
      const date = new Date(dateString)
      return date
        .toLocaleDateString('fr-FR', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })
    },
    capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  transition: transform .3s cubic-bezier(.34,2,.6,1),
              box-shadow .2s ease;

  &:hover {
    transform: translateY(-5px)
  }
}
</style>
