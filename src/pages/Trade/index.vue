<template>
  <div class="trade-container">
    <h3 class="title">填寫並核對訂單資訊</h3>
    <div class="content">
      <h5 class="receive">收件人資訊</h5>
      <div
        class="address clearFix"
        v-for="addressInfo in userAddress"
        :key="addressInfo.id"
      >
        <span
          class="username"
          :class="{ selected: addressInfo.isDefault == 1 }"
          >{{ addressInfo.consignee }}</span
        >
        <p @click="changeDefault(addressInfo, userAddress)">
          <span class="s1">{{ addressInfo.userAddress }}</span>
          <span class="s2">{{ addressInfo.phoneNum }}</span>
          <span class="s3" v-show="addressInfo.isDefault == 1">預設位址</span>
        </p>
      </div>
      <div class="line"></div>
      <h5 class="pay">付款方式</h5>
      <div class="address clearFix">
        <span class="username selected">線上付款</span>
        <span class="username" style="margin-left: 5px">貨到付款</span>
      </div>
      <div class="line"></div>
      <h5 class="pay">送貨清單</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">天天快遞</span>
          <p>配送時間：預計8月10日（週三）09:00-15:00送達</p>
        </div>
      </div>
      <div class="detail">
        <h5>商品清單</h5>
        <ul
          class="list clearFix"
          v-for="detail in orderInfo.detailArrayList"
          :key="detail.skuId"
        >
          <li>
            <img :src="detail.imgUrl" height="82px" width="82px" />
          </li>
          <li>
            <p style="text-align: left">{{ detail.skuName }}</p>
            <h4>7天無理由退貨</h4>
          </li>
          <li>
            <h3>￥{{ detail.orderPrice }}.00</h3>
          </li>
          <li>X{{ detail.skuNum }}</li>
          <li>有貨</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>買家留言：</h5>
        <textarea
          placeholder="建議留言前先與商家溝通確認"
          class="remarks-cont"
          v-model="msg"
        ></textarea>
      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>發票資訊：</h5>
        <div>普通發票（電子） 個人 明細</div>
        <h5>使用優惠/抵用</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b
            ><i>{{ orderInfo.totalNum }}</i
            >件商品，總商品金額</b
          >
          <span>¥{{ orderInfo.totalAmount }}</span>
        </li>
        <li>
          <b>返現：</b>
          <span>0.00</span>
        </li>
        <li>
          <b>運費：</b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">
        應付金額:　<span>¥{{ orderInfo.totalAmount }}</span>
      </div>
      <div class="receiveInfo">
        寄送至:
        <span>{{ userDefaultAddress.fullAddress }}</span>
        收貨人：<span>{{ userDefaultAddress.consignee }}</span>
        <span>{{ userDefaultAddress.phoneNum }}</span>
      </div>
    </div>
    <div class="sub clearFix">
      <a class="subBtn" @click="submitOrder">提交訂單</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Trade",
  data() {
    return {
      msg: "",
      // 訂單號碼
      orderId: "",
    };
  },
  mounted() {
    this.$store.dispatch("getUserAddress");
    this.$store.dispatch("getOrderInfo");
  },
  computed: {
    ...mapState({
      userAddress: (state) => state.addressInfoStore.userAddress,
      orderInfo: (state) => state.addressInfoStore.orderInfo,
    }),
    // 將來提交訂單默認選中的地址
    userDefaultAddress() {
      // find:查找陣列中符合條件的元素
      return this.userAddress.find((item) => item.isDefault == 1) || {};
    },
  },
  methods: {
    // 修改默認地址  (排他)
    changeDefault(addressInfo, userAddress) {
      // 先將全部的isDefault清為0
      userAddress.forEach((item) => (item.isDefault = 0));
      // 滑鼠點到的才為1
      addressInfo.isDefault = 1;
    },
    // 提交訂單
    async submitOrder() {
      // 需要參數
      let { tradeNo } = this.orderInfo;
      // 其餘6個參數
      let data = {
        consignee: this.userDefaultAddress.consignee,
        consigneeTel: this.userDefaultAddress.phoneNum,
        deliveryAddress: this.userDefaultAddress.fullAddress,
        paymentWay: "ONLINE",
        orderComment: this.msg,
        orderDetailList: this.orderInfo.detailArrayList,
      };
      // 發送請求

      let result = await this.$API.reqSubmitOrder(tradeNo, data);
      if (result.code == 200) {
        this.orderId = result.data;
        // 路由跳轉
        this.$router.push(`/pay?orderId=${this.orderId}`);
      }else{
        alert(result.message)
      }
    },
  },
};
</script>

<style lang="less" scoped>
.trade-container {
  .title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
  }

  .content {
    width: 1200px;
    margin: 10px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 25px;
    box-sizing: border-box;

    .receive,
    .pay {
      line-height: 36px;
      margin: 18px 0;
    }

    .address {
      padding-left: 20px;
      margin-bottom: 15px;

      .username {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        position: relative;
      }

      .username::after {
        content: "";
        display: none;
        width: 13px;
        height: 13px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(./images/choosed.png) no-repeat;
      }

      .username.selected {
        border-color: #e1251b;
      }

      .username.selected::after {
        display: block;
      }

      p {
        width: 610px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;
        }

        .s2 {
          float: left;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 56px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      height: 1px;
      background-color: #ddd;
    }

    .way {
      width: 1080px;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
      }

      .info {
        margin-top: 20px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 1080px;

      background: #feedef;
      padding: 15px;
      margin: 2px auto 0;

      h5 {
        line-height: 50px;
      }

      .list {
        display: flex;
        justify-content: space-between;

        li {
          line-height: 30px;

          p {
            margin-bottom: 20px;
          }

          h4 {
            color: #c81623;
            font-weight: 400;
          }

          h3 {
            color: #e12228;
          }
        }
      }
    }

    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
      }

      textarea {
        width: 100%;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .bill {
      h5 {
        line-height: 50px;
      }

      div {
        padding-left: 15px;
      }
    }
  }

  .money {
    width: 1200px;
    margin: 20px auto;

    ul {
      width: 220px;
      float: right;

      li {
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        i {
          color: red;
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 1200px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: #e12228;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
    }
  }

  .sub {
    width: 1200px;
    margin: 0 auto 10px;

    .subBtn {
      float: right;
      width: 164px;
      height: 56px;
      font: 700 18px "微软雅黑";
      line-height: 56px;
      text-align: center;
      color: #fff;
      background-color: #e1251b;
    }
  }
}
</style>
