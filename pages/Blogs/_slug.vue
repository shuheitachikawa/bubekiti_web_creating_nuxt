<template>
  <div class="blogs-page">
    <div class="container">
      <div class="article-area">
        
        <p class="article-date">{{date}}</p>        
        <h1 class="article-title">{{title}}</h1>
        <div class="eyecatch">
          <img v-bind:src="image" alt="">
          <p class="category">{{category}}</p>        
        </div>
        <div class="blog__content">
          <p class="intro-comment">本記事の対象者</p>
          <div class="blog__intro" v-html="intro"></div>   
          <div class="blog__text" v-html="text"></div>   
        </div>       
      </div>
      <aside clsss='aside-o'>
        <BlogAside/>
      </aside>
    </div>
    <Contact/>
  </div>
</template>

<script>

// @ is an alias to /src
import Contact from '@/components/Contact.vue'
import BlogAside from '@/components/BlogAside.vue'

import axios from 'axios';

export default {

  data(){
    return{
      title: null,
      date: null,
      image: null,
      category: null,
      intro: null,
      text: null
    };
  },
  async asyncData({params}){
    const{data} = await axios.get(
      `https://bubekiti.microcms.io/api/v1/blog?filters=id[equals]${params.slug}`,
      {
        headers: {'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'}
      }
    );
    return{
      title: data.contents[0].title,
      date:  data.contents[0].updatedAt.substr(0, 10),
      image: data.contents[0].eyecatch.url,
      text: data.contents[0].content,
      category: data.contents[0].category,
      intro: data.contents[0].intro.intro,
    };
  },
  head () {
    return {
      title: this.title,
      meta: [
        //{ name: 'description', content: this.text },

        //{ property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        //{ property: 'og:description', content: '神奈川県秦野市を拠点に活動しているWeb制作フリーランス(SOHO)です。神奈川・東京を中心にWeb制作業務(ホームページ制作 / HTMLコーディング / レスポンシブデザイン / CMS構築)を承っております。' },
        //{ property: 'og:url', content: 'https://bubekiti.com' },
        //{ property: 'og:site_name', content: 'Bubekiti Web creating' },
        { property: 'og:image', content: this.image },

        //{ property: 'fb:app_id', content: '591933487923354' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@bubekiti' },
        { name: 'twitter:domain', content: 'bubekiti.com' },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: '神奈川県秦野市を拠点に活動しているWeb制作フリーランス(SOHO)です。神奈川・東京を中心にWeb制作業務(ホームページ制作 / HTMLコーディング / レスポンシブデザイン / CMS構築)を承っております。' },
        { property: 'twitter:image', content: this.image },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  
//mixin
@import '../../scss/mixin/container';

$blue:#64D5FF;
$purple:#8400B5;
$grey-back:#F4F4F4;
$black-font:#333333;
$grey-font:#A0A0A0;

.blogs-page{
  background-color: $grey-back;
  padding-top: 16px;
}

.article-date{
  font-size: 1.2rem;
  font-weight: bold;
}

.article-title{
  font-size: 2.4rem;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 24px;
  line-height: 4rem;
}

.eyecatch{
  margin-top: 16px;
  position: relative;
}

.category{
  font-size: 1.2rem;
  padding: 8px;
  position: absolute;
  top:0;
  left:0;
  color:white;
  background-color: $purple;
}

.blog__content{
  margin-top: 24px;
  margin-bottom: 80px;
  font-size: 1.6rem;
  padding: 0 16px;
}
.intro-comment{
  margin-top: 30px;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 1.7rem;
}
.blog__intro{
  font-size: 1.7rem;
  line-height: 3.4rem;
  border:1px dashed $purple;
  padding: 16px;
  margin-bottom: 30px;
    /deep/ li{
    line-height: 3.4rem;
    &::before{
      content:"・ ";
      color:$purple;
      font-weight: 600;
    }
  }
}
.blog__text{
  overflow: scroll;
  /deep/ h2{
    font-size: 2.5rem;
    padding:20px 40px 18px;
    border-left:9px solid $purple;
    margin: 30px 0;
  }
  /deep/ h3{
    font-size: 2rem;
    border-left:9px solid $purple;
    font-weight: 300;
    padding:0 15px;
    font-weight: 600;
    margin: 30px 0;
  }
  /deep/ p, a{
    font-size: 1.7rem;
    line-height: 3.4rem;
  }
  /deep/ li{
    font-size: 1.7rem;
    line-height: 3.4rem;
  }

  /deep/ ul{
    list-style: none;
    margin: 30px 0;
  }
  /deep/ li{
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
  max-width: 1050px;
  background-color: white;
  padding: 35px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.article-area{
  width: 750px;
}
.aside-o{
  width: 170px;
}


/deep/ pre{
  display: inline-block;
  background-color: #333333;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 0;
  margin: 0;
  overflow: auto;
  word-wrap: normal;
  width: 90vw;
  max-width:710px;
  code{
    color:#ffffff;
    background-color: #333333;
    margin: 0;
  }
}

/deep/ code{
  color:$purple;
  background:#fbeeff;
  padding-right: 3px;
  padding-left: 3px;
  margin-right: 3px;
  margin-left: 3px;
}


@media (max-width:1000px){
  .intro-comment{
    font-size: 18px;
  }
  .blog__intro{
    font-size: 15px;
    line-height: 30px;
    /deep/ li{
      line-height: 4rem;
    }
  }
  .blog__text{
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
    width: 95%;
    padding: 16px 0;
  }
  .article{
    &-title, &-date{
      text-align: center;
    }
  }
  .blog__content{
    padding: 8px;
  }
}


</style>
