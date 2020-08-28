<template>
  <section class="works">
    <div class="works__bg"></div>
    <div class="works__img">
      <img src="../assets/works.png" alt="">
    </div>
    <div class="works__container">
      <h2 class="works__title">制作実績</h2>
      <div class="works__area">
        <ul class="works__list">

          <!-- 制作物一覧 -->
          <li v-for="work in works" v-bind:key="work.id" class="works__item">
            <nuxt-link v-bind:to="{path: `/works/${work.id}`}">
              <div class="works__imgarea">
                <img v-bind:src="work.eyecatch.url" alt="">
              </div>
              <div class="works__txtarea">
                <p class="works__txt">{{work.title}}</p>
              </div>
            </nuxt-link>
          </li>

        </ul>
      </div>
      <div class="works__btnarea">
        <nuxt-link class="works__btn"  to="/works">制作物一覧</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Works',
  components: {

  },
  data: function(){
    return {
      works: null
    }
  },
  created: function(){
    this.fetchWorks();
  },
  methods: {
    fetchWorks: function(){
      fetch('https://bubekiti.microcms.io/api/v1/works', {
        headers: {
          'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'
        },
      })
      .then(res => res.json())
      .then(json => json.contents)
      .then(works => {
        this.works = works.slice(0, 2);
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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


.works{
  margin-top: 160px;
  position: relative;
  padding-top: 40px;
  &__bg{
    position: absolute;
    top:0;
    right:0;
    z-index: -1;
    background-color: $grey-back;
    height:100%;
    //width:calc(1100px + (100vw - 1100px) /2);
    width: 90%;
  }
  &__img{
    width: 50vw;
    max-width: 660px;
    position: absolute;
    left:12%;
    top: 50%;
    transform: translate(0, -50%);
  }
  &__container{
    @include _container;
  }
  &__title{
    @include _sectionTitle('WORKS');
    &:after{
      @include _title-bar;
    }
  }
  &__area{
    display: flex;
    justify-content: flex-end;
  }
  &__list{

  }
  &__item{
    width: 500px;
    height: 309px;
    margin-bottom: 40px;
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
    height:calc(277 / 309 * 100%);
    overflow: hidden;
  }
  &__txtarea{
    height: 30px;
  }
  &__txt{
    line-height: 30px;
    font-size: 1.6rem;
    text-align: center;
  }
  &__btnarea{
    text-align: right;
  }
  &__btn{
    text-align: center;
    @include _btn;
  }
}

@media (max-width:1600px){
  .works{
    &__img{
      left:5%;
    }
  }
}
@media (max-width:1200px){
  .works{
    &__item{
      width: 400px;
      height: 247px;
    }
  }
}
@media (max-width:1000px){
  .works{
    &__item{
      width: 320px;
      height: 198px;
    }
  }
}

@media (max-width:770px){
  .works{
    &__bg{
      width: 80%;
    }
  }
}

@media (max-width:750px){
  .works{
    &__bg{
      width: 100%;
    }
    &__container{
      text-align: center;
    }
    &__title{
      &:after{
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
    &__img{
      display: none;
    }
    &__area{
      margin-top: 80px;
      display: block;
    }
    &__item{
      margin: 0 auto 32px;
      width: calc(100vw * 0.8);
      height: calc(100vw * 0.8 * 309 / 500);
    }
    &__btnarea{
      margin-top: 64px;
      text-align: center;
    }
  }
}

</style>
