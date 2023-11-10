<template>
  <div class="pay-main">
    <div class="pay-container">
      <div class="checkout-tit">
        <h4 class="tit-txt">
          <span class="success-icon"></span>
          <span class="success-info">訂單提交成功，請您及時付款，以便盡快為您發貨~~</span>
        </h4>
        <div class="paymark">
          <span class="fl">請您在提交訂單<em class="orange time">4小時</em>之內完成支付，超時訂單會自動取消。 訂單號碼：<em>{{
            $route.query.orderId
          }}</em></span>
          <span class="fr"><em class="lead">應付金額：</em><em class="orange money">￥{{ payInfo.totalFee }}</em></span>
        </div>
      </div>
      <div class="checkout-info">
        <h4>重要說明：</h4>
        <ol>
          <li>
            尚品匯商城支付平台目前支援<span class="zfb">支付寶</span>付款方式。
          </li>
          <li>其它支付管道正在調試中，敬請期待。</li>
          <li>為了確保您的購物支付流程順利完成，請儲存以下支付寶資訊。</li>
        </ol>
        <h4>
          支付寶帳戶資訊：（很重要，<span class="save">請儲存！！！</span>）
        </h4>
        <ul>
          <li>支付帳號：11111111</li>
          <li>密碼：111111</li>
          <li>付款密碼：111111</li>
        </ul>
      </div>
      <div class="checkout-steps">
        <div class="step-tit">
          <h5>支付平台</h5>
        </div>
        <div class="step-cont">
          <ul class="payType">
            <li><img src="./images/pay2.jpg" /></li>
            <li><img src="./images/pay3.jpg" /></li>
          </ul>
        </div>
        <div class="hr"></div>

        <div class="payshipInfo">
          <div class="step-tit">
            <h5>支付網路銀行</h5>
          </div>
          <div class="step-cont">
            <ul class="payType">
              <li><img src="./images/pay10.jpg" /></li>
              <li><img src="./images/pay11.jpg" /></li>
              <li><img src="./images/pay12.jpg" /></li>
              <li><img src="./images/pay13.jpg" /></li>
              <li><img src="./images/pay14.jpg" /></li>
              <li><img src="./images/pay15.jpg" /></li>
              <li><img src="./images/pay16.jpg" /></li>
              <li><img src="./images/pay17.jpg" /></li>
              <li><img src="./images/pay18.jpg" /></li>
              <li><img src="./images/pay19.jpg" /></li>
              <li><img src="./images/pay20.jpg" /></li>
              <li><img src="./images/pay21.jpg" /></li>
              <li><img src="./images/pay22.jpg" /></li>
            </ul>
          </div>
        </div>
        <div class="hr"></div>

        <div class="submit">
          <a type="text" class="btn" @click="open">立即支付</a>
        </div>
        <div class="otherpay">
          <div class="step-tit">
            <h5>其他付款方式</h5>
          </div>
          <div class="step-cont">
            <span><a href="weixinpay.html" target="_blank">微信付款</a></span>
            <span>中國銀聯</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pay",
  data() {
    return {
      payInfo: {},
      timer: null,
      code: "",
    };
  },
  mounted() {
    this.getPayInfo();
  },
  methods: {
    async getPayInfo() {
      try {
        let result = await this.$API.reqPaymentInfo(this.$route.query.orderId);
        if (result.code == 200) {
          this.payInfo = result.data;
        }
      } catch (error) {
        alert(error.message);
      }
    },
    async open() {
      try {
        // 生成一個QRcode
        let url = await QRCode.toDataURL(this.payInfo.codeUrl);
        this.$alert(`<img src=${url} />`, "請掃描支付", {
          dangerouslyUseHTMLString: true,
          center: true,
          showCancelButton: true,
          cancelButtonText: "付款有問題",
          confirmButtonText: "已付款成功",
          showClose: false,
          beforeClose: (type, instance, done) => {
            if (type == 'cancel') {
              alert('請聯絡管理員')
              clearInterval(this.timer);
              this.timer = null;
              done();
            } else {
              // if (this.code == 200) {
                clearInterval(this.timer);
                this.timer = null;
                // 關閉彈出框
                done();
                // 跳轉下一個路由
                this.$router.push("/paysuccess");
              // }
            }
          },
        });
        // 偷懶
        // setTimeout(async () => {
        //   await this.$API.reqPayStatus(this.$route.query.orderId);
        //   // 關閉彈出框
        //   this.$msgbox.close();
        //   // 跳轉下一個路由
        //   this.$router.push("/paysuccess");
        // }, 10000)
        // 標準寫法
        if (!this.timer) {
          this.timer = setInterval(async () => {
            let result = await this.$API.reqPayStatus(this.$route.query.orderId);
            if (result.code == 200) {
              clearInterval(this.timer);
              this.timer = null;
              this.code = result.code;
              // 關閉彈出框
              this.$msgbox.close();
              // 跳轉下一個路由
              this.$router.push("/paysuccess");
            }
          }, 1000);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.pay-main {
  margin-bottom: 20px;

  .pay-container {
    margin: 0 auto;
    width: 1200px;

    a:hover {
      color: #4cb9fc;
    }

    .orange {
      color: #e1251b;
    }

    .money {
      font-size: 18px;
    }

    .zfb {
      color: #e1251b;
      font-weight: 700;
    }

    .checkout-tit {
      padding: 10px;

      .tit-txt {
        font-size: 14px;
        line-height: 21px;

        .success-icon {
          width: 30px;
          height: 30px;
          display: inline-block;
          background: url(./images/icon.png) no-repeat 0 0;
        }

        .success-info {
          padding: 0 8px;
          line-height: 30px;
          vertical-align: top;
        }
      }

      .paymark {
        overflow: hidden;
        line-height: 26px;
        text-indent: 38px;

        .fl {
          float: left;
        }

        .fr {
          float: right;

          .lead {
            margin-bottom: 18px;
            font-size: 15px;
            font-weight: 400;
            line-height: 22.5px;
          }
        }
      }
    }

    .checkout-info {
      padding-left: 25px;
      padding-bottom: 15px;
      margin-bottom: 10px;
      border: 2px solid #e1251b;

      h4 {
        margin: 9px 0;
        font-size: 14px;
        line-height: 21px;
        color: #e1251b;
      }

      ol {
        padding-left: 25px;
        list-style-type: decimal;
        line-height: 24px;
        font-size: 14px;
      }

      ul {
        padding-left: 25px;
        list-style-type: disc;
        line-height: 24px;
        font-size: 14px;
      }
    }

    .checkout-steps {
      border: 1px solid #ddd;
      padding: 25px;

      .hr {
        height: 1px;
        background-color: #ddd;
      }

      .step-tit {
        line-height: 36px;
        margin: 15px 0;
      }

      .step-cont {
        margin: 0 10px 12px 20px;

        ul {
          font-size: 0;

          li {
            margin: 2px;
            display: inline-block;
            padding: 5px 20px;
            border: 1px solid #ddd;
            cursor: pointer;
            line-height: 18px;
          }
        }
      }
    }

    .submit {
      text-align: center;

      .btn {
        display: inline-block;
        padding: 15px 45px;
        margin: 15px 0 10px;
        font: 18px "微软雅黑";
        font-weight: 700;
        border-radius: 0;
        background-color: #e1251b;
        border: 1px solid #e1251b;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        text-decoration: none;
      }
    }
  }
}
</style>
