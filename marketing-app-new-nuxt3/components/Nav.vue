<template>

    <nav class="flex items-center justify-between flex-wrap md:p-6 p-4">
      <div class="flex items-center w-full justify-between flex-no-shrink">
        <NuxtLink to="/" class="font-semibold text-xl text-black pl-0 lg:pl-4">Mercury Labs</NuxtLink>
        <div class="desktop_buttons">
          <button @click="useIntercom" href="https://apply.workable.com/mercurylabs/" class="btn black-btn intercom_open text-center inline-flex items-center">Open Roles</button>
        </div>

        <!-- <div class="mobile__hamburg flex items-center">
          <a class="notification" @click="() => handleNavigation(true)">
            <img class="notifringicon" src="./static/svgs/ringicon.svg" alt="">
            <span class="notify_number">2</span>
          </a>
          <a class="hambrg__iconbtn" @click="() => handleMobileMenu(true)">
            <img class="hambrg__icon" src="./static/svgs/hambrgmny.svg" alt="">
          </a>
        </div> -->
      </div>
    </nav>

      <TheSideNav :toggleSidebar="toggleMenu" :navMeth="handleNavigation" />
</template>

<script>
import TheSideNav from "./TheSideNav.vue"

  export default {
    setup() {
      return {
      toggleMenu: false,

      toggleMobileMenu: false,
      }
    },

  components: {
    TheSideNav
  }, 
    methods: {
    handleNavigation(v){
      this.toggleMenu = v
    },

    handleMobileMenu(i){
      this.$router.push("/switch-mercury")
    }
  }
  }
</script>

<style scoped>

</style>