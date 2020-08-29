<template>
  <div class="service-page">
    <div class="container">
      <div class="article-area">
            
        <h1 class="article-title">{{title}}</h1>
        <div class="eyecatch">
          <img v-bind:src="image" alt="">  
        </div>
        <div class="service__content">
          <div class="service__text" v-html="text"></div>   
        </div>       
      </div>
    </div>
    <div class="service__btn-area">
      <BtnToQuote class="quote-btn"/>
      <div class="service__link-btn">
        <BtnToFlow class="link-btn"/>
        <BtnToQa class="link-btn"/>
      </div>
    </div>
    <Contact/>
  </div>
</template>

<script>

// var filterArticle = function(articles, articleId){
//   articles = articles.filter(function(article){
//     return article.id === articleId;
//   })
//   //console.log(articles);
//   return articles;
// };

// @ is an alias to /src
import Contact from '@/components/Contact.vue'
import BtnToQuote from '@/components/BtnToQuote.vue'
import BtnToQa from '@/components/BtnToQa.vue'
import BtnToFlow from '@/components/BtnToFlow.vue'

import axios from 'axios';

export default {

  data(){
    return{
      title: "",
      image: "",
      text: ""
    };
  },
  async asyncData({params}){
    //console.log(params);
    const{data} = await axios.get(
      `https://bubekiti.microcms.io/api/v1/news?filters=id[equals]${params.slug}`,
      {
        headers: {'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'}
      }
    );
    //filterArticles(data.contents, $route.params.slug);
    console.log(data.contents);
    return{
      title: data.contents[0].title,
      image: data.contents[0].eyecatch.url,
      text: data.contents[0].text
    };
  }



  // name: 'ServiceDetail',
  // components: {
  //   Contact,
  //   BtnToQuote,
  //   BtnToQa,
  //   BtnToFlow,
  // },
  // data: function(){
  //   return {
  //     title: null,
  //     image: null,
  //     text: null
  //   };
  // },
  // created: function(){
  //   this.fetchArticle();
  // },
  // watch:{
  //   '$route': 'fetchArticle'
  // },
  // methods: {
  //   fetchArticle: function(){
  //     fetch('https://bubekiti.microcms.io/api/v1/news', {
  //     headers: {
  //       'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(json => json.contents)
  //     .then(articles => 
  //       filterArticle(articles, this.$route.params.slug)
  //     )
  //     .then(articles => {
  //       this.title = articles[0].title;
  //       this.image = articles[0].eyecatch.url;
  //       this.text = articles[0].text;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  //   },      
  // }
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


.article-title{
  text-align: center;
  font-size: 2.4rem;
  font-weight: bold;
  margin-top: 16px;
}

.eyecatch{
  width: 70%;
  margin: 32px auto 40px;
  position: relative;
}


.service__content{
  margin-top: 16px;
  margin-bottom: 80px;
  font-size: 1.6rem;
  padding: 0;
}

.service__text{
  /deep/ h2{
    font-size: 2.5rem;
    line-height: 5rem;
    padding:20px 40px 18px;
    border-left:9px solid $purple;
    margin: 30px 0;
  }
  /deep/ h3{
    font-size: 2rem;
    line-height: 4rem;
    border-left:9px solid $purple;
    font-weight: 300;
    padding:0 15px;
    font-weight: 600;
    margin: 30px 0;
  }
  /deep/ p{
    line-height: 3.2rem;
  }
  /deep/ ul{
    list-style: none;
    margin: 30px 0;
  }
  /deep/ li{
    line-height: 3.2rem;
    &::before{
      content:"・ ";
      color:$purple;
      font-weight: 600;
    }
  }
  /deep/ a{
    display: inline-block;
    width:auto;
    color:blue;
    font-weight: 600;
    transition: .3s;
    &:hover{
      text-decoration: underline;
    }
  }
}

.container{
  @include _container;
  background-color: white;
  padding: 35px;
  width: 850px;
}
.article-area{
  width: 95%;
  max-width: 750px;
  margin: 0 auto;
}

.service__btn-area{
  text-align: center;
}
/deep/.quote__btn{
  margin: 0 auto;
}
.service__link-btn{
  margin: 48px 0 80px;
  display: flex;
  justify-content: center;
}
.link-btn{
  margin: 0 8px;
  width: 40%;
  max-width: 320px;
}



@media (max-width:1000px){
  .service__text{
    /deep/ h2{
      font-size: 22px;
      padding-left: 24px;
      }
    /deep/ h3{
      font-size: 20px;
    }
    /deep/ p, a{
      font-size: 16px;
      line-height: 32px;
    }
    /deep/ li{
      font-size: 16px;
      line-height: 32px;
    }
  }
}

@media (max-width:650px){
  .container{
    width: 100%;
    padding: 0;
  }
  .article-area{
    width: 100%;
  }
  .service__content{
    padding: 0 16px;
  }
}

</style>
