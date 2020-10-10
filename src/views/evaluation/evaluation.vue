<template>
  <div class="evaluation-container">
    <div class="left-score">
      <span>5.0</span>
      <div class="comprehensiveScore">综合评分</div>
      <div class="aroundShop">高于周边商家96%</div>
    </div>
    <div class="right-serv">
      <p>
        <span>服务态度</span>
        <van-rate
          v-model="valueStar"
          color="#ffc300"
          allow-half
          @change="starChange"
        />
        <span>4.5</span>
      </p>
      <p>
        <span>菜品质量</span>
        <van-rate
          v-model="valueStar"
          color="#ffc300"
          allow-half
          @change="starChange"
        />
        <span>4.5</span>
      </p>
      <p>
        <span>送达时间</span>
        <span>4.5</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueStar: 1,
    };
  },
  methods: {
    starChange(a) {
      console.log(a);
    },
  },
};
</script>

<style lang="less" scoped>
.evaluation-container {
  display: flex;
  justify-content: space-around;
  .left-score {
    text-align: center;
    border-right: 1px solid red;
    padding: 10px;
    span {
      font-size: 18px;
      font-weight: 700;
      color: #ffc300;
    }
    .comprehensiveScore {
      font-size: 14px;
      font-weight: 700;
    }
    .aroundShop {
      font-size: 12px;
      color: #ccc;
    }
  }
}
</style>
