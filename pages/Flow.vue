<template>
  <div>
    <div class="flow">
      <div class="flow__image">
        <img v-bind:src="eyecatch" alt="">
      </div>
      <div v-html="exp" class="flow__exp"></div>
      <ul class="flow__list">
        <li v-for="flow in flows" v-bind:key="flow.key" class="flow__item">
          <h3 class="flow__title">{{flow.title}}</h3>
          <div v-html="flow.detail" class="flow__text"></div>
        </li>
      </ul>
      <p class="flow__comment">ご不明点があればお気軽にお問い合わせください。</p>
      <div class="flow__btn-area">
        <BtnToQuote class="quote-btn"/>
        <BtnToQa class="qa-btn"/>
      </div>
    </div>
    <Contact/>
  </div>
</template>

<script>


// @ is an alias to /src
import Contact from '@/components/Contact.vue'
import BtnToQuote from '@/components/BtnToQuote.vue'
import BtnToQa from '@/components/BtnToQa.vue'

import axios from 'axios';

export default {

  data(){
    return{
      eyecatch: null,
      exp: null,
      flows: null,
      quote: true
    };
  },
  async asyncData(){
    const{data} = await axios.get(
      "https://bubekiti.microcms.io/api/v1/flow",
      {
        headers: {'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'}
      }
    );
    return{
      eyecatch: data.eyecatch.url,
      exp: data.exp,
      flows: data.flow
    };
  }
}


// export default {
//   name: 'WorkDetail',
//   components: {
//     Contact,
//     BtnToQuote,
//     BtnToQa,
//   },
//   data: function(){
//     return {
//       eyecatch: null,
//       exp: null,
//       flows: null,
//       quote: true
//     };
//   },
//   created: function(){
//     this.fetchFlows();
//   },
//   methods: {
//     fetchFlows: function(){
//       fetch('https://bubekiti.microcms.io/api/v1/flow', {
//       headers: {
//         'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'
//       },
//     })
//       .then(res => res.json())
//       .then(json => {
//         this.eyecatch = json.eyecatch.url;
//         this.exp = json.exp;
//         this.flows = json.flow;
//       })
//       .catch(error => {
//         console.log(error);
//       })
//     },
//   }
// }
</script>

<style scoped lang="scss">
  
//mixin
@import '../scss/mixin/container';
@import '../scss/mixin/title-bar';
@import '../scss/mixin/btn';
@import '../scss/mixin/sectionTitle';
@import '../scss/mixin/contactBtn';


$blue:#64D5FF;
$purple:#8400B5;
$grey-back:#F4F4F4;
$black-font:#333333;
$grey-font:#A0A0A0;


.flow{
  @include _container;
  max-width: 730px;
  text-align: center;
  position: relative;
  padding: 35px;
  &__image{
    width: 70%;
    max-width: 500px;
    margin: 0 auto;
  }
  &__exp{
    margin-top: 40px;
    font-size: 1.6rem;
    text-align: left;
    line-height: 2.5rem;
  }
  &__list{
    margin: 40px auto 0;
    text-align: left;
  }
  &__item{
    background-color: $grey-back;
    padding: 24px 40px;
    border-radius: 20px;
    margin-bottom: 80px;
    position: relative;
    &:after{
      content:'';
      display: block;
      position: absolute;
      left:50%;
      bottom:-130px;
      height: 170px;
      width: 33px;
      border-top: 85px solid transparent;
      border-bottom: 85px solid transparent;
      border-left: 33px solid $grey-back;
      transform: rotate(90deg);
    }
    &:last-child{
      margin-bottom: 24px;
      &:after{
        display: none;
      }
    }
  }
  &__title{
    font-size: 2rem;
    line-height: 3rem;
    font-weight: bold;
    margin-bottom: 16px;
  }
  &__text{
    font-size: 1.6rem;
    padding-left: 8px;
    line-height: 2.7rem;
  }
  &__comment{
    text-align: left;
    font-size: 1.6rem;
  }
  &__btn-area{
    margin-top: 120px;
    text-align: center;
    /deep/.quote__btn{
      margin: 0 auto;
    }
    /deep/.qa__btn{
      margin-top: 40px;
    }
  }
}

@media (max-width:650px){
  .flow{
    padding: 8px;
    padding-bottom: 80px;
    &__item{
      padding: 16px 20px;
      border-radius: 10px;
    }
    &__title{
      margin-bottom: 10px;
    }
    &__btn-area{
      margin-top: 80px;
    }
  }
}

</style>
