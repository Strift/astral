<template>
  <header class="absolute z-10 w-full p-6 xl:p-10">
    <div class="flex justify-end items-start">
      <nuxt-link
        to="/"
        class="mr-auto"
        title="Accueil"
      >
        <img
          src="~/assets/images/astral.svg"
          alt="Logo Astral"
          class="h-16 lg:h-24"
        >
      </nuxt-link>
      <!-- <BaseButton class="hidden sm:inline-flex mr-10 lg:mr-16">
        Recrutement
      </BaseButton> -->
      <ContactButton />
    </div>
  </header>
</template>

<script>
// import BaseButton from '~/components/BaseButton'
import ContactButton from '~/components/ContactButton'

export default {
  components: {
    // BaseButton,
    ContactButton
  }
}
</script>
