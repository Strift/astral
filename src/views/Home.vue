<template>
  <div class="flex flex-col h-full w-full font-sans text-white">
    <nav class="text-right py-5 px-10 flex">
      <div class="my-auto w-32">
        <img src="@/assets/wow-logo.png" class="my-auto w-32">
      </div>
      <ul class="ml-auto inline-flex my-auto">
        <li class="mx-5">
          <a href="https://eu.forums.blizzard.com/fr/wow/t/astral-a-recrutement-guilde-pve-serveur-pvp/11957" class="inline-flex items-center group" target="_blank">
            <span class="group-hover:text-blue-300 font-semibold uppercase tracking-widest text-shadow-md">Recrutement</span>
            <span class="text font-semibold px-1 rounded bg-green-500 ml-4">Ouvert</span>
          </a>
        </li>
        <li class="mx-5">
          <v-popover
            offset="16"
            class="inline"
          >
            <button class="font-semibold uppercase tracking-widest text-shadow-md">Contact</button>
            <template slot="popover">
              Random stuff
            </template>
          </v-popover>

        </li>
      </ul>
    </nav>
    <div class="my-auto text-center">
      <h1 class="font-hairline text-brand text-shadow-md leading-snug">
        Astral
      </h1>
      <h2 class="text-xl text-shadow font-semibold tracking-wide">
        Alliance | Guilde PvE semi-hardcore | Serveur PvP
      </h2>
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

<style>
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, .1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}
</style>
