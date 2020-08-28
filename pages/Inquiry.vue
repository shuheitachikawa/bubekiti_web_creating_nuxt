<template>
  <div class="form__page">

    <transition name="fade">
      <div class="form__area" v-show="state === 'input'">
        <p class="form__exp">お仕事のご依頼、ご相談、ご質問等、お気軽にお問い合わせください。</p>
        <form action="" class="form__list">
          <label for="" class="form__name">お名前</label><span class="form__caution" v-show="cautionName">入力してください。</span>
          <input type="text" v-model="name">
          <label for="" class="form__mail">メールアドレス</label><span class="form__caution" v-show="cautionMail">入力してください。</span>
          <input type="text" v-model="mail">
          <label for="" class="form__name">メッセージ本文</label><span class="form__caution" v-show="cautionText">入力してください。</span>
          <textarea name="" id="" cols="30" rows="10" class="form__text" v-model="text"></textarea>
          <div class="form__submit" v-on:click="ConfilmOrBack">確認</div>
        </form>
        <p class="form__sub-txt">
          お客様のプライバシー・個人情報は、お問合せいただいた内容に関するご返答をさし上げる以外の目的では使用いたしません。
        </p>
      </div>
    </transition>
    
    <transition name="fade">
      <div class="confilm__area form__area" v-show="state === 'confilm'">
        <p class="confilm__main-text">入力内容のご確認</p>
        <p class="confilm__exp">入力いただいた内容にお間違いなければ、送信ボタンを押してください。</p>
        <p class="confilm__name confilm__item">お名前：{{name}} 様</p>
        <p class="confilm__mail confilm__item">メールアドレス：{{mail}}</p>
        <p class="confilm__text-title confilm__item">お問い合わせ内容：</p>
        <p v-html="text.replace(/\n/g, '<br/>')" class="confilm__text"></p>
        <div class="confilm__submit" v-on:click="ConfilmOrBack">戻る</div>
        <div class="confilm__submit submit" v-on:click="SubmitForm">送信</div>
      </div>
    </transition>

    <transition name="fade">
      <div class="finish__area form__area" v-show="state === 'finish'">
        <p class="confilm__main-text">送信完了</p>
        <p class="confilm__exp">{{name}} 様</p>
        <p class="confilm__exp">
          この度は、お問い合わせ頂きありがとうございました。<br>
          通常48時間以内に、入力頂いたメールアドレス宛に返信させていただきます。
        </p>
        <nuxt-link class="form__submit" to="/" v-on:click="ResetForm">TOPページへ</nuxt-link>
      </div>
    </transition>



  </div>
</template>

<script>


// @ is an alias to /src

export default {
  name: 'Inquiry',
  components: {
  },
  data: function(){
    return {
      state: 'input',
      finish: false,
     name:"",
     mail:"",
     text:"",
      cautionName: false,
      cautionMail: false,
      cautionText: false,
    };
  },
  created: function(){
 //   this.state = true;
  },
  methods: {
    SubmitForm: function(){
      fetch('https://bubekiti.microcms.io/api/v1/inquiry', {
        method: "POST",
        headers: {
          'X-WRITE-API-KEY': '387cb721-90f6-4313-965b-cf10a226fd96',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"name": this.name,"mail": this.mail,"text": this.text})
      })
      console.log(process.env.VUE_APP_MICROCMS_POST)
      this.state = 'finish'
    },
    ResetForm: function(){
      this.name = "";
      this.mail = "";
      this.text = "";
    },
    ConfilmOrBack: function(){
      this.cautionName = false;
      this.cautionMail = false;
      this.cautionText = false;
      if(this.name !== "" && this.mail !== "" && this.text !== ""){
        if(this.state === 'input'){
          this.state = 'confilm';
        }else if(this.state === 'confilm'){
          this.state = 'input';
        }
      }else{
        if(this.name === ""){
          this.cautionName = true;
        }
        if(this.mail === ""){
          this.cautionMail = true;
        }
        if(this.text === ""){
          this.cautionText = true;
        }
      }
    }      
  }
}
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

.fade-enter-active{
  transition: opacity .5s;
}
.fade-enter{
  opacity: 0;
}


.form{
  &__page{
    padding: 35px;
    font-size: 1.6rem;
  }
  &__exp{
    line-height: 2.5rem;  
  }
  &__area{
    width: 100%;
    max-width: 732px;
    margin: 0 auto;
  }
  &__list{
    margin-top: 40px;
  }
  &__caution{
    margin-left: 16px;
    color:$purple;
  }
  &__submit{
    text-align: center;
    width:200px;
    height: 56px;
    line-height: 56px;
    margin: 40px auto 0;
    background-color: $purple;
    font-weight: bold;
    color: white;
    font-size: 1.8rem;
    &:hover{
      cursor: pointer;
    }
  }
  &__sub-txt{
    color:grey;
    font-size: 1.5rem;
    line-height: 2.2rem;
    margin-top: 40px;
    margin-bottom: 80px;
  }
}

label{
  display: inline-block;
  margin-top: 32px;
  font-weight: bold;
}
input, textarea{
  display: block;
  width: 100%;
  border:1px solid rgb(194, 194, 194);
  margin-top: 8px;
  padding: 4px 8px;
  line-height: 2.5rem;
}




.confilm{
  &__main-text{
    font-weight: bold;
    font-size: 2rem;
  }
  &__exp{
    margin-top: 40px;
    margin-bottom: 40px;
    line-height: 2.5rem;
  }
  &__item{
    margin-top: 32px;
  }
  &__text{
    margin-top: 8px;
    line-height: 2.5rem;
  }
  &__submit{
    margin-top: 40px;
    display: inline-block;
    text-align: center;
    width: 30%;
    max-width:200px;
    min-width:130px;
    height: 56px;
    line-height: 56px;
    margin: 40px auto 0;
    background-color: $blue;
    font-weight: bold;
    color: white;
    font-size: 1.8rem;
    &:hover{
      cursor: pointer;
    }
    &.submit{
      background-color: $purple;
      margin-left: 16px;
    }
  }
}


@media (max-width:650px){
  .form{
    &__page{
      padding: 35px 16px;
    }
  }
}


</style>
