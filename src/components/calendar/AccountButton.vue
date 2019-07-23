<template>
  <v-popover
    offset="0"
    class="h-10"
    popoverWrapperClass="shadow"
  >
    <button class="h-10 ">
      <img src="https://pbs.twimg.com/profile_images/1068880894851723264/ZVEW4vi__400x400.jpg" class="h-full rounded-full shadow">
    </button>
    <template slot="popover">
      <div class="text-gray-700">
        <div class="font-semibold text-lg">Strift</div>
        <div class="text-gray-500 mb-1">Maître de guilde</div>
        <div class="flex">
          <img
            :src="'Rogue' | classIconPath"
            class="inline-block h-5 mr-2"
          />
          <div class="text-gray-600">
            DPS
          </div>
        </div>
      </div>

      <button class="text-gray-500 px-3 py-1 rounded mt-5 flex border border-gray-500">
        Déconnexion
      </button>
    </template>
  </v-popover>
</template>

<script>
import { VPopover } from 'v-tooltip'

import { classIconPath } from '@/filters'

export default {
  components: {
    VPopover
  },
  filters: {
    classIconPath
  }
}
</script>
