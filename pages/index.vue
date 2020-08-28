<template>
  <div class="home-page">
    <Intro/>
    <Service/>
    <Work/>
    <Guide/>
    <Blog/>
    <Contact/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'
import Service from '@/components/Service.vue'
import Work from '@/components/Work.vue'
import Guide from '@/components/Guide.vue'
import Blog from '@/components/Blog.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    Service,
    Work,
    Guide,
    Blog,
    Contact,
  }
}
</script>

<style scoped>

</style>
