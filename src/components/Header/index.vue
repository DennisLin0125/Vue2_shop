<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Header -->
  <header class="header">
    <!-- 頭部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品匯歡迎您！</p>
          <p v-if="!userName">
            <span>請</span>
            <!-- 聲明式導航 -->
            <router-link to="/login">登入</router-link>
            <router-link to="/register" class="register">免費註冊</router-link>
          </p>
          <p v-else>
            <a>{{ userName }}</a>
            <a class="register" @click="logout" href="#">退出登入</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center/myorder">我的訂單</router-link>
          <router-link to="/shopcart">我的購物車</router-link>
          <a href="###">我的尚品匯</a>
          <a href="###">尚品匯會員</a>
          <a href="###">企業採購</a>
          <a href="###">關注尚品匯</a>
          <a href="###">合作招商</a>
          <a href="###">商家後台</a>
        </div>
      </div>
    </div>
    <!--頭部第二行 搜尋區域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜尋
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    // 搜索按鈕的回調函數
    goSearch() {
      // 路由傳參
      // 第一種:字串型式
      // this.$router.push("/search/" + this.keyword + '?k=' + this.keyword.toUpperCase());
      // 第二種:模板字串
      // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
      // 第三種:物件
      // 有query參數也要一起帶上
      if (this.$route.query) {
        let location = {
          name: "search",
          params: { keyword: this.keyword || undefined },
        };
        location.query = this.$route.query;
        this.$router.push(location);
      }
    },
    // 登出
    async logout() {
      try {
        // 派發action 登出
        await this.$store.dispatch("userLogout");
        // 跳回首頁
        this.$router.push('/home')
      } catch (error) {
        alert('登出失敗')
      }
    },
  },
  mounted() {
    // 清除關鍵字
    this.$bus.$on("clearKeyword", () => {
      this.keyword = "";
    });
  },
  computed: {
    // 用戶訊息
    userName() {
      return this.$store.state.userStore.userInfo.name;
    },
  },
};
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
