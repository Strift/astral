<template>
  <header class="fixed z-20 w-full">
    <div class="container mx-auto py-5">
      <div class="flex justify-between">
        <img src="@/assets/images/astral.png" style="width: 70px">
        <BaseButton class="text-white">
          Contact
        </BaseButton>

      </div>
    </div>
  </header>
</template>

<script>
import BaseButton from '@/components/BaseButton'

export default {
  components: {
    BaseButton
  }
}
</script>
