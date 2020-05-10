<template>
  <header class="w-full p-6">
    <div class="flex items-center">
      <nuxt-link
        to="/"
        title="Accueil"
        class="flex"
      >
        <img
          src="~/assets/images/astral.svg"
          alt="Logo Astral"
          :class="{ 'h-16 lg:h-20': !blog, 'h-20': blog }"
        >
        <span
          v-if="blog"
          class="font-title text-white text-3xl ml-3 my-auto"
        >
          Astral
        </span>
      </nuxt-link>
      <div class="ml-auto flex">
        <nuxt-link
          to="/blog"
          title="Blog"
          active-class="border-b-2 pb-1"
          class="hidden sm:inline-flex text-white font-title text-xl tracking-widest inline mr-10 lg:mr-16 border-primary"
        >
          Blog
        </nuxt-link>
        <ContactButton />
      </div>
    </div>
  </header>
</template>

<script>
import ContactButton from '~/components/ContactButton'

export default {
  components: {
    ContactButton
  },
  props: {
    blog: {
      type: Boolean,
      default: false
    }
  }
}
</script>
