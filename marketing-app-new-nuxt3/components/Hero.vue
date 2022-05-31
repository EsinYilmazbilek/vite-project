<template>
  <div>
<section class="Mercury-Labs-hero-section">
    <div class="container mx-auto pb-40">
      <div class="pt-40 mb-20 mb-11 px-4">
        <h1 class="font-semibold main-heading lg:mb-6 mb-3">We <span class="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">build products</span>
          with <br> machine learning, data science <br> and software engineering expertise.</h1>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 md:gap-4">
        <div class="herochoice py-4 flex" v-for="(item, i) in heroIntro" :key="i">
          <div class="herochoice__icon pt-3 pl-4 pr-2 -mt-2 mr-0">
            <img class="heros__icon" :src="item.icon" alt="speedy">
          </div> 
          <div class="herochoice__desc">
            <h4 class="mb-2">{{item.title}}</h4>
            <p class="mb-4">
              {{item.desc}}
            </p>
          </div>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 px-4">
        <a class="btn black-btn mt-8 intercom_open">Chat Now</a>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
  export default {
    setup() {
      return {
        heroIntro: [
        {
          icon: './static/svgs/partnership.svg',
          title: 'Partnership',
          desc: 'Drawing on software, machine learning, automation and data science, we work closely with you to minimise waste and maximise results.'
        },
        {
          icon: './static/svgs/artificial.svg',
          title: 'Artificial Intelligence',
          desc: 'Our self-learning tools and advanced analytics go beyond problem solving to help you actively improve your decision-making and future-proof your organisation.'
        },
        {
          icon: './static/svgs/efficiency.svg',
          title: 'Growth',
          desc: 'Whether you want to unlock efficiency, move beyond legacy systems or capture market share, Mercury Labs is the invisible engine behind your business growth.'
        },
      ],
      }
    }
  }
</script>

<style lang="css" scoped>
  .Mercury-Labs-hero-section {
  background: url('./static/images/bg/Bitmap_hero.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: -100px;
}

.clients__icon {
  width: 35px;
}

.clientchoice__icon{
  width: 10%;
}

.clientchoice__desc{
	width: 90%;
}

.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    height: calc(2.75rem + 2px);
    vertical-align: middle;
    -webkit-user-select: none;
    min-width: 140px;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 2px solid transparent;
    padding: .375rem 1.5rem;
    letter-spacing: 0.05rem;
    cursor: pointer;
    font-size: 14px;
    border-radius: 8px;
    line-height: 29px;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
.black-btn {
    color: #fff;
    background-color: #000000;
    border-color: #000000 !important;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
}

.black-btn:hover,
.black-btn:focus,
.black-btn:active {
    background-color: #4c4c4c;
    border-color: #4c4c4c !important;
}

</style>