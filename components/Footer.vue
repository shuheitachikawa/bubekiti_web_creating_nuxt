<template>
   <footer>
    <div class="footer__container">
      <ul class="footer__list">

        <li class="footer__item">
           <nuxt-link class="footer__item-name" to="/">TOP</nuxt-link>
        </li>

        <li class="footer__item">
          <nuxt-link class="footer__item-name" to="/services">SERVICE</nuxt-link>
          <ul class="footer__sub-list">
            <li v-for="service in services" v-bind:key="service.id" class="footer__sub-item">
              <nuxt-link v-bind:to="{path: `/services/${service.id}`}">
                {{service.title}}
              </nuxt-link>
            </li>
          </ul>
        </li>

        <!-- <li class="footer__item">
          <nuxt-link class="footer__item-name" to="/works">WORKS</nuxt-link>
          <ul class="footer__sub-list">
            <li class="footer__sub-item"><nuxt-link to="/works">制作物一覧</nuxt-link></li>
          </ul>
        </li> -->

        <li class="footer__item">
          <p class="footer__item-name">GUIDE</p>
          <ul class="footer__sub-list">
            <li class="footer__sub-item"><nuxt-link to="/flow">制作の流れ</nuxt-link></li>
            <li class="footer__sub-item"><nuxt-link to="/qa">よくある質問</nuxt-link></li>

          </ul>
        </li>

        <li class="footer__item">
          <p class="footer__item-name">OTHER</p>
          <ul class="footer__sub-list">
            <li class="footer__sub-item"><nuxt-link to="/about">Bubekitiについて</nuxt-link></li>
            <li class="footer__sub-item"><nuxt-link to="/blogs">ブログ</nuxt-link></li>
            <li class="footer__sub-item"><nuxt-link to="/inquiry">お問い合わせ</nuxt-link></li>
          </ul>
        </li>

      </ul>
      <p class="footer__copyright">BUBEKITI.COM</p>
    </div>
  </footer>
</template>

<script>
import BtnToQuote from '@/components/BtnToQuote.vue'

export default {
  name: 'Footer',
  components: {
    BtnToQuote
  },
  data: function(){
    return {
      services: null
    }
  },
  created: function(){
    this.fetchServices();
  },
  methods: {
    fetchServices: function(){
      fetch('https://bubekiti.microcms.io/api/v1/news', {
        headers: {
          'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'
        },
      })
      .then(res => res.json())
      .then(json => json.contents)
      .then(services => {
        this.services = services;
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $blue:#64D5FF;
  $purple:#8400B5;
  $grey-back:#F4F4F4;
  $black-font:#333333;
  $grey-font:#A0A0A0;

  @import '../scss/mixin/container';

  footer{
  background-color: black;
  color:$grey-font;
}
.footer{
  &__container{
    @include _container;
    padding-top: 48px;
    padding-bottom: 48px;
  }
  &__list{
    display: flex;
    justify-content: space-between;
  }
  &__item{
    &-name{
      font-size: 26px;
      height:auto;
    }
  }
  &__sub-list{
    margin-top: 16px;
  }
  &__sub-item{
    font-size: 1.3rem;
    margin-bottom: 16px;
    &:hover{
      opacity:0.8;
    }
  }
  &__copyright{
    text-align: center;
    margin-top: 56px;
    font-size: 1.3rem;
  }
}
.no-hover:hover{
  opacity: 1;
}

/deep/ .quote{
  &__btn{
    display: block;
    background: transparent;
    height: initial;
    width: initial;
  }
  &__txt{
    font-size: 1.3rem;
    color:$grey-font;
    font-weight: normal;
    text-align: left;
  }
  &__sec{
    display: none;
  }
}

@media (max-width:630px){
  .footer{
    &__list{
      display: block;
    }
    &__item{
      margin-bottom: 48px;
    }
  }
}



</style>
