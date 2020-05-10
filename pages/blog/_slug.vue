<template>
  <div>
    <h1
      v-if="attrs"
      class="font-title text-white text-4xl mb-4 border-primary border-b-4 pb-2"
    >
      {{ attrs.title }}
    </h1>
    <div
      v-if="attrs"
      class="font-title text-blue-light mb-12"
    >
      {{ attrs.date | localeDate | capitalize }}
    </div>
    <BaseCard>
      <article class="article">
        <component :is="markdownComponent" />
      </article>
    </BaseCard>
  </div>
</template>

<script>
import capitalize from '~/lib/filters/capitalize'
import localeDate from '~/lib/filters/localeDate'
import BaseCard from '~/components/ui/BaseCard'

export default {
  name: 'Article',
  layout: 'blog',

  components: {
    BaseCard
  },

  data: () => ({
    attrs: null,
    markdownComponent: null
  }),

  filters: {
    capitalize,
    localeDate
  },

  async created () {
    // String interpolation somehow breaks eslint
    const article = await import('~/content/' + this.$route.params.slug + '.md')
    this.attrs = article.attributes
    this.markdownComponent = article.vue.component
  }
}
</script>

<style lang="scss">
.article {
  h1 {
    @apply text-primary font-title text-3xl tracking-widest mb-8;
  }

  h2 {
    @apply font-title text-xl text-gray-lightest tracking-wider mb-8;
  }

  p {
    @apply font-sans text-lg leading-10;

    &:not(:last-child) {
      @apply mb-8;
    }
  }
}
</style>
