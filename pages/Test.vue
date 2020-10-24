<template>
  <div class="test">
    <div class="red" :style="{height:scroll-500+'px', width:scroll-500+'px', top:scroll+'px'}"></div>
    <div class="blue" :style="{height:scroll+'px', width:scroll+'px', top:scroll+'px'}"></div>
  </div>
</template>



<script>
import Contact from '@/components/Contact.vue';

import axios from 'axios';

export default {

  data(){
    return{
      scroll: null,
      blueH: 0,
      blueW: 0,
      redH: 0,
      redW: 0, 
    };
  },
  mounted: function(){
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll(){
      this.scroll = window.scrollY
      console.log(scroll)
    }
  }
}

</script>



<style scoped lang="scss">
.test{
  width: 100%;
  height: 300vh;
  position: relative;
}
.blue{
  position: absolute;
  background-color: blue;
  // height: 100px;
  // width: 100px;
  left:30%;
  top:60%;
  transform:translate(-40%, -30%);
  border-radius: 50%;
}

.red{
  position: absolute;
  background-color: red;
  // height: 100px;
  // width: 100px;
  left:60%;
  top:50%;
  border-radius: 50%;
}

</style>
