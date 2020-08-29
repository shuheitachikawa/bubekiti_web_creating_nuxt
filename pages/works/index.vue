<template>
  <div class="works">
    <div class="container">
      <p class="works__text">公開許可をいただいた実績をご紹介しています。</p>
      <div class="works__area">
        <ul class="works__list">

          <!-- <li v-for="work in works" v-bind:key="work.id" class="works__item">
            <nuxt-link v-bind:to="`/works/${work.id}`">
              <div class="works__imgarea">
                <img v-bind:src="work.eyecatch.url" alt="">
              </div>
              <div class="works__txtarea">
                <p class="works__txt">{{work.title}}</p>
              </div>
            </nuxt-link>
          </li> -->

        </ul>
      </div>
    </div>
    <Contact/>
  </div>
</template>

<script>


// @ is an alias to /src
//import Contact from '@/components/Contact.vue'
import axios from 'axios';

export default {

  data(){
    return{
      works: []
    };
  },
  async asyncData(){
    const{data} = await axios.get(
      "https://bubekiti.microcms.io/api/v1/works",
      {
        headers: {'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'}
      }
    );
    return{
      works: data.contents
    };
    console.log(works);
  }

  // name: 'WorkDetail',
  // components: {
  //   Contact,
  // },
  // data: function(){
  //   return {
  //     works: null,
  //   };
  // },
  // created: function(){
  //   this.fetchArticle();
  // },
  // watch:{
  //   '$route': 'fetchArticle'
  // },
  // methods: {
  //   fetchArticle: function(){
  //     fetch('https://bubekiti.microcms.io/api/v1/works', {
  //     headers: {
  //       'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(json => json.contents)
  //     .then(works => {
  //       this.works = works
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  //   },      
  // },
}
</script>

<style scoped lang="scss">
  
//mixin
@import '../../scss/mixin/container';
// @import '../scss/mixin/title-bar';
// @import '../scss/mixin/btn';
// @import '../scss/mixin/sectionTitle';
// @import '../scss/mixin/contactBtn';


$blue:#64D5FF;
$purple:#8400B5;
$grey-back:#F4F4F4;
$black-font:#333333;
$grey-font:#A0A0A0;

.works{
  &__text{
    font-size: 1.6rem;
    margin-bottom: 40px;
  }
  &__list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__item{
    width: 279px;
    height: 171px;
    margin-bottom: 80px;
    background-color: white;
    position: relative;
    transition: .3s;
    &:hover{
      opacity:0.9;
      top:-3px;
    }
  }
  &__imgarea{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  &__txtarea{
    height: 30px;
  }
  &__txt{
    line-height: 30px;
    font-size: 1.5rem;
    text-align: center;
  }
}

.container{
  @include _container;
  padding: 35px;
}


@media (max-width:750px){
  .container{
    padding: 35px 8px;
  }
  .works{
    &__list{
      display: block;
    }
    &__item{
      margin: 0 auto 56px;
      width: 80vw;
      height: calc(80vw * 190 / 310);
    }
  }
}


</style>
