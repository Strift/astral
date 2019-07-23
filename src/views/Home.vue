<template>
  <div>
    <BaseHeader/>
    <Landing/>
    <div class="bg-black">
      <div class="container mx-auto">
        <nav class="pb-8 border-b border-gray-600">
          <ul class="flex text-white text-xl">
            <li>
              <NavLink :active="true">Presentation</NavLink>
            </li>
            <li class="ml-24">
              <NavLink :active="false">Progress</NavLink>
            </li>
            <li class="ml-24">
              <NavLink :active="false" class="flex">
                Recrutement
                <span class="bg-green-500 h-3 w-3 rounded-full ml-2 my-auto"></span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div class="flex mt-16 mb-16">
          <img src="@/assets/images/alliance.png" class="h-64">
          <div class="text-white ml-20 text-lg">
            <p class="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <footer class="container mx-auto text-center text-white mt-24 pb-10">
        &copy; 2019 Astral
      </footer>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader'
import Landing from '@/components/Landing'
import NavLink from '@/components/NavLink'

export default {
  name: 'home',
  components: {
    BaseHeader,
    Landing,
    NavLink
  }
}
</script>
