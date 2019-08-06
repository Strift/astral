<template>
  <!-- No SSR: Necessary cause popover generate span tag which breaks client hydration  -->
  <no-ssr>
    <v-popover
      popover-class="w-72 sm:w-96 mr-3 sm:mr-8 shadow-md"
    >
      <button class="text-white font-title text-xl tracking-widest inline">
        Contact
      </button>
      <template slot="popover">
        <p class="text-white mb-4">
          Hey 👋<br>Le meilleur moyen de nous contacter c’est de venir faire coucou sur notre Discord. Sois pas timide !
        </p>
        <a
          href="https://discord.gg/PJqzaGb"
          target="_blank"
          class="bg-discord-primary flex items-center rounded py-3 px-3 shadow-md hover:shadow-lg"
        >
          <img
            src="~assets/images/discord-logo-white.svg"
            alt="Logo Discord"
            class="h-6"
          >
          <span class="text-xl text-white font-discord mx-auto">
            Rejoindre le serveur
          </span>
        </a>
      </template>
    </v-popover>
  </no-ssr>
</template>

<script>
import { VPopover } from 'v-tooltip'

export default {
  components: {
    VPopover
  }
}
</script>
