<template>
  <div class="sidenav-container">
    <div
      v-if="menuShow"
      class="backdrop"
      @click="$store.dispatch('nav/toggleSidebar')"
    ></div>

    <transition name="slide-side">
      <div v-if="menuShow" class="sidenav">
        <div class="sidenavtop flex justify-between flex-no-shrink">
          <nuxt-link to="/switch-mercury" class="btn black-btn px-12" >Switch Site</nuxt-link>
          <div class="sd_closeicon flex items-center">
            <!-- <a class="notification">
              <img class="notifringicon" src="/svgs/ringicon.svg" alt="" />
              <span class="notify_number">2</span>
            </a> -->
            <a class="snv__close" @click="() => mobMenu(false)">
              <img class="clsicon" src="./static/svgs/closeicon.svg" alt="" />
            </a>
          </div>
        </div>

        <!-- <div class="sidenavcontent">
          <div class="lg:w-1/2 w-full lg:pl-32 mt-8">
            <div class="activity-bubbles mb-4">
              <div
                class="
                  activity-bubble
                  md:flex
                  item-center
                  justify-between
                  bg-white
                  p-4
                "
              >
                <div class="activity-bubble-text">
                  <h5>We're hiring!</h5>
                  <p class="mb-3 md:mb-0">View our roles</p>
                </div>
                <div class="activity-bubble-btn">
                  <a
                    href="https://apply.workable.com/mercurylabs/"
                    class="btn black-btn px-12 md:w-auto w-full"
                    >Careers</a
                  >
                </div>
              </div>
            </div>
            <div class="activity-bubbles mb-4">
              <div
                class="
                  activity-bubble
                  md:flex
                  item-center
                  justify-between
                  bg-white
                  p-4
                "
              >
                <div class="activity-bubble-text">
                  <h5>New Post</h5>
                  <p class="mb-3 md:mb-0">Article category</p>
                </div>
                <div class="activity-bubble-btn">
                  <a
                    href="https://blog.mercurylabs.io"
                    class="btn black-btn px-12 md:w-auto w-full"
                    >Read</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    toggleSideMenu: {
      typeof: Boolean,
      default: false,
    },

    mobMenu: {
      typeof: Function,
    }
  },

  data() {
    return {
      show: false,
    };
  },

  computed: {
    menuShow() {
      if (this.toggleSideMenu) return (this.show = true);
      return (this.show = false);
    },
  },
};
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}
.sidenav {
  background: url("/images/bg/mercury-labs.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.snv__notify {
  display: inline-block;
  margin-right: 15px;
}

.snv__close {
  display: inline-block;
}

.clsicon {
  width: 28px;
}
</style>