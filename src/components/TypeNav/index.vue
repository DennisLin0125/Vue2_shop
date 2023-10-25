<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- 商品分類導航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 事件委派 -->
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分類</h2>

        <!-- 三級連動 -->
        <!-- 過度動畫 -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <!-- 利用事件委派+編程式導航 -->
            <div class="all-sort-list2" @click="goSearch">
              <!-- 一級分類 -->
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 二級分類 -->
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <!-- 三級分類 -->
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服裝城</a>
        <a href="###">美妝館</a>
        <a href="###">尚品匯超市</a>
        <a href="###">全球購</a>
        <a href="###">閃購</a>
        <a href="###">團購</a>
        <a href="###">有趣</a>
        <a href="###">秒殺</a>
      </nav>
    </div>
  </div>
</template>

<script>
// 引入throttle來節流
import throttle from "lodash/throttle";
import { mapState } from "vuex";

export default {
  name: "TypeNav",
  data() {
    return {
      // 存放客戶的滑鼠放置於哪個項目導航上,-1代表都沒碰到
      currentIndex: -1,
      show: true,
    };
  },
  mounted() {
    // 當組件掛載完畢變為false
    // 如果不是home路由組件,就把TypeNav組件隱藏
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      // 右側需要的是一個函數,當使用計算屬性的時候,這個函數會執行一次
      // state就是大倉庫中的數據
      categoryList: (state) => state.homeStore.categoryList,
    }),
  },
  methods: {
    // 鼠標進入修改響應式數據currentIndex
    // 利用lodash來節流
    changeIndex: throttle(function (index) {
      // index為某一個鼠標進入的數據
      this.currentIndex = index;
    }, 50),
    leaveShow() {
      // 鼠標離開修改響應式數據currentIndex
      this.currentIndex = -1;

      // 在home組件時略過
      if (this.$route.path != "/home") {
        // 當鼠標離開的時候讓項目隱藏
        this.show = false;
      }
    },
    goSearch(event) {
      // 把子節點加上:data-categoryName 來區分是否點到a標籤
      let element = event.target;
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;

      if (categoryname) {
        // 如果是a標籤
        // 整理路由跳轉的參數
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          // 如果是一級分類
          query.category1Id = category1id;
        } else if (category2id) {
          // 如果是二級分類
          query.category2Id = category2id;
        } else if (category3id) {
          // 如果是三級分類
          query.category3Id = category3id;
        }
        
        if (this.$route.params) {
          // 如果路由跳轉的時候,帶有 params 參數,也要一起
          location.params = this.$route.params;
          // 整理完參數
          location.query = query;
          // 跳轉路由
          this.$router.push(location);
        }
      }
    },
    enterShow() {
      // 當鼠標移入的時候讓項目顯示
      this.show = true;
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background: skyblue;
        }
      }
    }
    // 過度動畫的樣式
    // 動畫(開始)
    .sort-enter {
      height: 0px;
    }

    // 動畫(結束)
    .sort-enter-to {
      height: 461px;
    }

    // 定義動畫時間
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
