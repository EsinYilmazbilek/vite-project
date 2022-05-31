<template>
<section class="how-it-works pt-20 mb-20">
  <div class="container mx-auto">
      <div class="mb-11 px-4">
        <h1 class="font-semibold main-heading lg:mb-6 mb-3">How It Works</h1>
      </div>

      <div class="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-6 md:gap-4">
          <div class="clientchoice py-4 flex" v-for="(item, i) in howItWorks" :key="i">
            <div class="clientchoice__icon p-3 -mt-2">
              <div class= "vertical"></div>
            </div> 
            <div class="clientchoice__desc">
              <h4 class="mb-2">{{item.title}}</h4>
              <p class="mb-24">{{item.desc}}</p>
              <h2 class="mt-30 number" :class="setClass(item,i)">{{item.number}}</h2>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    setup() {
      return {
        howItWorks: [
        {
          icon: './static/svgs/line.png',
          title: 'Disect',
          desc: 'We can deliver a five-month project in five weeks.',
          number: '1',
        },
        {
          icon: './static/svgs/line.png',
          title: 'Determine',
          desc: 'We can deliver a five-month project in five weeks.',
          number: '2'
        },
        {
          icon: './static/svgs/line.png',
          title: 'Develop',
          desc: 'We can deliver a five-month project in five weeks.',
          number: '3'
        },
        {
          icon: './static/svgs/line.png',
          title: 'Deploy',
          desc: 'We can deliver a five-month project in five weeks.',
          number: '4'
        },
      ],

      }
    },
    methods: {
    setClass(item,index){
    if(item.number == "1") return "red";
    else if(item.number=="2") return "green";
    else if(item.number =="3") return "yellow";
    else return "blue";
  },
  }
  }
</script>

<style lang="css" scoped>

.red{
  background: linear-gradient(90deg, #9CE7FF 4.67%, #FF8EFF 428%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }
  .green{
  background: linear-gradient(90deg, #9CE7FF -126.22%, #FF8EFF 291.33%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }
  .yellow{
  background: linear-gradient(89.94deg, #9CE7FF -270.96%, #FF8EFF 160.35%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }
  .blue{
  background: linear-gradient(90deg, #9CE7FF -385.56%, #FF8EFF 25.56%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }

</style>