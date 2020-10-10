<template>
  <div class="shop-container">
    <!-- 侧边导航区域 -->
    <div class="left-nav">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          :title="item.name"
          v-for="item in goodList"
          :key="item.index"
        />
      </van-sidebar>
    </div>
    <!-- 右侧详情区域 -->
    <div class="right-info">
      <van-panel title="迷你早餐">
        <div v-for="item in shoplist" :key="item.index">
          <van-card
            num="2"
            :price="item.price"
            :title="item.name"
            :thumb="item.imgUrl"
          >
            <template #desc>
              <span slot="desc"
                >{{
                  "月售" +
                  item.sellCount +
                  "份" +
                  "" +
                  "好评度" +
                  item.rating +
                  "%"
                }}
              </span>
            </template>
            <!-- 数量选择区域 -->
            <template #footer>
              <van-stepper
                v-model="value"
                theme="round"
                button-size="22"
                disable-input
              />
            </template>
          </van-card>
        </div>
      </van-panel>
    </div>
  </div>
</template>

<script>
import { apiShoplist } from "../../api/apis";
export default {
  created() {
    this.getShopList();
  },
  data() {
    return {
      activeKey: 0,
      // 商品列表信息
      goodList: "",
      // 商品循环列表
      shoplist: [],
      value: "",
    };
  },
  methods: {
    getShopList() {
      apiShoplist().then((res) => {
        this.goodList = res.data.goodsList;
        console.log(this.goodList);
        this.goodList.forEach((item) => {
          this.shoplist = item.foods;
        });
        console.log(this.shoplist);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.shop-container {
  display: flex;
  flex: 1;
  height: 600px;
  overflow: hidden;
  .left-nav {
    overflow: scroll;
    width: 80px;
    background: #ccc;
  }
  .right-info {
    overflow: scroll;
    flex: 1;
    background: #222;
  }
}
</style>
