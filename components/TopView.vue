<template>
  <section class="topview" v-bind:class="{'nuxt-link-top': $route.path === '/'}">
    <transition name="slide">
      <h1 v-show="$route.path === '/'" class="topview__title">秦野のホームページ屋</h1>
    </transition>
    <transition name="slide">
      <p v-show="$route.path === '/services'" class="topview__title">SERVICES</p>
    </transition>
    <transition name="slide">
      <p v-show="$route.path.indexOf('/services/') != -1" class="topview__title">SERVICE</p>
    </transition>
    <transition name="slide">
      <p v-show="$route.path === '/works'" class="topview__title">WORKS</p>
    </transition>
    <transition name="slide">
      <p v-show="$route.path.indexOf('/works/') != -1" class="topview__title">WORK</p>
    </transition>
    <transition name="slide">
      <p v-show="$route.path === '/flow'" class="topview__title">FLOW</p>
    </transition>
    <transition name="slide">
      <p v-show="$route.path === '/blogs'" class="topview__title">BLOGS</p>
    </transition>
    <transition name="slide">
      <p v-show="$route.path.indexOf('/blogs/') != -1" class="topview__title">BLOG</p>
    </transition>
    <transition name="slide">
      <p v-show="$route.path === '/inquiry'" class="topview__title">INQUIRY</p>
    </transition>
    <transition name="slide">
      <p v-show="$route.path === '/about'" class="topview__title">ABOUT</p>
    </transition>
    <transition name="slide">
      <p v-show="$route.path === '/qa'" class="topview__title">Q＆A</p>
    </transition>

    <div class="topview__img">
      <img src="../assets/intro.png" alt="手軽に名刺替わりのホームページ制作">
    </div>

  <client-only>
  <particles-bg type="custom" :config="config" :bg="true" class="topview__area"/>
  </client-only>
  
    
  </section>
</template>

<script>
  export default {
    data: function() {
      return {
        config: {
          num: [1, 1],
          rps: 0.3,
          radius: [10, 3],
          life: [10, 10],
          v: [1, 2],
          tha: [-10, 10],
          shape: "circle",
          alpha: [0.9, 0],
          scale: [1, 1],
          position: "all",
          cross: "dead",
          random: 5,
          color:['#8400B5','#8400B5']
        }
      };
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.slide-enter-active{
  transition: .7s;
}
.slide-leave-active{
  transition: .7s;
}
.slide-enter{
  color:transparent;
  text-shadow: 0 0 8px rgba(0,0,0,0.5);
  opacity: 0;
}
.slide-enter-to{
  text-shadow: none;
}
.slide-leave{
  text-shadow: none;
}
.slide-leave-to{
  color:transparent;
  text-shadow: 0 0 8px rgba(0,0,0,0.5);
  opacity: 0;
}


.topview{
  //background-color: red;
  height:90px;
  margin-top: 72px;
  position: relative;
  overflow: hidden;
  transition: .3s;
  &__img{
    display: none;
  }
  &__title{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 35%;
    //left:50%;
    //transform: translate(-50%, -50%);
    font-size: 3.2rem;
    overflow: hidden;
  }
}
.canvas{
  height: 100vh !important;
}
.nuxt-link-top{
  margin-top: 0;
  height:100vh;
  .topview__title{
    top:50%;
  }
}

@media (max-width:750px){
  .topview{
    margin-top: 127px;
    overflow: hidden;
  }
  .nuxt-link-top{
    margin-top: 0;
    height:100vh;
    .topview{
      &__title{
        top:25%;
      }
      &__img{
        display: block;
        position: absolute;
        top:40%;
        left:10px;
        z-index: -1;
        opacity: .7;
      }
    }
  } 
}

@media (max-width:500px){
  .topview{
    margin-top: 100px;
    overflow: hidden;
  }
  .nuxt-link-top{
    margin-top: 0;
    height:100vh;
  }
}

</style>

