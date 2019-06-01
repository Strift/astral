<template>
  <v-popover
    offset="16"
    class="inline"
  >
    <button class="font-semibold uppercase tracking-widest text-shadow-md">Contact</button>
    <template slot="popover">
      <div class="text-gray-600 text-lg text-center pb-3 border-b border-gray-300">
        Contactez-nous via Discord !
      </div>
      <ul class="mt-4">
        <li class="flex">
          <div>
            <div class="text-gray-700 font-semibold">Strift</div>
            <div class="text-gray-500">Maître de guilde</div>
          </div>
          <div class="inline-flex items-center ml-10">
            <img src="@/assets/images/discord-logo.svg" class="h-8 inline-block">
            <div class="text-gray-700">Strift#0812</div>
          </div>
        </li>
      </ul>
    </template>
  </v-popover>
</template>

<script>
import { VPopover } from 'v-tooltip'

export default {
  components: {
    VPopover
  }
}
</script>
