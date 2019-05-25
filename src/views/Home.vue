<template>
  <div class="flex flex-col h-full w-full font-sans text-white">
    <nav class="text-right py-5 px-10 flex">
      <div class="my-auto w-32">
        <img src="@/assets/wow-logo.png" class="my-auto w-32">
      </div>
      <ul class="ml-auto my-auto font-semibold uppercase tracking-widest">
        <li class="inline mx-5 inline-flex items-center">
          <a href="https://eu.forums.blizzard.com/fr/wow/t/astral-a-recrutement-guilde-pve-serveur-pvp/11957" class="hover:text-blue-300" target="_blank">
            Recrutement
          </a>
          <span class="text-xs px-1 rounded bg-green-500 ml-4">Ouvert</span>
        </li>
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
      <button class="mr-5 inline-flex items-center">
        <img src="@/assets/login-icon.png" class="inline mr-2">
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
