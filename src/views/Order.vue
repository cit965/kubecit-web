<template>
    <div class="confirmOrder">
      <div class="bgColor">
          <h1 class="main-shopcart">确认订单</h1>
      </div>
      <div class="main">
            <div class="info">
                <div class="head">商品信息</div>
                <div class="info-main">
                    <div class="courseInfo">
                        <div class="coursebg">
                            <img :src="courseOrder.courseImg" alt="">
                        </div>
                        <div class="courseName">
                           {{ courseOrder.courseName }}
                        </div>
                        <div class="coursePrice">
                            <span class="nowprice">￥{{courseOrder.price}}</span>
                            <span class="oldprice">￥{{courseOrder.salePrice}}</span>
                        </div>
                    </div>
                </div>
                <div class="choose">
                    <h3>支付方式 <span class="pay">{{payment.description}}</span></h3>
                    <div class="choosebg">
                        <div v-for="item in payMods" @click="payModClick(item.description)" :class="{'active':payment.description === item.description}" rel="payModes" pay-mode-code="wxpayment" >
                        <img :src="item.img" title="item.description" alt="">
                        <span>{{ item.description }}</span>
                        </div>
                
                    </div>
                </div>
                <ul class="foot">
                    <li class="foot-item">应付<span class="unique">￥{{courseOrder.price}}</span></li>
                    <li>
                        <button class="btn" @click="conformOrder">确认订单</button>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 二维码对话框 -->
        <el-dialog v-model='dialogVisible' class="pay-dialog" width="500px">
            <div class="dialogPrice">支付：<span class="prices">299元</span></div>
            <div class="codeimg">
                <img src="" alt=""/>
            </div>
            <div class="alert">请您及时付款，已便订单尽快处理！</div>
            <div class="finish">
                <div class="error">支付遇到问题</div>
                <div class="success">我已支付</div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
//dialog
const dialogVisible = ref(false);
let courseOrder = ref({})
const route = useRoute()

const conformOrder = ()=>{
    dialogVisible.value = true
}

let payment = ref({description:"微信支付"})

let payMods = ref([{img:"/wxpay.png",description:"微信支付"},{img:"/zfbpay.png",description:"支付宝支付"},{img:"/jinyezi.png",description:"金叶子支付"}])

// 选择支付方式
const payModClick = (item) =>{
    payment.value.description = item
    console.log(item)
}
onMounted(() => {
    const queryInfo = route.query
    Object.assign(courseOrder.value, queryInfo)
})
</script>

<style scoped>
.finish{
  width: 170px;

  line-height: 30px;
  margin: 0 auto;
  display: flex;
}
.success{
  margin-left: 20px;
  width: 70px;
  font-size:12px ;
  background: rgba(54, 137, 255, 0.22);
  color: #3692ff;
  cursor: pointer;
  border-radius: 8px;
}
.error{
  width: 100px;
  font-size:12px ;
  background: linear-gradient(90deg, #fc7979 0%, #da4848 100%);
  color: #ffffff;
  cursor: pointer;
  border-radius: 8px;

}
.el-dialog {
    text-align: center !important;
    border-radius: 10px!important;
}
.dialogPrice{
    padding-bottom: 20px;
    color: #93999F;
}
.prices{
    color: #F01414;
}
.alert{
    padding: 20px 0;
    font-size: 14px;
    color: #93999F;

}
.confirmOrder{
    width: 100%;
    padding-bottom:60px;
}
.bgColor{
  width: 100%;
  height: 200px;
  background-color: red;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
.main-shopcart{
    width: 1200px;
    margin: 0 auto;
    height: 42px;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    line-height: 35px;
    color: #FFFFFF;
    padding: 30px 0;
    opacity: 1;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.main{
    width: 1200px;
    margin: -100px auto 0 auto;
  /*background-color: red;*/
}
.main h1{
    color: #FFFFFF;
    padding: 30px 0 30px 47px;

}
.info{
    width: 1200px;
    padding: 5px 0px 20px 0px;
    background: #F3F5F7;
    border-radius: 10px;
  box-shadow: 0px 2px 5px #888888;
}
.info-main{
    margin: 10px 20px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
}
.head{
    padding: 20px;
    font-size: 18px;
    color: #333333;
}
/* 课程信息 */
.courseInfo{
    display: flex;
    width: 100%;
    height: 160px;
    margin: 0 auto;
}
.coursebg{
    width: 280px;
    height: 160px;
}
.coursebg img{
    width: 100%;
    height: 100%;
}
.courseName{
    margin:0 20px;
    width: 400px;
    height: 160px;
    font-size: 16px;
    color: #07111B;
    line-height:160px ;
    word-break:keep-all;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.coursePrice{
    margin-left: 100px;
    height: 160px;
    text-align: right;
    line-height: 160px;
}
.coursePrice .nowprice{
    font-size: 18px;
    font-weight: 600;
    color: #1C1F21;
}
.coursePrice .oldprice{
    padding-left: 10px;
    font-size: 14px;
    text-decoration: line-through;
    color: #93999F;

}
/* 支付开始 */
.choose{
    width: 1200px;
    margin: 0 auto;
}
.choose h3{
    color: #222;
    font-size: 16px;
    font-weight: 400;
    padding: 0 20px;
}

.choosebg{
    display: flex;
    margin: 20px;
}

.payment{
    width: 130px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 10px;
    line-height: 50px;
    display: flex;
    padding: 0 10px;
    align-items: center;
}
.payment i{
    font-size: 35px;
    margin-right: 10px;
}
.payment span{
    line-height: 50px;
    color: #222222;
    font-weight: bold;
}

.payStyle{
  background: url("/image/checkedVip.png") no-repeat;
  background-size: 220px 111px;
  background-position: -67px -59px;
  border: #ff470a solid 1px !important;
}
.alipayment{
  border: #bfbfbf solid 1px;
  color: #01a8eb;
}
.wxpayment{
  border: #bfbfbf solid 1px;
  color: #01af37;
}

/* 支付结束 */
/* 结算 */
.foot{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #333333;
    margin-bottom: 10px;
}
.foot-item{
    width: 200px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
}
.foot-item:first-child{
    margin-top: 3px;
}
.old{
    margin-left: 10px;
}
.unique{
    margin-left: 5px;
    font-size: 24px;
    color: #F01414;
}
.btn{
    margin-right: 20px;
    width: 150px;
    height: 50px;
    border: none;
    color: #FFFFFF;
    font-size: 20px;
    border-radius: 5px;
    background: #F01414;
    cursor: pointer;
    box-shadow: 0px 3px 5px 2px #ff727f;
}
.pay{
    font-size: 18px;
    padding-left: 10px;
    color:#F01414 ;
}
.codeimg{
    margin:0 auto;
    border: #d2d2d2 solid 1px;
    width: 150px;
    height: 150px;
}


.choosebg div span {
    line-height: 50px;
    color: #222;
    font-weight: 700;
}

.choosebg div img {
    width: 34px;
    height: 34px;
}

.choosebg div {
    width: 150px;
    border: 2px solid #fff;
    margin-right: 10px;
    border-radius: 8px;
    /* padding: 0 14px; */
    cursor: pointer;
    background: #fff;
    font-size: 10px;
}

.choosebg .active {
    border: 2px solid #388fff;
}
</style>