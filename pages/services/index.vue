<template>
  <div class="services-page">
    <!-- <Service/> -->
    <section class="service">
      <div class="service__container">
        <h2 class="service__title">サービス一覧</h2>
        <ul class="service__list">

          <!-- 記事アイコン -->
          <li v-for="service in services" v-bind:key="service.id" class="service__item">
            <nuxt-link v-bind:to="`/services/${service.id}`">
              <div class="service__img">
                <img v-bind:src="service.eyecatch.url + '?fm=webp&w=300'" alt="">
              </div>
              <div class="service__txtarea">
                <p class="service__txt">{{service.title}}</p>
              </div>
            </nuxt-link>
          </li>

        </ul>
      </div>
    </section>
    <Contact/>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  data(){
    return{
      services: []
    };
  },
  async asyncData(){
    const{data} = await axios.get(
      "https://bubekiti.microcms.io/api/v1/news",
      {
        headers: {'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'}
      }
    );
    return{
      services: data.contents
    };
    console.log(services);
  },
};

</script>

<style scoped lang="scss">

@import '../../scss/mixin/container';
@import '../../scss/mixin/title-bar';
@import '../../scss/mixin/btn';
@import '../../scss/mixin/sectionTitle';
@import '../../scss/mixin/contactBtn';


$blue:#64D5FF;
$purple:#8400B5;
$grey-back:#F4F4F4;
$black-font:#333333;
$grey-font:#A0A0A0;


.service{
  margin-top: 160px;
  &__container{
    @include _container;
    text-align: center;
  }
  &__title{
    display: inline-block;
    text-align: center;
    @include _sectionTitle('SERVICE');
    &:after{
      @include _title-bar;
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  &__list{
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__item{
    width:450px;
    height: 278px;
    margin-bottom: 40px;
    //box-shadow: 1px 1px 2px #9c9c9c;
    border-bottom: 1px solid $grey-back;
    border-right: 1px solid $grey-back;
    transition: .3s;
    position: relative;
    &:hover{
      border: none;
      top:-3px;
    }
  }
  &__img{
    height:90%;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  &__txt{
    font-size: 1.8rem;
    line-height: calc(309px - 277px);
  }
  &__item:nth-child(n + 3){
    width:315px;
    height:194px;
    position: relative;
    .service__img{
      height:100%;
    }
    .service__txtarea{
      position: absolute;
      bottom:0;
      left:50%;
      transform: translate(-50%, 0);
      width: 100%;
      text-align: center;
    }
    .service__txt{
      font-size: 1.6rem;
    }
    &:hover{
      &:before{
        border-bottom: 0px solid rgba(255,255,255,0.8);
        border-right: 0px solid rgba(255,255,255,0.8);
        border-left: 350px solid transparent;
        border-top: 216px solid transparent;
      }
    }
    &:before{
      pointer-events: none;
      position: absolute;
      top:0;
      left:0;
      content:'';
      height: 0px;
      width: 0px;
      border-bottom: 108px solid rgba(255,255,255,0.8);
      border-right: 175px solid rgba(255,255,255,0.8);
      border-left: 175px solid transparent;
      border-top: 108px solid transparent;
      transition: .3s;
    }
  }
}

@media (max-width:1200px){ 
  .service{
    &__list{
      justify-content: space-around;
    }
    &__item{
      width: 400px;
      height: 247px;
    }
    &__txt{
      line-height: calc(247px * 0.1);
    }
    &__item:nth-child(n + 3){
      width: 280px;
      height: 173px;
      &:hover{
        &:before{
          border-bottom: 0px solid rgba(255,255,255,0.8);
          border-right: 0px solid rgba(255,255,255,0.8);
          border-left: 280px solid transparent;
          border-top: 173px solid transparent;
        }
      }
      &:before{
        border-bottom: 86px solid rgba(255,255,255,0.8);
        border-right: 140px solid rgba(255,255,255,0.8);
        border-left: 140px solid transparent;
        border-top: 86px solid transparent;
      }
    }
  }
}

@media (max-width:950px){ 
  .service{
    &__list{
      justify-content: space-around;
    }
    &__item{
      width: 320px;
      height: 198px;
    }
    &__txt{
      line-height: calc(198px * 0.1);
    }
    &__item:nth-child(n + 3){
      width: 224px;
      height: 138px;
      &:hover{
        &:before{
          border-bottom: 0px solid rgba(255,255,255,0.8);
          border-right: 0px solid rgba(255,255,255,0.8);
          border-left: 224px solid transparent;
          border-top: 138px solid transparent;
        }
      }
      &:before{
        border-bottom: 79px solid rgba(255,255,255,0.8);
        border-right: 112px solid rgba(255,255,255,0.8);
        border-left: 112px solid transparent;
        border-top: 79px solid transparent;
      }
    }
  }
}

@media (max-width:750px){
  .service{
    &__list{
      display: block;
    }
    &__item{
      margin: 0 auto 32px;
      width: 80%;
      height: 80%;
    }
    &__img{
      height:calc(277 / 309 * 100%);
      overflow: hidden;
    }
    &__txt{
      font-size: 2rem;;
    }
    &__item:nth-child(n + 3){
      width: 80%;
      height: 80%;
      .service__img{
        height:calc(277 / 309 * 100%);
        overflow: hidden;
        display: flex;
        align-items: center;
      }
      .service__txtarea{
        position: static;
        transform: none;

      }
      .service__txt{
        font-size: 2rem;
        line-height: calc(309px - 277px);
        text-align: center;
      }
      &:before{
        display: none;
      }
    }
  }
}




  .service{
    margin-bottom: 0;
    margin-top: 0;
    /deep/.service__container{
      padding-top: 35px;
    }
    /deep/.service__title{
      display: none;
    }
    /deep/ .service__list{
      margin-top: 0;
    }
  }

</style>
