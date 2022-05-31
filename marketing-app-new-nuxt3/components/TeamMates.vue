<template>
  <section class="teammates clients py-16 ">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 md:gap-4">
          <div class="clientchoice py-4 flex" v-for="(item, i) in teamMate" :key="i">
            <div class="clientchoice__icon p-3 -mt-3">
              <img class="clients__icon" :src="item.icon" alt="speedy">
            </div> 
            <div class="clientchoice__desc">
              <h4 class="mb-2">{{item.title}}</h4>
              <p class="mb-4">
                {{item.desc}}
              </p>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup () {
    return {
      teamMate: [
        {
          icon: '../static/svgs/jake.svg',
          title: 'Jake Cunningham',
          desc: 'An AI-Commerce Data Scientist. With an Undergraduate in Engineering from Oxford University and Masters in Computer Science (Machine Learning and Artificial Intelligence) from Imperial College, Jake is driving our data driven approach to helping our clients serve their customers.'
        },
        {
          icon: '../static/svgs/archi.svg',
          title: 'Archie Norman',
          desc: 'CEO with a background in Computer Science from Newcastle University and Masters in Computer Science (specialising in the Web and Machine Learning) from UCL.'
        },
        {
          icon: '../static/svgs/mungo.svg',
          title: 'Mungo Blyth',
          desc: 'A Technical Project Manager here at Mercury Labs / AI-Commerce. Mungo has a background in Computer Science from Newcastle University, where he specialised in route optimisation in Virtual Reality.'
        },
        {
          icon: '../static/svgs/ed.svg',
          title: 'Ed Elmhirst',
          desc: 'Ed is currently undertaking an internship here at AI-Commerce while studying Economics at Bristol University, diving into some data mining, pre-processing techniques and requirements engineering.'
        },
        {
          icon: '../static/svgs/esther.svg',
          title: 'Esther Groenestein',
          desc: 'An expert Requirements Engineer and Product Owner. Having worked with large corporates (BNP, ING, Vodafone, Capgemini and Microsoft), Esther has an excellent eye for detail and plays a critical role in each projects success.'
        },
        {
          icon: '../static/svgs/maksym.svg',
          title: 'Maksym Trofimenko',
          desc: "A Senior Go Developer, having built and deployed Venture Capital backed software for AI-Commerce, Maksym's experience, engineering talent and DevOps experience is a wonderful addition to the team. "
        },
        {
          icon: '../static/svgs/samuel.svg',
          title: 'Samuel Oakes',
          desc: 'A hugely talented Designer with a special focus on Branding and User Interfaces. Having worked with AI-Commerce over the past 18 months, Sam has delivered phenomenal products for each of our clients.'
        },
        {
          icon: '../static/svgs/guerra.svg',
          title: 'Giuseppe Guerra',
          desc: 'A passionate Full Stack Web Developer with years of experience building beautiful and fast web applications. Having studied Computer Science at the University of Pisa, Giuseppe mostly works with Python for Data.'
        },
        {
          icon: '../static/svgs/morgan.svg',
          title: 'Morgan Bazalgette',
          desc: 'Talented Full Stack Developer with years of experience creating highly-performant and scalable web apps and services. An expert in Go and JavaScript, as well as the Linux ecosystem as a whole. In his free time a music and history nerd.'
        },
        {
          icon: '../static/svgs/swadhin.svg',
          title: 'Ridwanul Jauad SwadhIn',
          desc: 'A Senior Frontend Engineer with a background in Computer Science and Software Engineering. Ridwanul is builds pixel perfect user interfaces, clean, well structured code, and an excellent advisor in best'
        },
        {
          icon: '../static/svgs/perri.svg',
          title: 'Giovanni Perri',
          desc: "Giovanni has a background in Marketing and Statistics from Università degli Studi di Parma and  plays a key role in Web & App Analytics, Conversion Rate Optimisation, Marketing Automation and Traction Testing (Paid Acquisition)."
        },
        {
          icon: '../static/svgs/william.svg',
          title: 'William Vail',
          desc: "A recent Political Science and History graduate of McGill University, William is interning with us, learning data analysis and taking on a crucial role within the ecommerce sales side."
        }
      ],
    }
  }
}
</script>

<style lang="css" scoped>

</style>