<template>
  <div class="blogs-page">
    <div class="container">
      <div class="article-area">
        <BlogCards v-bind:serch-name='serchName' v-bind:selec-category ='selectedCategory' v-on:parentCategories='updateCategories'></BlogCards>
      </div>
      <aside>
        <!-- <BlogAside/> -->
        <div class= "side-bar">
          <div class="side-bar__item serch-area">
            <p class="side-bar__title">SERCH</p>
            <input v-model="serchName" v-on:click="resetSort" type="text" class="side-bar__serch" placeholder="キーワードから検索">
          </div>
          <div class="side-bar__item category-area">
            <p class="side-bar__title">CATEGORY</p>
            <ul>
              <li class="side-bar__category" v-for="(category, index) in categories" v-bind:key="index" v-on:click="sortArticles(index)" v-bind:class="{active: category.isActive}">{{category.name}}</li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
    <Contact/>
  </div>
</template>




<script>
// @ is an alias to /src
import Contact from '@/components/Contact.vue'
import BlogCards from '@/components/BlogCards.vue'
//import BlogAside from '@/components/BlogAside.vue'

export default {
  name: 'Blogs',
  components: {
    Contact,
    BlogCards,
  },
  data: function(){
    return {
      serchName: '',
      categories: '',
      selectedCategory: '',
      category: '',
    }
  },
  methods: {
    updateCategories(categories){
      this.categories = categories;
      console.log(this.categories);
    },
    sortArticles: function(index){
      this.serchName = ''; //カテゴー選択で検索窓の文字リセット
      this.categories.map(function(a){
        a.isActive = false;
      });
      this.selectedCategory = this.categories[index].name;
      this.categories[index].isActive = !this.categories[index].isActive;
    },
    resetSort: function(){
      this.categories.map(function(a){
        a.isActive = false;
      });
      this.selectedCategory = this.categories[0].name;
      this.categories[0].isActive = true;
    }
  }
}
</script>

<style scoped lang="scss">
  
//mixin
@import '../../scss/mixin/container';
// @import '../scss/mixin/title-bar';
// @import '../scss/mixin/btn';
// @import '../scss/mixin/sectionTitle';
// @import '../scss/mixin/contactBtn';


$blue:#64D5FF;
$purple:#8400B5;
$grey-back:#F4F4F4;
$black-font:#333333;
$grey-font:#A0A0A0;


.container{
  @include _container;
  background-color: $grey-back;
  padding: 35px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.article-area{
  width: 75%;
  max-width: 750px;
}


.side-bar{
  max-width: 240px;
  &__item{
    margin-bottom:24px;
  }
  &__title{
    font-size: 1.8rem;
    font-weight: bold;
    background-color: $blue;
    padding: 8px;
    border-radius: 6px;
    margin-bottom: 8px;
  }
  &__serch{
    border:1px rgb(211, 211, 211) solid;
    padding: 8px;
    width: 100%;
    font-size: 1.6em;
  }
  &__category{
    font-size: 1.6rem;
    padding: 16px;
    border-bottom: 1px rgb(211, 211, 211) solid;
    position: relative;
    // &::after{
    //   content:'';
    //   height:10px;
    //   width: 10px;
    //   position: absolute;
    //   right:8px;
    //   border-top: #A0A0A0 1px solid;
    //   border-right: #A0A0A0 1px solid;
    //   transform: rotate(45deg);
    // }
  }
  .active{
    transition: .5s;
    font-weight: bold;
    background-color: rgb(212, 234, 255);
  }
}


@media (max-width:750px){
  .container{
    padding: 16px;
    flex-direction: column-reverse;
  }
  .side-bar{
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: none;
    &__category{
      padding: 8px 16px;
    }
  }
  .serch-area{
    width: 48%;
  }
  .category-area{
    width: 48%;
  }
  .article-area{
    width: 100%;
  }
  /deep/ .blogs{
    &__item{
      width: 288px;
      height: 272px;
    }
  }
}

@media (max-width:650px){
  /deep/ .blogs{
    &__item{
      width: 90vw;
      height: calc(90vw * 272 / 288);
    }
  }
}

@media (max-width:500px){
  .container{
    width: 100%;
    padding: 8px;
  }
  .side-bar{
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: none;
    &__category{
      padding: 8px;
    }
  }
  .serch-area{
    width: 56%;
  }
  .category-area{
    width: 43%;
  }
  /deep/ .blogs{
    &__img{
      height: 70%;
    }
  }
}

</style>
