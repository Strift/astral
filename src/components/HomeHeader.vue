<template>
  <header class="py-5 px-10 flex">
    <div class="w-32">
      <img src="@/assets/wow-logo.png">
    </div>
    <nav class="ml-auto flex">
      <ul class="my-auto inline-flex">
        <li class="mx-5">
          <a href="https://eu.forums.blizzard.com/fr/wow/t/astral-a-recrutement-guilde-pve-serveur-pvp/11957" class="inline-flex items-center group" target="_blank">
            <span class="group-hover:text-blue-300 font-semibold uppercase tracking-widest text-shadow-md">Recrutement</span>
            <span class="text font-semibold px-1 rounded bg-green-500 ml-4">Ouvert</span>
          </a>
        </li>
        <li class="mx-5">
          <ContactButton/>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import ContactButton from '@/components/ContactButton'

export default {
  components: {
    ContactButton
  }
}
</script>
