<template>
  <div class=" px-6">
    <div class="flex flex-wrap mb-12 font-sans">
      <div class="text-lg lg:w-2/3">
        <h3 class="pb-4 font-semibold">
          🧙‍♂️ Que recherchons-nous ?
        </h3>
        <p class="pb-4">
          Nous recherchons <strong class="font-semibold">joueurs motivés et sympathiques</strong> qui cherchent une guilde sérieuse et conviviale dans laquelle profiter pleinement du contenu de Classic. Chez Astral, la <strong class="font-semibold">participation aux raids est obligatoire</strong> pour les membres du roster.
        </p>
        <p class="pb-4">
          🕒 <span class="italic">Les raids débutent à 20h45 (first pull) et se terminent à 23h45 (last pull).</span>
        </p>
        <ul class="list-disc">
          <li class="ml-5">
            Phase 1 : les soirs de raid seront le Mercredi et Jeudi
          </li>
          <li class="ml-5">
            Phase 2+ : en fonction du farming requis, un troisième soir (Dimanche) pourra être ajouté
          </li>
        </ul>
      </div>
      <a
        href="https://discord.gg/KFKJJdr"
        title="Rejoindre le Discord"
        target="_blank"
        class="bg-primary py-4 px-10 rounded my-auto text-black font-title tracking-wider mx-auto mt-12 text-lg"
      >
        Contact
      </a>
    </div>
    <div class="classes">
      <RecruitmentCard
        v-for="recruitment in visibleRecruitmentStatus"
        :key="recruitment.class"
        :class-name="recruitment.class"
        :open="recruitment.open"
        :class="{ 'hidden sm:flex': !recruitment.open }"
        class="h-16 mb-10"
      />
    </div>
  </div>
</template>

<script>
import db from '~/lib/database'

import RecruitmentCard from '~/components/RecruitmentCard.vue'

export default {
  components: {
    RecruitmentCard
  },

  layout: 'landing',
  scrollToTop: false,

  data () {
    return {
      recruitmentStatus: []
    }
  },

  firestore: {
    recruitmentStatus: db.collection('recruitment')
  },

  computed: {
    visibleRecruitmentStatus () {
      return this.recruitmentStatus.filter(r => !r.hidden)
    }
  }
}
</script>

<style scoped>
@media (min-width: 640px) {
  .classes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4rem 4rem 4rem 4rem;
    grid-column-gap: 3rem;
    grid-row-gap: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .classes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 4rem 4rem;
    grid-column-gap: 3rem;
    grid-row-gap: 2.5rem;
  }
}
</style>
