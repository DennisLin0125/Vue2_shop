<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!--列表-->
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
        <!--banner輪播-->
        <div class="swiper-container" ref="mySwiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(carousel) in bannerList"
              :key="carousel.id"
            >
              <img :src="carousel.imgUrl" />
            </div>
          </div>
          <!-- 如果需要分頁器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要導航按鈕 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="fl">尚品匯快報</em>
            <span class="fr tip">更多 ></span>
          </h4>
          <div class="clearix"></div>
          <ul class="news-list unstyled">
            <li><span class="bold">[特惠]</span>備戰開學季 全民半價購數碼</li>
            <li><span class="bold">[公告]</span>備戰開學季 全民半價購數碼</li>
            <li><span class="bold">[特惠]</span>備戰開學季 全民半價購數碼</li>
            <li><span class="bold">[公告]</span>備戰開學季 全民半價購數碼</li>
            <li><span class="bold">[特惠]</span>備戰開學季 全民半價購數碼</li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">話費</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">機票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">電影票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">遊戲</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">彩票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">加油站</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">飯店</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">火車票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">眾籌</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">理財</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">禮品卡</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">白條</span>
          </li>
        </ul>
        <div class="ads">
          <img src="./images/ad1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import swiper from "swiper";

export default {
  name: "ListContainer",
  // 當組件掛載後發請求
  mounted() {
    // 派發action 通知vuex發送ajax 將數據存在倉庫
    this.$store.dispatch("getBannerList");
  },
  computed: {
    // 右側需要的是一個函數,當使用計算屬性的時候,這個函數會執行一次
    // state就是大倉庫中的數據
    ...mapState({ bannerList: (state) => state.homeStore.bannerList }),
  },
  watch: {
    // 監聽bannerList數組的變化
    bannerList: {
      handler() {
        // 等頁面組件全部掛載後會執行$nextTick
        this.$nextTick(() => {
          let mySwiper = new swiper(this.$refs.mySwiper, {
            // direction: 'vertical',
            mousewheel: true,
            loop: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style scoped lang="less">
.list-container {
  width: 1200px;
  margin: 0 auto;

  .sortList {
    height: 464px;
    padding-left: 210px;

    .center {
      box-sizing: border-box;
      width: 740px;
      height: 100%;
      padding: 5px;
      float: left;
    }

    .right {
      float: left;
      width: 250px;

      .news {
        border: 1px solid #e4e4e4;
        margin-top: 5px;

        h4 {
          border-bottom: 1px solid #e4e4e4;
          padding: 5px 10px;
          margin: 5px 5px 0;
          line-height: 22px;
          overflow: hidden;
          font-size: 14px;

          .fl {
            float: left;
          }

          .fr {
            float: right;
            font-size: 12px;
            font-weight: 400;
          }
        }

        .news-list {
          padding: 5px 15px;
          line-height: 26px;

          .bold {
            font-weight: 700;
          }
        }
      }

      .lifeservices {
        border-right: 1px solid #e4e4e4;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;

        .life-item {
          border-left: 1px solid #e4e4e4;
          border-bottom: 1px solid #e4e4e4;
          margin-right: -1px;
          height: 64px;
          text-align: center;
          position: relative;
          cursor: pointer;
          width: 25%;

          .list-item {
            background-image: url(~@/assets/images/icons.png);
            width: 61px;
            height: 40px;
            display: block;
          }

          .service-intro {
            line-height: 22px;
            width: 60px;
            display: block;
          }

          &:nth-child(1) {
            .list-item {
              background-position: 0px -5px;
            }
          }

          &:nth-child(2) {
            .list-item {
              background-position: -62px -5px;
            }
          }

          &:nth-child(3) {
            .list-item {
              background-position: -126px -5px;
            }
          }

          &:nth-child(4) {
            .list-item {
              background-position: -190px -5px;
            }
          }

          &:nth-child(5) {
            .list-item {
              background-position: 0px -76px;
            }
          }

          &:nth-child(6) {
            .list-item {
              background-position: -62px -76px;
            }
          }

          &:nth-child(7) {
            .list-item {
              background-position: -126px -76px;
            }
          }

          &:nth-child(8) {
            .list-item {
              background-position: -190px -76px;
            }
          }

          &:nth-child(9) {
            .list-item {
              background-position: 0px -146px;
            }
          }

          &:nth-child(10) {
            .list-item {
              background-position: -62px -146px;
            }
          }

          &:nth-child(11) {
            .list-item {
              background-position: -126px -146px;
            }
          }

          &:nth-child(12) {
            .list-item {
              background-position: -190px -146px;
            }
          }
        }
      }

      .ads {
        margin-top: 5px;

        img {
          opacity: 0.8;
          transition: all 400ms;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
