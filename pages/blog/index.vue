<template>
  <article class="max-w-3xl mx-auto rounded-sm shadow-md p-8 bg-blue-dark bg-opacity-75 text-blue-light">
    <div class="mb-12">
      <h1 class="text-primary font-title text-3xl tracking-widest mb-4">
        Sortie de Zul'Gurub
      </h1>
      <div class="ml-auto text-white font-light">
        13 Février 2020
      </div>
    </div>
    <div class="space-y-8">
      <p class="font-sans text-lg leading-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet nemo aliquid officiis tempora similique expedita laudantium excepturi, nostrum incidunt mollitia consequuntur enim, minus quo fuga eos dignissimos facere illum.
      </p>
      <h2 class="font-title text-xl text-gray-lightest tracking-wider">
        Subtitle
      </h2>
      <p class="font-sans text-lg leading-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus sed saepe quisquam quibusdam iusto a maxime quaerat, enim error nihil! Fuga natus atque placeat beatae assumenda aliquid vitae maxime?
      </p>
      <p class="font-sans text-lg leading-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus sed saepe quisquam quibusdam iusto a maxime quaerat, enim error nihil! Fuga natus atque placeat beatae assumenda aliquid vitae maxime?
      </p>
      <p class="font-sans text-lg leading-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus sed saepe quisquam quibusdam iusto a maxime quaerat, enim error nihil! Fuga natus atque placeat beatae assumenda aliquid vitae maxime?
      </p>
      <p class="font-sans text-lg leading-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus sed saepe quisquam quibusdam iusto a maxime quaerat, enim error nihil! Fuga natus atque placeat beatae assumenda aliquid vitae maxime?
      </p>
      <BlogAuthor />
    </div>
  </article>
</template>

<script>
import BlogAuthor from '~/components/blog/BlogAuthor'

export default {
  components: {
    BlogAuthor
  },

  layout: 'blog'
}
</script>

<style>

</style>
