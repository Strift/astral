<template>
  <div>
    <nuxt-link
      v-for="(article, i) in sortedArticles"
      :key="article.fileName"
      :to="article.fileName | permalink"
    >
      <ArticleCard
        :title="article.attributes.title"
        :preview="article.attributes.preview"
        :author="article.attributes.author"
        :date="article.attributes.date"
        :class="{ 'mt-10': i > 0 }"
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

  computed: {
    sortedArticles () {
      return this.articles.concat().sort((articleA, articleB) => Date.parse(articleB.attributes.date) - Date.parse(articleA.attributes.date))
    }
  },

  filters: {
    permalink (slug) {
      return `/blog/${slug}`
    }
  }
}
</script>
