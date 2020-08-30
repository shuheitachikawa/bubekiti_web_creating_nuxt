<template>
  <div class="blogs-page">
    <div class="container">
      <div class="article-area">
        <!-- <BlogCards v-bind:serch-name='serchName' v-bind:selec-category ='selectedCategory' v-on:parentCategories='updateCategories'></BlogCards> -->
      <div class="blogs__list">
        <article v-for="article in articles" v-bind:key="article.id" class="blogs__item">
          <nuxt-link v-bind:to="{path: `/blogs/${article.id}`}">
            <div class="blogs__img">
              <img v-bind:src="article.eyecatch.url" alt="">
              <p class="blogs__category">{{article.category}}</p>
            </div>
            <div class="blogs__txtarea">
              <h3 class="blogs__item--title">{{article.title}}</h3>
              <time class="blogs__item--time"><span class="far fa-calendar-plus"></span><p>{{article.updatedAt.substr(0, 10)}}</p></time>
            </div>
          </nuxt-link>
        </article>
        <p v-show="Null" class="article-null">当てはまる記事がありません。</p>
      </div>

      </div>
      <aside>
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
import Contact from '@/components/Contact.vue'
import BlogCards from '@/components/BlogCards.vue'
import BlogAside from '@/components/BlogAside.vue'



//検索窓に入った文字を含む配列を抽出
var filterByName = function(articles, serchedName){
  articles = articles.filter(function(article){
    return article.title.toUpperCase().includes(serchedName.toUpperCase());
  })
    return articles;
};

//記事のカテゴリーを読み込んで、カテゴリーのみの配列を生成
var getCategory = function(articles){
  var categories = [];
  var categoriesObj = [];
  for(var i=0; i < articles.length; ++i){
    categories.push(articles[i].category);
  }
  categories = categories.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });
  for(var j=0;j < categories.length;j++){
    categoriesObj.push({
      name: categories[j],
      isActive: false
    })
  }
  categoriesObj.unshift({
    name: '全て',
    isActive: true
  });
  return categoriesObj;
};

//選択したカテゴリーから、同じカテゴリーの記事の配列を生成
var filterByCategory = function(articles, category){
  articles = articles.filter(function(article){
    return article.category === category;
  })
  return articles;
}



import axios from 'axios';

export default {
  data(){
    return{
      articles: [],
    };
  },
  async asyncData(){
    const{data} = await axios.get(
      "https://bubekiti.microcms.io/api/v1/blog",
      {
        headers: {'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'}
      }
    );
    return{
      articles: data.contents
    };
  },
  data: function(){
    return{
      //articles: [],
      allArticles: null,
      categories: [],
      Null: false,
      serchName: '',
      categories: '',
      selectedCategory: '',
      category: '',
    }
  },
  created: function(){
    this.setAllArticles();
    this.filterArticles();
  },
  watch: {
    'serchName': 'serchArticle',
  },
  methods:{
    setAllArticles: function(){
      this.allArticles = this.articles;
    },
    filterArticles: function(){
      this.categories = getCategory(this.articles);
    },
    serchArticle: function(){
      this.Null = false;
      this.articles = filterByName(this.articles, this.serchName);
      console.log(this.articles)
      if(this.articles.length === 0){
        this.Null = true;
      }
    },
    sortArticle: function(){
      console.log(this.selectedCategory);
      if(this.selectedCategory !== this.categories[0].name){
        this.articles = filterByCategory(this.articles, this.selectedCategory);
      }
    },
    sortArticles: function(index){
      this.articles = this.allArticles;
      this.serchName = ''; //カテゴー選択で検索窓の文字リセット
      this.categories.map(function(a){
        a.isActive = false;
      });
      this.selectedCategory = this.categories[index].name;
      this.categories[index].isActive = true;
      this.sortArticle();
    },
    resetSort: function(){
      this.articles = this.allArticles;
      this.categories.map(function(a){
        a.isActive = false;
      });
      this.selectedCategory = this.categories[0].name;
      this.categories[0].isActive = true;
    }
  }

};
</script>

<style scoped lang="scss">
//mixin
@import '../../scss/mixin/container';
@import '../../scss/mixin/title-bar';
@import '../../scss/mixin/btn';
@import '../../scss/mixin/sectionTitle';
@import '../../scss/mixin/contactBtn';


$blue:#64D5FF;
$purple:#8400B5;
$grey-back:#F4F4F4;
$black-font:#333333;
$grey-font:#A0A0A0;

.v-enter-active,
.v-leave-active{
  transition: .5s;
}
.v-enter, .v-leave-to{
  opacity:0;
}
.v-enter-to, .v-leave{
  opacity:1;
}

.blogs{
  &__list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transition: .3s;
  }
  &__item{
    width: 324px;
    min-height: 306px;
    background-color: white;
    transition: .3s;
    margin-bottom: 24px;
    &:hover{
      opacity: .7;
    }
    &--title{
      font-size: 1.6rem;
      line-height: 2.5rem;
      font-weight: 550;
    }
    &--time{
      display: block;
      font-size: 1.2rem;
      margin-top: 8px;
      p{
        margin-left: 8px;
        display: inline-block;
        font-weight: bold;
      }
    }
  }
  &__img{
    width: 100%;
    height: 70%;
    overflow: hidden;
    position: relative;
    img{
      height:auto;
      width:100%;
    }
  }
  &__category{
    position: absolute;
    top: 0;
    right:0;
    background-color: $purple;
    color:white;
    font-size: 1.3rem;
    padding: 2px 8px;
    line-height: 2rem;
  }
  &__txtarea{
    padding: 8px;
  }
}

.article-null{
  font-size: 2rem;
  margin: 30px auto 60vh;
}


@media (max-width:1050px){ 
  .blogs{
    &__list{
      justify-content: space-around;
    }
    &__item{
      width: 250px;
      min-height: 200px;
      &--title{
        font-size: 1.6rem;
      }
    }
  }
}


@media (max-width:650px){ 
  .blogs{
    &__item{
      &--title{
        font-size: 2rem;
      }
    }
  }
}










  
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


@media (max-width:1050px){
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
