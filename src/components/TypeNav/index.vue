<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- 商品分類導航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 事件委派 -->
      <div @mouseleave="leaveIndex">
        <h2 class="all">全部商品分類</h2>
        <!-- 三級連動 -->
        <div class="sort">
          <div class="all-sort-list2">
            <!-- 一級分類 -->
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a href="">{{ c1.categoryName }}</a>
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
                      <a href="">{{ c2.categoryName }}</a>
                    </dt>
                    <!-- 三級分類 -->
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a href="">{{ c3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      // 存放客戶的滑鼠放置於哪個項目導航上,-1代表都沒碰到
      currentIndex: -1,
    };
  },
  // 當組件掛載完畢就可以發請求
  mounted() {
    // 通知Vuex發送請求,獲取數據,存儲於倉庫中
    this.$store.dispatch("categoryList");
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
    changeIndex(index) {
      // index為某一個鼠標進入的數據
      this.currentIndex = index;
    },
    // 鼠標離開修改響應式數據currentIndex
    leaveIndex() {
      this.currentIndex = -1;
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
  }
}
</style>
