<template>
	<Header></Header>
	<div class='coursemain'>
		<div class="course-main">
			<section class="search-container">
		        <div class="search-item">
		          <div class="title-name">课程方向：</div>
		          <div class="all-items">
		            <el-tag
		                class="category-poniter"
		                effect="plain"
		                type="info"
		            >全部</el-tag>
		            <el-tag
		                class="category-poniter-item"
		                effect="plain"
		                type="info"
		            >  Node.js
		            </el-tag>
		        </div>
		        </div>
		        <div class="search-item search-item-transition" style="top: 45px;">
		          <div class="title-name">课程分类：</div>
		          <div class="all-items">
		             <el-tag
		                class="category-poniter"
		                effect="plain"
		                type="info"
		            >全部</el-tag>
		            <el-tag
		                class="category-poniter-item"
		                effect="plain"
		                type="info"
		            >  Node.js
		            </el-tag>
		          </div>
		        </div>
		        <div class="search-item" style="top: 90px;">
		          <div class="title-name">课程难度：</div>
		          <div class="all-items">
		            <el-tag
		                class="category-poniter"
		                effect="plain"
		                type="info"
		            >全部</el-tag>
		            <el-tag
		                class="category-poniter-item"
		                effect="plain"
		                type="info"
		            >  Node.js
		            </el-tag>
		          </div>
		        </div>
     		</section>
		</div>
		<div class='main-container'>
			<div class="container-top">
		        <ul class="all">
		          <li class="item">综合</li>
		          <li class="item split">|</li>
		          <li class="item">最新课程</li>
		          <li class="item split">|</li>
		          <li class="item">最多购买 </li>
		          <li class="item split">|</li>
		          <li class="item-price">
		            <span>价格</span>  
		            <span class="arrow">
		              <i
		                  class="el-icon-caret-top"
		              ></i>
		              <i
		                  class="el-icon-caret-bottom"
		              ></i>
		            </span>
		          </li>
		        </ul>
		        <ul class="right">
		          <li class="right-item">
		            <el-radio-group>
		              <el-radio label="1">免费课程</el-radio>
		              <el-radio label="2">会员课程</el-radio>
		            </el-radio-group>
		          </li>
		        </ul>
		      </div>
		      <div class="container-body">
		        <div class="newCourseContent">
		          <ul class="courseUl">
		            <li class='courseItem'>
						<div class='courseInfo'>
							<div class='courseBg'>
								<img src='https://oss.xuexiluxian.cn/xiaoluxian-vcr/ed4eca4ebbeb4b489de722925a34d086.jpg'>
							</div>
							<div class="courseName">课程标题</div>
	                        <div class="courseDegree">高级 · 222人报名</div>
	                        <div class="coursePricePri">
	                            <div class="pricePri">¥ 222</div>
	                        </div>
						</div>
					</li>
					<li class='courseItem'>
						<div class='courseInfo'>
							<div class='courseBg'>
								<img src='https://oss.xuexiluxian.cn/xiaoluxian-vcr/ed4eca4ebbeb4b489de722925a34d086.jpg'>
							</div>
							<div class="courseName">课程标题</div>
	                        <div class="courseDegree">高级 · 222人报名</div>
	                        <div class="coursePricePri">
	                            <div class="pricePri">¥ 222</div>
	                        </div>
						</div>
					</li>
					<li class='courseItem'>
						<div class='courseInfo'>
							<div class='courseBg'>
								<img src='https://oss.xuexiluxian.cn/xiaoluxian-vcr/ed4eca4ebbeb4b489de722925a34d086.jpg'>
							</div>
							<div class="courseName">课程标题</div>
	                        <div class="courseDegree">高级 · 222人报名</div>
	                        <div class="coursePricePri">
	                            <div class="pricePri">¥ 222</div>
	                        </div>
						</div>
					</li>
					<li class='courseItem'>
						<div class='courseInfo'>
							<div class='courseBg'>
								<img src='https://oss.xuexiluxian.cn/xiaoluxian-vcr/ed4eca4ebbeb4b489de722925a34d086.jpg'>
							</div>
							<div class="courseName">课程标题</div>
	                        <div class="courseDegree">高级 · 222人报名</div>
	                        <div class="coursePricePri">
	                            <div class="pricePri">¥ 222</div>
	                        </div>
						</div>
					</li>
					<li class='courseItem'>
						<div class='courseInfo'>
							<div class='courseBg'>
								<img src='https://oss.xuexiluxian.cn/xiaoluxian-vcr/ed4eca4ebbeb4b489de722925a34d086.jpg'>
							</div>
							<div class="courseName">课程标题</div>
	                        <div class="courseDegree">高级 · 222人报名</div>
	                        <div class="coursePricePri">
	                            <div class="pricePri">¥ 222</div>
	                        </div>
						</div>
					</li>
		          </ul>
		        </div>
		      </div>
		</div>
	</div>
	<Foot></Foot>
</template>


<script setup>
import Header from '@/components/common/Header.vue'
import Foot from '@/components/common/Foot.vue'
</script>


<style scoped>
.course-main {
  padding: 20px 0;
  width: 100%;
  height: 130px;
  background: #f3f5f9;
}
.search-container{
  width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 100%;
}
.search-item{
  display: flex;
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  height: 45px;
  transition: all 0.5s;
}
.search-item-transition:hover{
  z-index: 777;
  height: auto;
  box-shadow: rgb(95 101 105 / 10%) 0px 12px 20px 0px;
  border-radius: 8px;
  background: rgba(255,255,255);
}
.search-item .title-name {
  width: 100px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  line-height: 25px;
  text-align: justify;
  color: #333333;
  padding: 10px;
  opacity: 1;
}
.search-item .title-name:after {
  content: '.';
  width: 100%;
  display: inline-block;
  overflow: hidden;
  height: 0;
}

.search-item .all-items{
  width: calc(100% - 120px);
  min-height: 25px;
  display: flex;
  flex-wrap: wrap;
}
.title .all-list {
  width: 40px;
  height: 25px;
  line-height: 25px;
  border-radius: 4px;
  padding: 0 10px;
  align-items: center;
  text-align: center;
}

.title .all {
  opacity: 1;
  color: #2c80ff;
}

.title .item {
  height: 25px;
  line-height: 25px;
  margin: 0 15px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 21px;
  opacity: 1;
}

.title .item .active {
  color: #2c80ff;
}

.category-poniter {
  height: 25px;
  line-height: 25px;
  margin: 10px 5px;
  cursor: pointer;
  border: none;
  background: rgba(44, 128, 255, 0.1);
  color: #2c80ff;
}
.category-poniter-item {
  height: 25px;
  line-height: 25px;
  margin: 10px 5px;
  cursor: pointer;
  border: none;
  background: none;
  color: rgba(81, 87, 89, 1);
}

.main-container {
  width: 1200px;
  margin: 0 auto;
}

.container-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.all {
  display: flex;
  padding-top: 20px;
  font-size: 16px;
  color: #515759;
}

.all .item:first-child {
  margin-right: 20px;
}

.all .item {
  margin: 0 10px;
  cursor: pointer;
}

.right {
  display: flex;
  padding-top: 20px;
  font-size: 16px;
  color: #515759;
}

.right .right-item {
  margin-left: 10px;
}

.right .right-items {
  margin-right: 0px;
}

.arrow {
  position: relative;
}

.arrow i:first-child {
  position: absolute;
  top: -1px;
}

.arrow i:last-child {
  position: absolute;
  top: 7px;
}

.check {
  width: 15px;
  height: 15px;
  cursor: pointer;
}

.up {
  position: absolute;
  top: 5px;
  left: 2px;
}

.down {
  position: absolute;
  top: 15px;
  left: 2px;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg); /* Opera */
}
.newCourseContent {
  width: 1200px;
  margin: 30px auto 0px auto;
}

.newCourseContent .courseUl {
  display: flex;
  flex-wrap: wrap;
}

.courseItem{
	width: 285px;
    height: 280px;
    margin: 0 20px 20px 0;
    transition: margin-top 0.2s;
}
.courseItem:hover{
    margin-top: -10px;
    cursor: pointer;
}
.courseItem:nth-child(4n+0){
    margin-right: 0 !important;
}
.courseInfo{
	position: relative;
    width: 100%;
    height: 270px;
    background: #ffffff;
    box-shadow: 1px 1px 10px rgb(27 39 94 / 40%);
    opacity: 1;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    overflow: hidden;
    text-decoration: none;
}
.courseBg{
	position: relative;
    width: 100%;
    height: 160px;
}
.courseBg img{
	width: 100%;
    height: 100%;
}
.courseName{
    margin: 10px;
    font-weight: bold;
    font-size: 14px;
    color: #333333;
    display: -webkit-box;
    overflow: hidden;
}
.courseDegree{
    margin-left: 10px;
    font-size: 12px;
    color: #808080;
}
.coursePrice {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 130px;
    font-size: 14px;
    margin-top: 15px;
    padding: 0 5px;
}
.coursePricePri{
    width: 75px;
    font-size: 14px;
    margin-top: 18px;
    padding: 0 13px;
    color: rgba(255, 114, 127, 1);
    font-weight: 700;
}
.coursePriceZero{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75px;
    font-size: 14px;
    margin-top: 15px;
    padding: 0 10px;
    color: rgba(53, 134, 255, 1);
}
.courseMemberbg {
    position: relative;
    width: 80px;
    height: 20px;
    color: #ffffff;
    background: linear-gradient(90deg, #ff928e 0%, #fe7062 99%);
    border-radius: 24px 0px 24px 0px;
}
.courseMember {
    position: absolute;
    line-height: 20px;
    left: 13px;
    font-weight: 700;
}
.price {
    line-height: 25px;
    left: 100px;
    color: #ff727f;
    font-weight: 700;
}
</style>