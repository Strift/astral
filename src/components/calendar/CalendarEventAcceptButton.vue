<template>
  <button
    :class="`px-3 py-1 uppercase font-semibold rounded-sm text-sm border ${colorClasses} inline-flex`"
    @click="$emit('click')"
  >
    <img
      v-if="active"
      src="@/assets/icons/calendar-check.png"
      class="inline mr-2 h-5"
    />
    <div v-if="active" class="text-center w-full">
      Inscrit
    </div>
    <div v-else class="text-center w-full">
      Participer
    </div>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    colorClasses () {
      if (this.active) return 'bg-blue-500 border-blue-500 text-white'
      return 'text-blue-500 border-blue-500'
    }
  }
}
</script>
