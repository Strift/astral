<template>
  <nav class="pb-8 border-b border-gray-600">
    <ul class="flex text-white text-xl">
      <li>
        <NavLink to="/" :active="true">Presentation</NavLink>
      </li>
      <li class="ml-24">
        <NavLink to="/progress" :active="false">Progress</NavLink>
      </li>
      <li class="ml-24">
        <NavLink to="/recrutement" :active="false" class="flex">
          Recrutement
          <span class="bg-green-500 h-3 w-3 rounded-full ml-2 my-auto"></span>
        </NavLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavLink from '@/components/NavLink'

export default {
  components: {
    NavLink
  }
}
</script>
