<template>
  <section class="intro">
    <div class="intro__bg"></div>
    <div class="intro__img">
      <img src="../assets/intro.png" alt="手軽に名刺替わりのホームページ制作">
    </div>
    <div class="intro__container">
      <h2 class="intro__title">ハイパフォーマンスなWebサイトでビジネスを後押し</h2>
      <div class="intro__exp">
        <ul class="intro__list">
          <li class="intro__item">仕事でホームページが必要になった</li>
          <li class="intro__item">ホームページを新しくしたい</li>
          <li class="intro__item">モダンなWebサイトを取り入れたい</li>
          <li class="intro__item">WordPressのメンテナンス工数を減らしたい</li>
        </ul>
        <p class="intro__txt">
          高速＋セキュアなWebサイトを構築します。
        </p>
        <p class="intro__txt-exp">
          Bubekiti(ブベキチ)は、神奈川県秦野市を拠点に活動しているWeb制作フリーランス(SOHO)です。神奈川・東京を中心にWeb制作業務(ホームページ制作 / HTMLコーディング / レスポンシブデザイン / CMS構築)を承っております。モダンな開発技術を用いた制作で、クライアント様の要望にお応えします。
        </p>
        <nuxt-link class="intro__btn"  to="/about">制作の特徴 & 制作者について</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Intro',
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


.intro{
  margin-top: 80px;
  position: relative;
  &__container{
    @include _container;
    padding-top: 40px;
  }
  &__title{
    font-size: 3rem;
    font-weight: bold;
    &:after{
      @include _title-bar;
    }
  }
  &__list{
    margin-top: 40px;
  }
  &__item{
    width:95vw;
    max-width: 500px;
    height: 55px;
    line-height: 55px;
    background-color: white;
    margin-bottom: 24px;
    border-radius: 33px;
    padding: 0 32px;
    font-size: 1.8rem;
    font-weight: bold;
  }
  &__txt{
    font-size: 2rem;
    font-weight: bold;
    line-height: 4rem;
  }
  &__txt-exp{
    width: 50%;
    margin-top: 48px;
    font-size: 1.6rem;
    line-height: 3.2rem;
  }
  &__btn{
    margin-top: 24px;
    @include _btn;
    width: initial;
  }
  &__bg{
    position: absolute;
    top:0;
    z-index: -2;
    background-color: $grey-back;
    height: 100%;
    width: 90%;
  }
  &__img{
    z-index: -1;
    width: 50vw;
    max-width: 660px;
    position: absolute;
    right:12%;
    top: 50%;
    transform: translate(0, -50%);
  }
}
@media (max-width:1600px){
  .intro{
    &__img{
      right:5%;
    }
  }
}
@media (max-width:1000px){
  .intro{
    &__item{
      max-width: 450px;
    }
    &__img{
      top: 40%;
      z-index: 1;
    }
    &__txt-exp{
      width: 100%;
      margin-top: 40px;
      font-size: 1.6rem;
      line-height: 3.2rem;
    }
  }
}

@media (max-width:750px){
  .intro{
    text-align: center;
    &__title{
      &:after{
      position: relative;
      left: 50%;
      top:8px;
      transform: translate(-50%, 0);
    }
    }
    &__img{
      display: none;
    }
    &__bg{
      width: 100%;
    }
    &__list{
      margin-top: 56px;
    }
    &__item{
      margin: 0 auto 16px;
    }
    &__txt, &__txt-exp{
      text-align: left;
    }
  }
}

@media (max-width:500px){
  .intro{
    &__item{
      margin-bottom: 16px;
      padding: 0 16px;
      font-size: 1.8rem;
      height: 45px;
      line-height: 45px;
    }
  }
}

</style>
