<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        註冊新用戶
        <span class="go"
          >我有帳號，去 <a href="login.html" target="_blank">登陸</a>
        </span>
      </h3>
      <div class="content">
        <label>手機號碼:</label>
        <input type="text" placeholder="請輸入你的手機號碼" />
        <span class="error-msg">錯誤提示訊息</span>
      </div>
      <div class="content">
        <label>驗證碼:</label>
        <input type="text" placeholder="請輸入驗證碼" />
        <img
          ref="code"
          src="http://182.92.128.115/api/user/passport/code"
          alt="code"
        />
        <span class="error-msg">錯誤提示訊息</span>
      </div>
      <div class="content">
        <label>登入密碼:</label>
        <input type="text" placeholder="請輸入你的登入密碼" />
        <span class="error-msg">錯誤提示訊息</span>
      </div>
      <div class="content">
        <label>確認密碼:</label>
        <input type="text" placeholder="請輸入確認密碼" />
        <span class="error-msg">錯誤提示訊息</span>
      </div>
      <div class="controls">
        <input name="m1" type="checkbox" />
        <span>同意協議並註冊《尚品匯用戶協議》</span>
        <span class="error-msg">錯誤提示訊息</span>
      </div>
      <div class="btn">
        <button>完成註冊</button>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>關於我們</li>
        <li>聯絡我們</li>
        <li>聯絡客服</li>
        <li>商家進駐</li>
        <li>行銷中心</li>
        <li>手機尚品匯</li>
        <li>銷售聯盟</li>
        <li>尚品匯社區</li>
      </ul>
      <div class="address">地址：北京市昌平區宏福科技園綜合大樓6層</div>
      <div class="beian">京ICP備19006430號</div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>
