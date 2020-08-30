<template>
  <div id="app">
    <Header/>
    <TopView/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<style lang="scss">

 $black-font:#333333;

  //base
  @import './scss/base/reset';



  html{
    font-size: 10px;
    color:$black-font;
    font-family: Noto, "Hiragino Sans", Helvetica, Arial, sans-serif;
  }

  p{
    letter-spacing: .1rem;
  }

  a{
    display:inline-block;
    height:100%;
    width:100%;
    transition: .3s;
  }

  img{
    width:100%;
    height:auto;
  }

  #app {

  }

  @media (max-width:1050px){
    html{
    font-size: 8px;
    }
  }


</style>
