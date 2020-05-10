<template>
  <header class="w-full p-6">
    <nav class="flex items-center text-white font-title text-xl tracking-widest ">
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
          class="hidden sm:inline-flex inline mr-10 lg:mr-16 border-primary"
        >
          Blog
        </nuxt-link>
        <!-- No SSR: Necessary cause popover generate span tag which breaks client hydration  -->
        <client-only>
          <v-popover
            offset="16"
            popover-class="w-72 sm:w-96 mr-3 sm:mr-8 shadow-md"
          >
            <button>Contact</button>
            <DiscordModal slot="popover" />
          </v-popover>
        </client-only>
      </div>
    </nav>
  </header>
</template>

<script>
import { VPopover } from 'v-tooltip'
import DiscordModal from '~/components/DiscordModal'

export default {
  components: {
    VPopover,
    DiscordModal
  },
  props: {
    blog: {
      type: Boolean,
      default: false
    }
  }
}
</script>
