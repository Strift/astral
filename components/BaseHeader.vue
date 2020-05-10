<template>
  <header class="w-full p-6 xl:p-10">
    <div class="flex items-center">
      <nuxt-link
        to="/"
        title="Accueil"
      >
        <img
          src="~/assets/images/astral.svg"
          alt="Logo Astral"
          :class="{ 'h-16 lg:h-24': !blog, 'h-20': blog}"
        >
      </nuxt-link>
      <div
        v-if="blog"
        class="text-white font-title text-2xl tracking-wide my-auto ml-4"
      >
        Blog
      </div>
      <div class="ml-auto flex">
        <nuxt-link
          v-if="false && !blog"
          to="/blog"
          title="Blog"
        >
          <BaseButton class="hidden sm:inline-flex mr-10 lg:mr-16">
            Blog
          </BaseButton>
        </nuxt-link>
        <ContactButton />
      </div>
    </div>
  </header>
</template>

<script>
import BaseButton from '~/components/ui/BaseButton'
import ContactButton from '~/components/ContactButton'

export default {
  components: {
    BaseButton,
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
