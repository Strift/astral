<template>
  <header class="absolute z-10 w-full p-6 xl:p-10">
    <div class="flex justify-between items-start">
      <img
        src="~/assets/images/astral.svg"
        alt="Logo Astral"
        class="h-16 lg:h-24"
      >
      <ContactButton />
    </div>
  </header>
</template>

<script>
import ContactButton from '~/components/ContactButton'

export default {
  components: {
    ContactButton
  }
}
</script>
