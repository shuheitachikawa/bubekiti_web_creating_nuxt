<template>
  <div class="about__page">
    <div class="qa__container">
      <ul>
        <li v-for="(qa, index) in qas" v-bind:key="qa.id" v-on:click="addAnswer(index)" v-bind:class="{active: qa.isActive}" class="qa__item">
          <p v-html="`Q: ${qa.question}`" v-bind:class="{active: qa.isActive}" class="qa__question"></p>
          <transition name="slide">
            <p v-show="qa.isActive" v-html="`A: ${qa.answer.replace(/\n/g, '<br/>')}`" class="qa__answer"></p>
          </transition>
        </li>
      </ul>
    </div>
    <Contact/>
  </div>
</template>



<script>

var makeObj = function(qas){
  for(var i=0; i<qas.length; i++){
    qas[i].isActive = false;
  }
  return qas;
}

import Contact from '@/components/Contact.vue'

import axios from 'axios';
export default {
  data(){
    return{
      qas: []
    };
  },
  async asyncData(){
    const{data} = await axios.get(
      "https://bubekiti.microcms.io/api/v1/questions",
      {
        headers: {'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'}
      }
    );
    return{
      qas: makeObj(data.qas)
    };
  },
  methods: {
    addAnswer: function(index){
      this.qas[index].isActive = !this.qas[index].isActive;
    },
  }
};


// export default {
//   name: 'Qa',
//   components: {
//     Contact,
//   },
//   data: function(){
//     return {
//       qas: "",
//       //isActive: false
//     }
//   },
//   created: function(){
//     this.fetchQa();
//   },
//   methods: {
//     fetchQa: function(){
//       fetch('https://bubekiti.microcms.io/api/v1/questions', {
//       headers: {
//         'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'
//       },
//     })
//       .then(res => res.json())
//       .then(json => {
//         this.qas = makeObj(json.qas);
//       })
//     },
//     addAnswer: function(index){
//       this.qas[index].isActive = !this.qas[index].isActive;
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


.slide-enter-active, .slide-leave-active{
  transition: all .5s;
}
.slide-enter, .slide-leave-to{
  opacity:0;
  //transform: translateY(-100%);// translateY(0px);
  //top: -100%;
}


p{
  font-size: 1.6rem;
  line-height: 2.5rem;
}

.qa{
  &__container{
    @include _container;
    max-width: 732px;
    padding: 35px;
  }
  &__item{
    background-color: $grey-back;
    margin-bottom: 16px;
    padding: 24px 40px;
    border-radius: 37px;
    &.active{
      background-color: rgb(203, 224, 255);
    }
    &:hover{
      cursor: pointer;
    }
  }
  &__question{
    font-weight: bold;
    position: relative;
    &:after{
      position: absolute;
      content:'';
      right:0;
      top:30%;
      //transform: translate(-50%, -50%);
      height:1.6rem;
      width: 1.6rem;
      border-top: 3px solid $grey-font;
      border-right: 3px solid $grey-font;
      transform:rotate(45deg);
      transition: .3s;
    }
    &.active:after{
      transform:rotate(135deg)
    }
  }
  &__answer{
    margin-top: 16px;
    padding-left: 8px;
  }
}


@media (max-width:650px){
  .qa{
    &__container{
      padding: 35px 0 80px;
    }
    &__item.active{
      border-radius: 20px;
      transition: .3s;
      padding-left: 20px;
    }
  }
}

</style>
