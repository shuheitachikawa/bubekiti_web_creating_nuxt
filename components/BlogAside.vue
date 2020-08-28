<template>
  <div class= "side-bar">
    <div class="aside-card service-card">
      <nuxt-link to="/services">
        <p>
          サービス一覧
        </p>
      </nuxt-link>
    </div>
    <div class="aside-card about-card">
      <nuxt-link to="/about">
        <p>
          Bubekitiについて
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>


  export default {
    // name: 'Blog',
    // components: {
    //  BlogCards
    // }
    data: function(){
      return{
        categories: ['a','b','c','d','e']
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

.side-bar{
  margin-top: 80px;
}
.aside-card{
  border: 2px solid $purple;
  width: 100%;
  height: 88px;
  padding: 16px;
  margin-bottom: 24px;
  font-size: 1.7rem;
  line-height: 3rem;
  font-weight: bold;
  text-align: center;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
