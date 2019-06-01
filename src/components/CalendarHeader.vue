<template>
  <header class="navbar sticky top-0 z-10">
    <div class="container mx-auto px-3">
      <div class="flex items-center py-5">
        <h1 class="text-white text-xl text-shadow-md font-semibold">
          Astral <span class="font-light">Calendrier</span>
        </h1>
        <AccountButton class="ml-auto"/>
      </div>
    </div>
  </header>
</template>

<script>
import AccountButton from '@/components/AccountButton'

export default {
  components: {
    AccountButton
  }
}
</script>

<style type="text/css" scoped>
.navbar {
  background-image: url('../assets/images/background.jpg');
  @apply .bg-cover;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
}
</style>
