<template>
  <nav>
    <ul class="flex text-white text-xl">
      <li class="flex">
        <NavLink to="/" :active="$route.path === '/'">Presentation</NavLink>
      </li>
      <li class="flex ml-5">
        <NavLink to="/progress" :active="$route.path === '/progress'">Progress</NavLink>
      </li>
      <li class="flex ml-5">
        <NavLink to="/recrutement" :active="$route.path === '/recrutement'" class="flex">
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

<style scoped>
nav {
  box-shadow: 0px -2px 0px #4a5568 inset;
}
</style>
