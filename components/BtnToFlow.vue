<template>
  <div>
    <nuxt-link to="/flow" class="flow__btn">
      制作の流れ
    </nuxt-link>
  </div>
</template>

<script>
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

.flow{
  &__btn{
    @include _btn;
    text-align: center;
    width: 100%;
    max-width: 320px;
  }
  &__txt{
    color:white;
    font-size: 1.7rem;
    line-height: 2.5rem;
    font-weight: bold;
  }
}



</style>
