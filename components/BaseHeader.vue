<template>
  <header class="absolute z-10 w-full py-10 px-10">
    <div class="flex justify-between items-start">
      <img
        src="~/assets/images/astral.svg"
        alt="Logo Astral"
        class="h-24"
      >
      <v-popover
        popover-class="w-96 mr-8 shadow-md"
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
              class="h-8"
            >
            <span class="text-xl text-white font-discord ml-12">Rejoindre notre Discord</span>
          </a>
        </template>
      </v-popover>
    </div>
  </header>
</template>

<script>
import { VPopover } from 'v-tooltip'

export default {
  components: {
    VPopover
  }
}
</script>
