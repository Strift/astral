<template>
  <div>
    <Landing />
    <div class="bg-black text-gray-lightest">
      <div class="container mx-auto">
        <Navbar
          :buttons="sections"
          @nav="updateNav"
        />
        <div class="mt-16 mb-16">
          <HomeAbout v-show="isAboutVisible" />
          <HomeProgress v-show="isProgressVisible" />
          <HomeRecruitment v-show="isRecruitmentVisible" />
        </div>
      </div>
      <footer class="container mx-auto text-center text-white mt-24 pb-10">
        &copy; 2019 Astral
      </footer>
    </div>
  </div>
</template>

<script>
import Landing from '~/components/Landing'
import Navbar from '~/components/Navbar'
import HomeAbout from '~/components/HomeAbout'
import HomeProgress from '~/components/HomeProgress'
import HomeRecruitment from '~/components/HomeRecruitment'

export default {
  components: {
    Landing,
    Navbar,
    HomeAbout,
    HomeProgress,
    HomeRecruitment
  },
  data () {
    return {
      sections: [
        { text: 'Presentation', section: 'about', active: true },
        { text: 'Progress', section: 'progress', active: false },
        { text: 'Recruitment', section: 'recruitment', active: false, alert: true }
      ]
    }
  },
  computed: {
    isAboutVisible () {
      return this.sections.find(s => s.section === 'about').active
    },
    isProgressVisible () {
      return this.sections.find(s => s.section === 'progress').active
    },
    isRecruitmentVisible () {
      return this.sections.find(s => s.section === 'recruitment').active
    }
  },
  methods: {
    updateNav (section) {
      this.sections.forEach(s => {
        if (s.section === section) s.active = true
        else s.active = false
      })
    }
  }
}
</script>
