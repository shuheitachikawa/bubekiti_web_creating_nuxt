<template>
   <header>
      <div class="header__container">
        <nuxt-link class="header__title" to="/"><img src="../assets/title.png" alt=""></nuxt-link>
        <nav class="header__menu" id="nav">
          <ul class="header__menu--list">
            <li class="header__menu--item" exact><nuxt-link to="services">サービス</nuxt-link></li>
            <li class="header__menu--item" exact><nuxt-link to="works">制作実績</nuxt-link></li>
            <li class="header__menu--item" exact><nuxt-link to="flow">制作の流れ</nuxt-link></li>
            <li class="header__menu--item" exact><nuxt-link to="about">事業内容</nuxt-link></li>
            <li class="header__menu--item" exact><nuxt-link to="blogs">ブログ</nuxt-link></li>
            <li class="header__menu--item inquiry-menu-pc" exact><nuxt-link to="/inquiry">お問い合わせ</nuxt-link></li>
          </ul>
            <div class="inquiry-menu-sp" exact><nuxt-link to="/inquiry">お問合わせ</nuxt-link></div>
        </nav>
      </div>
    </header>
</template>

<script>
// export default {
//   name: 'Header',
//   props: {
//     msg: String
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $blue:#64D5FF;
  $purple:#8400B5;
  $grey-back:#F4F4F4;
  $black-font:#333333;
  $grey-font:#A0A0A0;

  @import '../scss/mixin/container';

  header{
    height:72px;
    background-color: $grey-back;
    width:100vw;
    position: fixed;
    top:0;
    z-index: 9999;
    opacity:0.8;
  }
  .header{
    &__container{
      @include _container;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__title{
      width:160px;
      display: flex;
      align-items: center;
    }
    &__menu{
      ul{
        width:558px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      li{
        font-size: 1.6rem;
        font-weight: bold;
        position: relative;
        & > a{
          display:inline-block;
          line-height: 72px;
        }
        &:after{
          display: block;
          content:'';
          height:20px;
          width:1px;
          background-color:$grey-font;
          position: absolute;
          right:-8px;
          top:50%;
          transform: rotate(20deg) translate(0, -50%);
        }
        &:last-child:after{
          display: none;
        }
      }
    }
  }
  a.nuxt-link-active{
    font-size: 1.8rem;
    //zoom:1.2;
    color: #000;
  }

  .inquiry-menu-sp{
    display: none;
    font-size: 1.6rem;
  }


@media (max-width:1000px){
  .header{
    &__menu{
      ul{
        width:450px;
      }
    }
  }
}

@media (max-width:750px){
  header{
    height: 127px;
  }
  .header{
    &__title{
      display: block;
      height: auto;
      margin-top: 16px;
      }
    &__container{
      display: block;
    }
    &__menu{
      margin-top: 8px;
      position: relative;
      ul{
        width: 100%;
        justify-content: space-around;
      }
      li{
        font-weight: bold;
        position: relative;
        & > a{
          display:inline-block;
          line-height: 50px;
        }
        &:after{
          display: none
        }
      }
    }
  }
  .inquiry-menu-sp{
    display: block;
    position: absolute;
    right:0;
    top:-70%;
    // background-color: $purple;
    // padding: 8px 10px;
    // border-radius: 20px;
    a{
      color:white;
      background-color: $purple;
      padding: 8px 10px;
      border-radius: 20px;
      &.nuxt-link-active{
        background-color: lighten($purple, 10%);
      }
    }
  }
  .inquiry-menu-pc{
    display: none;
  }
}

@media (max-width:500px){
  header{
    height: 100px;
  }
  .header{
    &__title{
      margin-top: 13px;
      width: 128px;
    }
    &__menu{
      margin-top: 0;
      &--item{
//        width: 20%;
        text-align: center;
      }
    }
  }
}
</style>
