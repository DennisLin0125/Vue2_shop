<template>
  <div class="order-right">
    <div class="order-content">
      <div class="title">
        <h3>我的訂單</h3>
      </div>
      <div class="chosetype">
        <table>
          <thead>
            <tr>
              <th width="29%">商品</th>
              <th width="31%">訂單詳情</th>
              <th width="13%">收貨人</th>
              <th>金額</th>
              <th>狀態</th>
              <th>操作</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="orders">
        <table
          class="order-item"
          v-for="order in myOrder.records"
          :key="order.id"
        >
          <thead>
            <tr>
              <th colspan="5">
                <span class="ordertitle"
                  >{{ order.createTime }}　訂單編號：{{ order.outTradeNo }}
                  <span class="pull-right delete"
                    ><img src="../images/delete.png" /></span
                ></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart, index) in order.orderDetailList" :key="cart.id">
              <td width="60%">
                <div class="typographic">
                  <img :src="cart.imgUrl" height="100px" width="100px" />
                  <a href="#" class="block-text">{{ cart.skuName }}</a>
                  <span>x{{ cart.skuNum }}</span>
                  <a href="#" class="service">售後申請</a>
                </div>
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                v-if="index == 0"
                width="8%"
                class="center"
              >
                {{ order.consignee }}
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                v-if="index == 0"
                width="13%"
                class="center"
              >
                <ul class="unstyled">
                  <li>總金額¥{{ order.totalAmount }}.00</li>
                  <li>線上付款</li>
                </ul>
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                v-if="index == 0"
                width="8%"
                class="center"
              >
                <a href="#" class="btn">{{ order.orderStatusName }}</a>
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                v-if="index == 0"
                width="13%"
                class="center"
              >
                <ul class="unstyled">
                  <li>
                    <a href="mycomment.html" target="_blank">評價|曬單</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="choose-order">
        <!-- 分頁器 -->
        <Pagination
          :pageNo="page"
          :pageSize="limit"
          :total="myOrder.total"
          :continuous="5"
          @getPageNo="getPageNo"
        />
      </div>
    </div>
    <!--猜你喜歡-->
    <div class="like">
      <h4 class="kt">猜你喜歡</h4>
      <ul class="like-list">
        <li class="likeItem">
          <div class="p-img">
            <img src="../images/itemlike01.png" />
          </div>
          <div class="attr">
            <em>DELL戴爾Ins 15MR-7528SS 15吋 銀色 筆記本</em>
          </div>
          <div class="price">
            <em>¥</em>
            <i>3699.00</i>
          </div>
          <div class="commit">已有6人評價</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="../images/itemlike02.png" />
          </div>
          <div class="attr">Apple蘋果iPhone 6s/6s Plus 16G 64G 128G</div>
          <div class="price">
            <em>¥</em>
            <i>4388.00</i>
          </div>
          <div class="commit">已有700人評價</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="../images/itemlike03.png" />
          </div>
          <div class="attr">DELL戴爾Ins 15MR-7528SS 15吋 銀色 筆記本</div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人評價</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="../images/itemlike04.png" />
          </div>
          <div class="attr">DELL戴爾Ins 15MR-7528SS 15吋 銀色 筆記本</div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人評價</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyOrder",
  data() {
    return {
      // 第幾頁
      page: 1,
      // 每頁幾項
      limit: 3,
      // 儲存我的訂單的訊息
      myOrder: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 獲取我的訂單的方法
    async getData() {
      const { page, limit } = this;
      let result = await this.$API.reqMyOrderList(page, limit);
      if (result.code == 200) {
        this.myOrder = result.data;
      }
    },
    // 獲取當前點到的那頁
    getPageNo(page) {
      this.page = page;
      this.getData();
    },
  },
};
</script>

<style></style>
