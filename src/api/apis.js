import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.1.7:5000'

// 获取商家接口
export const apiShop = () => axios.get("/shop/seller")
// 获取商品列表
export const apiShoplist = () => axios.get("/goods/goods_list")