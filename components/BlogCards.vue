<template>

  <div class="blogs__list">

    <!-- <p>{{selecCategory}}</p> -->

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

</template>

<script>

//import Blogs from '@/views/Blogs.vue'

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
  return categoriesObj;
};

//選択したカテゴリーから、同じカテゴリーの記事の配列を生成
var filterByCategory = function(articles, category){
  articles = articles.filter(function(article){
    return article.category === category;
  })
  return articles;
}


  export default {
    name: 'BlogCards',
    Conponents: {
     // Blogs
    },
    props: {
      serchName: {
        type: String,
        //default: "",
        //required: false,
        //validator:
      },
      selecCategory: {
        type: String,
      }
    },
    data: function(){
      return {
        articles: null,
        allArticles: null,
        categories: [],
        Null: false
      };
    },
    created: function(){
      this.fetchArticles();
    },
    watch: {
      'serchName': 'serchArticle',
      'selecCategory' : 'sortArticle'
    },
    methods: {
      fetchArticles: function(){
        fetch('https://bubekiti.microcms.io/api/v1/blog', {
          headers: {
            'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'
          },
        })
        .then(res => res.json())
        .then(json => {
          //ページによって表示数変更
          if(this.$route.path === '/'){
            this.articles = json.contents.slice(0, 3);
          }else{
            this.articles = json.contents;
            this.allArticles = this.articles;
            this.categories = getCategory(this.articles);
            this.categories.unshift({
              name: '全て',
              isActive: true
            });
            this.$emit('parentCategories', this.categories);
          }
        });
      },
      serchArticle: function(){
        this.Null = false;
        this.articles = this.allArticles;
        this.articles = filterByName(this.articles, this.serchName);
        console.log(this.articles)
        if(this.articles.length === 0){
          this.Null = true;
        }
      },
      sortArticle: function(){
        this.articles = this.allArticles;
        if(this.selecCategory !== this.categories[0].name){
          this.articles = filterByCategory(this.articles, this.selecCategory);
        }
      }
    },
  };
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
    height: 306px;
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
    //height: 70%;
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


// @media (max-width:1200px){ 
//   .blogs{
//     &__list{
//       justify-content: space-around;
//     }
//     &__item{
//       width: 288px;
//       min-height: 272px;
//       &--time{
//         margin-top: 8px;
//       }
//     }
//   }
// }
@media (max-width:1050px){ 
  .blogs{
    &__list{
      justify-content: space-around;
    }
    &__item{
      width: 230px;
      height: 240px;
      min-height: 200px;
    }
  }
}

</style>
