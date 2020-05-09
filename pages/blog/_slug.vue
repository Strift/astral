<template>
  <article class="article w-full max-w-3xl mx-auto rounded-sm shadow-md p-8 bg-blue-dark bg-opacity-75 text-blue-light">
    <component :is="markdownComponent" />
  </article>
</template>

<script>
export default {
  name: 'Article',
  layout: 'blog',

  data: () => ({
    attrs: null,
    markdownComponent: null
  }),

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
