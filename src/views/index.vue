<template>
  <div class="index-container">
    <!-- 头部区域 -->
    <div class="title">
      <Header :shopinfo="shopinfo"></Header>
    </div>
    <!-- tab栏切换 -->
    <div class="tab-switch">
      <van-tabs v-model="active" color="#fdd969">
        <van-tab title="商品" to="/shop">
          <router-view></router-view>
        </van-tab>
        <van-tab title="评价" to="/evaluation">
          <router-view></router-view>
        </van-tab>
        <van-tab title="商家" to="/merchants">
          <router-view></router-view>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 尾部区域 -->
    <div class="footer"></div>
  </div>
</template>

<script>
import { apiShop } from "../api/apis";
import Header from "../views/header/header";

export default {
  created() {
    this.getshop();
  },
  methods: {
    // 获取商家信息
    getshop() {
      apiShop().then((res) => {
        this.shopinfo = res.data.data;
        // console.log(this.shopinfo);
      });
    },
  },
  data() {
    return {
      active: 0,
      // 存储商家信息
      shopinfo: "",
    };
  },
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
.index-container {
  height: 100%;
  /deep/ .tab-switch {
    height: 100%;
    .van-tabs {
      height: 100%;
      .van-tabs__content {
        height: 100%;
        .van-tab__pane {
          height: 100%;
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: pink;
  }
}
</style>
