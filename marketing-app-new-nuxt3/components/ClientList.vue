<template>
  <section class="clients pt-16 mb-20">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 px-4 gap-6">
        <a :href="(i.link === '/') ? 'javascript:void(0)' : i.link" :target="(i.link != '/') && '_blank'" class="" v-for="(i,j) in projects" :key="j">
          <div class="relative flex flex-col justify-center items-center logo-card">
            <img :src="i.pic"/>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    setup() {
      return {
        projects: [
        {
          pic: "../static/images/logos/blue-bear.svg",
          link:"https://www.bluebearstorage.co.uk"
        },
        {
          pic: "../static/images/logos/Enginuity.svg",
          link:"https://enginuity.org"
        },
        {
          pic: "../static/images/logos/rl-commerce.svg",
          link:"/"
        },
        {
          pic: "../static/images/logos/the-saasy-people.png",
          link:"https://thesaasypeople.com"
        },
        {
          pic: "../static/images/logos/corona-test-center_logo.svg",
          link:"https://www.coronatestcentre.com"
        },
        {
          pic: "../static/images/logos/dash-water_logo.svg",
          link:"https://dash-water.com"
        },
        {
          pic: "../static/images/logos/wild-by-tart_logo.svg",
          link: "https://www.wildbytart.com"
        },
        {
          pic: "../static/images/logos/voai_logo.svg",
          link: "https://www.vovi.studio"
        },
        {
          pic: "../static/images/logos/gentlemans-journal_logo.svg",
          link: "https://www.thegentlemansjournal.com"
        },
        {
          pic: "../static/images/logos/balu-london_logo.svg",
          link: "https://balulondon.co.uk"
        },
        {
          pic: "../static/images/logos/lucyvailfloristry_logo.svg",
          link: "https://lucyvailfloristry.com"
        },
        {
          pic: "../static/images/logos/metals-daily_logo.svg",
          link: "https://www.metalsdaily.com"
        },
        {
          pic: "../static/images/logos/wm_logo.svg",
          link: "https://themoosedrink.com"
        },
        {
          pic: "../static/images/logos/snug_logo.svg",
          link: "https://snugsofa.com"
        },
        {
          pic: "../static/images/logos/Circla_logo.svg",
          link: "https://www.circla.co.uk"
        },
        {
          pic: "../static/images/logos/forestreet_logo.svg",
          link: "https://forestreet.com"
        },
        {
          pic: "../static/images/logos/X-Medical_logo.svg",
          link: "https://www.coronatestcentre.com/"
        },
        {
          pic: "../static/images/logos/f_logo.svg",
          link: "/"
        },
        {
          pic: "../static/images/logos/primary-bid_logo.svg",
          link: "https://primarybid.com/uk"
        },
        {
          pic: "../static/images/logos/augmentive_logo.svg",
          link: "https://augmentive.io/"
        }
      ],
      }
    }
  }
</script>

<style lang="css" scoped>

.logo-card {
    border: 1px solid #f6f6f6;
    min-height: 135px;
}
</style>