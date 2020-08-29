
<template>
  <div class= "side-bar">
    <!-- <div class="aside-card service-card">
      <nuxt-link to="/services">
        <p>
          SERVICE
        </p>
      </nuxt-link>
    </div> -->
    <div class="card">
      <nuxt-link to="/services">
        <span class="card__bd">
            SERVICE<span class="card__line"></span>  
        </span>
      </nuxt-link>
    </div>
    <div class="card">
      <nuxt-link to="/about">
        <span class="card__bd">
            BUBEKITI<span class="card__line"></span>  
        </span>
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
$grey-back:#F4F4F4;
$black-font:#333333;
$grey-font:#A0A0A0;

$purple:#8400B5;
.side-bar{
  margin-top: 80px;
}
.card{
  display: block;
  margin-bottom: 30px;
  width: 210px;
  line-height: 65px;
  text-align: right;
  font-weight: 600;
  font-size: 1.6rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: $purple;
  color: #FFFFFF;
  letter-spacing: 0.2em;
  box-sizing: border-box;
  transition: .1s;
  &__line{
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 1px;
    background: #FFFFFF;
    position: absolute;
    right: 15px;
    top: 50%;
    transition: .2s;
  }
  &::before, &::after{
    position: absolute;
    display: block;
    content:"";
    width: 0;
    height: 2px;
    background-color: $purple;
    transition: all .2s;
  }
  &::before{
    left:0;
    top:0;
  }
  &::after{
    right:0;
    bottom:0;
  }
  &__bd{
    display: block;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    padding-right: 60px;
    transition: .2s;
    &:hover{
      padding-right: 80px;
    }
  }
  &__bd::before, &__bd::after{
    position: absolute;
    display: block;
    content:"";
    height: 0;
    width: 2px;
    background-color: $purple;
    transition: all .2s;
  }
  &__bd::before{
    left:0;
    bottom:0;
  }
  &__bd::after{
    top:0;
    right:0px;
  }
  &:hover{
    background: #FFFFFF;
    color:$purple;
    opacity:1;
  }
  &:hover .card__line{
    width: 35px;
    right: 20px;
    background: $purple;
  }
  &:hover::before{
    width: 100%;
    transition-delay: .1s;
  }
  &:hover::after{
    width: 100%;
    transition-delay: .3s;
  }
  &:hover .card__bd::before{
    height: 100%;
    transition-delay: .4s;
  }
  &:hover .card__bd::after{
    height: 100%;
    transition-delay: .2s;
  }
}

@media (max-width:1200px){
  .side-bar{
    margin: 0 auto;
    width: 90vw;
    max-width:450px;
    display: flex;
    justify-content: space-between;
  }
  .card{
    width: 42vw;
    max-width:200px;
    height: 40px;
    line-height: 40px;
    font-size: 1.3rem;
  }
}
</style>
