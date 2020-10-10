<template>
  <div class="header">
    <van-card
      class="title-desc"
      desc="美团专送/38分钟送达"
      :thumb="shopinfo.avatar"
    >
      <!-- 标题区域 -->
      <template #title>
        <van-button size="mini">品牌</van-button>
        <span slot="title" class="brand-text">{{ shopinfo.name }}</span>
      </template>
      <!-- 描述区域 -->
      <template #tags>
        <van-tag plain type="danger" class="subtract">减</van-tag>
        <span slot="tags" class="subtract-text"
          >单人精彩套餐VC无限橙果汁全...</span
        >
      </template>
    </van-card>
    <!-- 通知区域 -->
    <div class="notice">
      <span class="notice-title">公告</span>
      <span>{{ shopinfo.bulletin }}</span>
    </div>
  </div>
</template>

<script>
import { apiShop } from "../../api/apis";
export default {
  created() {
    this.getshop();
    console.log(this.shopinfo);
  },
  data() {
    return {
      shopinfo: "",
    };
  },
  methods: {
    // 获取商家信息
    getshop() {
      apiShop().then((res) => {
        this.shopinfo = res.data.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 130px;
  position: relative;
  background: #fdd969;
  // background: url('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=715429279,3086856035&fm=26&gp=0.jpg');
  .van-card {
    background-color: unset;
    .van-button--default {
      background: #f01414;
      color: #fff;
      border: none;
      box-shadow: 1px 1px 6px #5c060f;
    }
    .brand-text {
      padding-left: 10px;
      font-size: 18px;
      color: #fff;
      font-weight: 700;
    }
    .van-card__desc {
      color: #fff;
      font-size: 14px;
      padding: 8px 0;
    }
    .subtract {
      color: #f47273;
      box-shadow: 1px 1px 5px rgba(94, 91, 91, 0.8);
    }
    .subtract-text {
      padding-left: 10px;
      color: #fff;
    }
  }
  .notice {
    padding: 5px 10px;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 30px;
    bottom: 0;
    font-size: 12px;
    background-color: #44090f;
    color: #fff;
    .notice-title {
      display: inline-block;
      width: 30px;
      height: 20px;
      color: #3c454c;
      background: #fff;
      text-align: center;
      line-height: 20px;
      margin-right: 4px;
      border-radius: 4px;
    }
  }
}
</style>
