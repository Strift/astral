<template>
  <div class="rounded overflow-hidden shadow">
    <div
      class="bg-cover bg-center h-40 flex p-4"
      style="background-image: url('https://wow.zamimg.com/uploads/screenshots/normal/281289-molten-core.jpg')"
    >
      <div class="text-white mt-auto">
        <div class="font-semibold text-lg text-shadow">
          20h45
        </div>
        <div class="uppercase text-gray-300 text-sm text-shadow">
          Molten Core
        </div>
      </div>
    </div>
    <div class="bg-white text-gray-800 p-4 flex items-baseline">
      <button class="block w-full px-3 py-1 uppercase font-semibold rounded-sm text-sm text-blue-500 border border-blue-500">
        Participer
      </button>
      <button class="block w-full px-3 py-1 uppercase font-semibold rounded-sm text-sm text-red-500">
        AFK
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {

    }
  }
}
</script>
