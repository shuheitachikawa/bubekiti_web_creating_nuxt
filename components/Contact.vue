<template>
  <section class="contact">
    <div class="contact__container">
      <div class="contact__left">
        <h2 class="contact__title"></h2>
        <p class="contact__exp">ご相談・お見積・お問い合せはお気軽にご連絡ください。</p>
      </div>
      <div class="contact__right">
        <p class="contact__site-name">Bubekiti Web creating</p>
        <p class="contact__email">mail : shuhei.tachikawa[@]bubekiti.com</p>
        <nuxt-link class="contact-btn" to="/inquiry">お問い合わせ</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
// export default {
//   name: 'Contact',
// }
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


.contact{
  background-image: url('../assets/contact.jpg');
  background-size: cover;
  color:white;
  &__container{
    @include _container;
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  &__title{
    @include _sectionTitle('CONTACT');
    &:after{
      @include _title-bar;
    }
  }
  &__exp{
    margin-top: 24px;
    font-size: 1.6rem;
  }
  &__site-name{
    margin-top: 16px;
    font-size: 2.8rem;
  }
  &__email{
    margin-top: 16px;
    font-size: 1.6rem;
  }
  .contact-btn{
    margin-top: 24px;
    margin-bottom: 48px;
    @include _contactBtn(64px, 360px);
    padding-left: 24px;
    &:before{
      margin-right: 80px;
    }
  }
}

@media (max-width:1000px){
  .contact{
    .contact-btn{
      @include _contactBtn(56px, 250px);
    }
  }
}

@media (max-width:750px){
  .contact{
    &__container{
      display: block;
    }
    &__right{
      margin-top: 48px;
    }
  }
}


</style>
