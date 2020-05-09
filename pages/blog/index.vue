<template>
  <div class="space-y-8">
    <nuxt-link
      v-for="article in articles"
      :key="article.fileName"
      :to="article.fileName | permalink"
      class="space-y-8"
    >
      <ArticleCard
        v-for="i in 10"
        :key="i"
        :title="article.attributes.title"
        :preview="article.attributes.preview"
        :author="article.attributes.author"
        :date="article.attributes.date"
      />
    </nuxt-link>
  </div>
</template>

<script>
import ArticleCard from '~/components/blog/ArticleCard'

export default {
  layout: 'blog',

  components: {
    ArticleCard
  },

  async asyncData () {
    const resolve = require.context('~/content/', true, /\.md$/)
    const articles = resolve.keys().map(key => {
      const [, fileName] = key.match(/\/(.+)\.md$/)
      return {
        fileName,
        attributes: resolve(key).attributes
      }
    })
    return {
      articles
    }
  },

  filters: {
    permalink (slug) {
      return `/blog/${slug}`
    }
  }
}
</script>
