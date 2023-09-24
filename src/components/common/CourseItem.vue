<template>
    <div class='courseInfo'>
        <div class='courseBg'>
            <img :src="courseItem.cover" alt="">
        </div>
        <div class="courseName">{{ courseItem.name }}</div>
        <div class="courseDegree">{{ levelMap[courseItem.level] }}</div>
        <div class="coursePricePri">
            <div class="pricePri">¥ {{ courseItem.price }}</div>
        </div>
    </div>
</template>
<script setup>
const levelMap = ref({ 1: '初级', 2: '中级', 3: '高级' })
const props = defineProps(['course-item']);
</script>
<style scoped lang="scss">
.courseItem {
    width: 285px;
    height: 280px;
    margin: 0 20px 20px 0;
    transition: margin-top 0.2s;
}

.courseItem:hover {
    margin-top: -10px;
    cursor: pointer;
}

.courseItem:nth-child(4n + 0) {
    margin-right: 0 !important;
}

.courseInfo {
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

.courseBg {
    position: relative;
    width: 100%;
    height: 160px;
}

.courseBg img {
    width: 100%;
    height: 100%;
}

.courseName {
    margin: 10px;
    font-weight: bold;
    font-size: 14px;
    color: #333333;
    display: -webkit-box;
    overflow: hidden;
}

.courseDegree {
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

.coursePricePri {
    width: 75px;
    font-size: 14px;
    margin-top: 18px;
    padding: 0 13px;
    color: rgba(255, 114, 127, 1);
    font-weight: 700;
}

.coursePriceZero {
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