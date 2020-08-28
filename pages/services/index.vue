<template>
  <div class="services-page">
    <Service/>
    <Contact/>
  </div>
</template>

<script>
// @ is an alias to /src
import Service from '@/components/Service.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Services',
  components: {
  //  TopView,
    Service,
    Contact,
  }
}
</script>

<style scoped lang="scss">
  .service{
    margin-bottom: 0;
    margin-top: 0;
    /deep/.service__container{
      padding-top: 35px;
    }
    /deep/.service__title{
      display: none;
    }
    /deep/ .service__list{
      margin-top: 0;
    }
  }

</style>
