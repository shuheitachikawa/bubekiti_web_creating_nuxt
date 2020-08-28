<template>
  <div>

    <div v-on:click="showQuote" class="quote__btn">
      <p class="quote__txt">簡単見積もり<br><span class="quote__sec">(30秒)</span></p>
    </div>

    <div v-show="quote" class="quote">
      <div v-on:click="hideQuote" class="quote__mask"></div>
      <transition name="slide">
        <div v-show="quote" class="quote__wrapper">
          <h2 class="quote__title"></h2>
          <div class="quote__input-area">
            現在準備中です。
          </div>
          <div class="quote__btn-area">
            <div v-on:click="hideQuote" class="quote__close-btn">閉じる</div>
          </div>
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: 'QuoteBtn',
  data: function(){
    return {
      quote: false
    }
  },
  methods: {
    showQuote: function(){
      this.quote = true;
    },
    hideQuote: function(){
      this.quote = false;
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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



//ボタン

.slide-enter-active{
  transition: .5s;
  //position: absolute;
}
.slide-leave-active{
  transition: .5s;
  //position: absolute;
}
.slide-enter{
  //top: -100vh;
  transform: translateY(-100vh)
}
.slide-enter-to{
  //top: 20vh;
  transform: translateY(0%)
}
.slide-leave{
  transform: translateY(0%)
}
.slide-leave-to{
  transform: translateY(-100vh)
}



.quote{
  &__btn{
    user-select:none;
    height: 160px;
    width: 160px;
    border-radius: 50%;
    background:  linear-gradient(to right,$blue,$purple);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
      cursor: pointer;
    }
  }
  &__txt{
    color:white;
    font-size: 1.7rem;
    line-height: 2.5rem;
    font-weight: bold;
    text-align: center;
  }
}


//表示エリア
.quote{
  //position: absolute;
  &__mask{
    width: 100vw;
    height: 100vh;
    background-color: grey;
    opacity: .7;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 20000;
  }
  &__wrapper{
    position: fixed;
    width: 90%;
    max-width: 800px;
    padding: 48px 64px;
    top: 20vh;
    left:0;
    right:0;
    margin:0 auto;  
    background-color: white;
    z-index: 30000;
  }
  &__title{
    @include _sectionTitle('簡単お見積もり');
    &::before{
      font-size: 3.2rem;
    }
  }
  &__input-area{
    margin-top: 40px;
    font-size: 2rem;
    height: 160px;
  }
  &__btn-area{
    text-align: center;
    margin-top: 40px;
  }
  &__close-btn{
    user-select:none;
    font-size: 2rem;
    padding: 8px 32px;
    background-color: $purple;
    display: inline-block;
    color:white;
    border-radius: 20px;
    &:hover{
      cursor: pointer;
    }
  }
}

@media (max-width:500px){
  .quote{
    &__wrapper{
      width: 95%;
      padding: 24px 12px;
    }
    &__title::before{
      font-size: 32px;
    }
  }
}


</style>
