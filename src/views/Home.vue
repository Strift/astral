<template>
  <div class="flex flex-col h-full w-full font-sans text-white">
    <nav class="text-right py-5 px-10 flex">
      <div class="my-auto w-32">
        <img src="@/assets/wow-logo.png" class="my-auto w-32">
      </div>
      <ul class="ml-auto my-auto text-lg font-semibold tracking-wide">
        <!-- <li class="inline mx-5 text-gray-500">Progress</li> -->
        <li class="inline mx-5">Recrutement</li>
        <li class="inline mx-5">Contact</li>
      </ul>
    </nav>
    <div class="my-auto text-center">
      <h1 class="font-hairline text-brand text-shadow leading-snug">
        Astral
      </h1>
      <div class="text-xl text-shadow">
        Alliance | Guilde PvE semi-hardcore | Serveur PvP
      </div>
    </div>
    <div class="text-lg text-right py-8 px-10">
      <button class="mr-5">
        Connexion
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
