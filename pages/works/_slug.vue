<template>
  <div class="workDetail">
    <div class="works-single">
      <h2 class="works-single__title">{{title}}</h2>
      <div class="works-single__pcimg">
        <img class="pcimg" src="../../assets/work.png" alt="">
        <div class="works-single__img">
          <img v-bind:src="image" alt="">
        </div>
      </div>
      <a v-bind:href="url" target="blank" class="works-single__visit">
        サイトを見る
      </a>
      <div class="works-single__txtarea">
        <table class="works-single__table table-1">
          <tbody>
            <tr>
              <td valign="middle"  class="works-single__table-title">公開日</td>
              <td valign="middle" >{{date}}</td>
            </tr>
            <tr>
              <td valign="middle"  class="works-single__table-title">制作内容</td>
              <td v-html="work" valign="middle" class="works-single__table-work"></td>
            </tr>
          </tbody>
        </table>
        <table class="works-single__table table-2">
          <tbody>
            <tr>
              <td valign="middle"  class="works-single__table-title">ページ数</td>
              <td valign="middle" >{{page}}</td>
            </tr>
            <tr>
              <td valign="middle"  class="works-single__table-title">制作期間</td>
              <td valign="middle" >{{span}}</td>
            </tr>
          </tbody>
        </table>
        <div v-html="text" class="works-single__text">
          
        </div>
      </div>
      <div class="works-single__link">
        <router-link to="/works" class="works-single__btn">
          制作実績一覧へ
        </router-link>
      </div>
    </div>
    <Contact/>
  </div>
</template>

<script>

var filterArticle = function(articles, articleId){
  articles = articles.filter(function(article){
    return article.id === articleId;
  })
  return articles;
};

// @ is an alias to /src
import Contact from '@/components/Contact.vue'

import axios from 'axios';

export default {

  data(){
    return{
      title: null,
      image: null,
      url: null,
      date: null,
      work: null,
      page: null,
      span: null,
      text: null
    };
  },
  async asyncData({params}){
    const{data} = await axios.get(
      `https://bubekiti.microcms.io/api/v1/works?filters=id[equals]${params.slug}`,
      {
        
        headers: {'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371'}
      }
    );
    return{
      title: data.contents[0].title,
      image: data.contents[0].eyecatch.url + '?fm=webp&w=400',
      url: data.contents[0].url,
      date: data.contents[0].date,
      work: data.contents[0].work.replace(/\n/g, '<br/>'),
      page: data.contents[0].page,
      span: data.contents[0].span,
      text: data.contents[0].text
    };
  }
}

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

.workDetail{
  background-color: $grey-back; 
  padding-top: 16px;
}

.works-single{
  @include _container;
  background-color: white;
  text-align: center;
  position: relative;
  padding: 35px;
  &__title{
    font-size: 2.4rem;
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: bold;
  }
  &__img{
    width:500px;
    margin:0 auto;
  }
  &__txtarea{
    margin-top: 80px;
    width: 100%;
    max-width: 732px;
    margin:0 auto;
    text-align: left;
    font-size: 1.6rem;
    line-height: 1.7;
    padding:32px;
  }
  &__text{
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
  &__link{
    margin: 48px auto 80px;
    //width: 732px;
    text-align: center;
  }
  &__btn{
    @include _btn;
    width: 80%;
    max-width: 300px;
    //min-width: 150px
  }
  &__other{
    margin-top: 160px;
  }
  &__list--title{
    @include _sectionTitle('CURRENT WORKS');
    &:after{
      @include _title-bar;
      position: relative;
      left:50%;
      transform: translate(-50%, 0);
    }
  }
  &__list{
    margin-top: 40px;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
  }
  &__item{
    margin:0 16px;
    height: 140px;
    width: 265px;
    position: relative;
    box-shadow: 1px 1px 2px #9c9c9c;
    transition: .3s;
    &:hover{
      box-shadow: none;
      top:-3px;
    }
    &-name{
      margin-top: 8px;
      font-size: 1.3em;
    }
  }
  &__visit{
    @include _btn;
    background-color: $purple;
    margin-top: 40px;
    width: 240px;
  } 
  &__pcimg{
    margin: 0 auto;
    width: 90%;
    max-width: 500px;
    position: relative;
  }
  &__img{
    position: absolute;
    left:1.6%;
    top:1.8%;
    width: 97%;
    height: 74%;
    overflow-y: scroll;
    z-index: 0;
  }
  &__table{
    display: inline-block;
    width: 50%;
    margin: 40px 0;
    tr{
      height:64px;
      width: 100%;
      td{
        width: 1%;
        line-height: 6.4rem;
        border:1px solid $grey-font;
        padding-left: 8px;
        font-size: 1.6rem;
        &.works-single__table-work{
          line-height: 3rem;
        }
      }
    }
    &-title{
      background-color: $grey-back;
      font-weight: bold;
    }
  }
}


@media (max-width:1000px){
  .works-single__table{
    tr{
      td{
        font-size: 14px;
      }
    }
  }
  .works-single__text{
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


@media (max-width:750px){
  .works-single{
    &__txtarea{
      padding: 0;
    }
  }
}

@media (max-width:600px){
  .works-single{
    padding: 8px;
  }
}

@media (max-width:500px){
  .works-single{
    &__table{
      display: block;
      width: 100%;
      margin: 0;
      tr{
        height: 30px;
      }
    }
  }
  .table-1{
    margin-top: 40px;
  }
  .table-2{
    margin-bottom: 40px;
  }
}

</style>
