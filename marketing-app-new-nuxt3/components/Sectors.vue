<template>
  <div>
  <section id="our-client" class="clients pt-20 mb-20">
    <div class="container mx-auto">
      <div class="mb-11 px-4">
        <h1 class="font-semibold main-heading lg:mb-6 mb-3">Our clients are <span class="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">forward-thinking</span> <br> companies who want modern <br> solutions to their business challenges.</h1>
        <p>Mercury Labs is a technology partner that designs, builds and deploys bespoke <br> software and cutting edge models within our clients products and services. </p>
      </div>

      <div class="grid lg:grid-cols-2 md:grid-cols-3 lg:gap-6 md:gap-4">

          <div class="clientchoice py-4 flex" v-for="(item, i) in sectors" :key="i">

            <div class="clientchoice__icon pt-3 pl-4 pr-0 -mt-2 mr-0">
              <img class="clients__icon new_icon" :src="item.icon" alt="speedy">
            </div> 

            <div class="clientchoice__desc sector_desc pl-0 ml-0">
              <h4 class="mb-2">{{item.title}}</h4>
              <p class="mb-4">{{item.desc}}</p>
            </div>

          </div>

      </div>

    </div>
  </section>
  </div>
</template>

<script>
  export default {
    setup() {
      return {
        sectors: [
        {
          icon: './static/svgs/esg.svg',
          title: 'ESG',
          desc: 'At Mercury Labs, we build intelligent tools for investors to help develop sustainable strategies. Our products gather data from multiple internal and external sources to help make confident decisions and providing clarity while evaluating assets. With our data analytics and machine learning expertise, our solutions are designed to provide transparent risk and opportunity assessments for corporate ESG performance. '
        },
        {
          icon: './static/svgs/healthcare.svg',
          title: 'Healthcare',
          desc: 'We help Healthcare and life science organisations to build end-to-end products for better patient and care provider outcomes. Our solutions help the NHS hospitals and trusts to develop a preventive and patient-centric approach that leads to better operational efficiency, shorter length of stay, lower readmission and mortality rates.'
        },
        {
          icon: './static/svgs/retail-finance.svg',
          title: 'Retail Finance',
          desc: 'We build digital solutions to improve business resilience. With data analytics, we bring a competitive advantage to Retail Finance organisations. Our tailored services offer safer financial products, provide a seamless customer experience that leads to higher retention rates, and drive profitability. '
        },
        {
          icon: './static/svgs/e-commerce.svg',
          title: 'E-Commerce/Retail',
          desc: 'We help E-Commerce Retailers to gain lean operational efficiency, higher profitability margins, and better customer loyalty with data analytics. Our products help our clients with adjusting operations to customer demands and delivering personalised experiences to build a holistic view of customer needs.'
        },
        {
          icon: './static/svgs/engineering.svg',
          title: 'Engineering and Manufacturing',
          desc: 'We use big data analytics to help manufacturers capitalise on data. With machine learning algorithms and tailored end-to-end products, we help our clients predict bottlenecks and machinery maintenance. Our services help building leaner production cycles, optimised supply chain processes and sales forecasting for our clients.'
        },
        {
          icon: './static/svgs/infra.svg',
          title: 'Infrastructure',
          desc: 'We use advanced analytics to help the Infrastructure sector with better capital allocation and create higher visibility of asset performance. With a data-driven approach, our solutions monitor current asset productivity and allow greater transparency into decision-making processes and risk mitigation.'
        }
      ],
      }
    }
  }
</script>

<style lang="css" scoped>

.sectorslist__icon{
  width: 10%;
}

.sectors__icon {
  width: 55px;
}


</style>