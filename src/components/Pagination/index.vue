<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一頁
    </button>

    <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo', 1)">
      1
    </button>

    <button v-if="startNumAndEndNum.start > 2">···</button>

    <!-- 中間部分 -->
    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      v-if="page >= startNumAndEndNum.start"
      @click="$emit('getPageNo', page)"
    >
      {{ page }}
    </button>

    <button v-if="startNumAndEndNum.end <= totalPage - 2">···</button>

    <button
      v-if="startNumAndEndNum.end < totalPage"
      @click="$emit('getPageNo', totalPage)"
    >
      {{ totalPage }}
    </button>

    <button :disabled="pageNo == totalPage">下一頁</button>

    <button style="margin-left: 30px">共 {{ total }} 條</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: ["pageNo", "", "pageSize", "total", "continuous"],
  computed: {
    // 計算總共多少頁
    totalPage() {
      // 向上取整數
      return Math.ceil(this.total / this.pageSize);
    },
    // 計算開始與結束的數字
    startNumAndEndNum() {
      let start = 0;
      let end = 0;
      const { continuous, total, pageNo, totalPage } = this;
      if (continuous > total) {
        start = 1;
        end = total;
      } else {
        start = pageNo - parseInt(continuous / 2);
        end = pageNo + parseInt(continuous / 2);

        if (start < 1) {
          start = 1;
          end = continuous;
        } else if (end > totalPage) {
          start = totalPage - continuous + 1;
          end = totalPage;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
