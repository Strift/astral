<template>
  <div v-if="attrs">
    <h1 class="font-title text-white text-4xl mb-4 border-primary border-b-4 pb-2">
      {{ attrs.title | removeAccents }}
    </h1>
    <div class="font-title text-blue-light mb-12">
      {{ attrs.date | localeDate | capitalize }}
    </div>
    <BaseCard class="mb-64">
      <article class="article">
        <component :is="markdownComponent" />
      </article>
      <ArticleAuthor
        :name="attrs.author.name"
        :title="attrs.author.title"
        :image-url="attrs.author.imageUrl"
        class="mt-12 pt-12 border-t border-blue-light border-opacity-50"
      />
    </BaseCard>
  </div>
</template>

<script>
import capitalize from '~/lib/filters/capitalize'
import localeDate from '~/lib/filters/localeDate'
import removeAccents from '~/lib/filters/removeAccents'
import BaseCard from '~/components/ui/BaseCard'
import ArticleAuthor from '~/components/blog/ArticleAuthor'

export default {
  name: 'Article',
  layout: 'blog',

  components: {
    BaseCard,
    ArticleAuthor
  },

  data: () => ({
    attrs: null,
    markdownComponent: null,
    socialImage: 'https://astral.gg/images/astral-socials.png'
  }),

  middleware ({ route, redirect }) {
    if (route.fullPath === '/blog/organiser-ses-raids-avec-raid-helper/') {
      redirect(301, 'https://laurentcazanove.com/articles/organiser-ses-raids-avec-raid-helper/')
    }
  },

  head () {
    if (this.attrs == null) return []
    return {
      title: this.attrs.title + ' | Astral',
      meta: [
        { name: 'author', content: this.attrs.author.name },
        { name: 'description', content: this.attrs.preview, hid: 'description' },
        { property: 'og:title', content: this.attrs.title },
        { property: 'og:description', content: this.attrs.preview },
        { property: 'og:image', content: this.socialImage },
        { property: 'og:url', content: this.$route.path },
        { property: 'og:site_name', content: 'Astral' },
        { name: 'twitter:image:alt', content: 'Logo Astral' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },

  filters: {
    capitalize,
    localeDate,
    removeAccents
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

  a {
    @apply font-semibold text-primary;
  }

  code {
    @apply bg-blue-dark bg-opacity-25 p-1 rounded border-blue-light border border-opacity-25 font-normal;
  }
}
</style>
