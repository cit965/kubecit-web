<template>
    <div>
        <div data-v-7f78dd80="" class="content">
            <div data-v-7f78dd80="" class="avatar"><img data-v-7f78dd80=""
                    src="https://static001.geekbang.org/static/university/img/teacher-avatar.0fd87247.png" alt=""
                    class="avatar-img"><img data-v-7f78dd80=""
                    src="https://static001.geekbang.org/static/university/img/teacher-extra.5846f021.png" alt=""
                    class="avatar-extra"></div>
            <div data-v-7f78dd80="" class="detail">
                <h4 data-v-7f78dd80="">王炜<span data-v-7f78dd80="">前腾讯云 CODING 架构师</span></h4>
                <ul data-v-7f78dd80="">
                    <li data-v-7f78dd80="">他长期扎根云原生领域，多年来一直在从事云原生架构、GitOps、Docker、Kubernetes
                        等方面的研究与实践，著有云原生持续部署领域书籍《Spinnaker
                        实战：云原生多云环境的持续部署方案》，合著《深入理解 Istio：云原生服务网格进阶实战》、《软件研发效能权威指南》。</li>
                    <li data-v-7f78dd80="">他参与了 CODING CD 从零到一的研发，也是云原生开发工具 Nocalhost 项目（已捐赠 CNCF
                        成为沙箱项目）的创始成员，见证了云原生在国内从萌芽到蓬勃发展的整个阶段，也深谙转型云原生架构师的痛点、难点。</li>
                    <li data-v-7f78dd80="">他热爱分享、善于教学，是 Linux 基金会亚太地区布道师和中国电子技术标准化研究院木兰开源社区导师。</li>
                </ul>
            </div>
        </div>
        <div class="newCourseContent">
            <div class="courseUl" v-if="courseList.length > 0">
                <div class='courseItem' v-for="(courseItem, index) in courseList" :key="index"
                    @click="toDetailPage(courseItem)">
                    <CourseItem :course-item="courseItem" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { router } = inject('baseTool')
import CourseItem from '@/components/common/CourseItem.vue'
const courseList = ref([{ "id": 1, "level": 1, "name": "go设计模式", "detail": "asf", "cover": "https://raw.githubusercontent.com/mouuii/picture/master/%E6%88%AA%E5%B1%8F2023-09-09%20%E4%B8%8A%E5%8D%8811.10.11.png", "price": 12, "tags": ["asdf"], "status": 1, "categoryId": 7, "createdAt": "2023-09-21T10:26:45Z", "updatedAt": "2023-09-21T10:26:39Z", "people": 102, "duration": 40, "score": 99 }, { "id": 2, "level": 1, "name": "vue3", "detail": "asf", "cover": "https://raw.githubusercontent.com/mouuii/picture/master/9ca7e372ef712cd03fd65313a221124743d37b6d.jpeg", "price": 12, "tags": ["asdf"], "status": 1, "categoryId": 8, "createdAt": "2023-09-21T10:26:45Z", "updatedAt": "2023-09-21T10:26:39Z", "people": 102, "duration": 40, "score": 99 }, { "id": 3, "level": 1, "name": "k8s 源码大学", "detail": "asf", "cover": "https://raw.githubusercontent.com/mouuii/picture/master/WechatIMG11857.jpeg", "price": 12, "tags": ["asdf"], "status": 1, "categoryId": 26, "createdAt": "2023-09-21T10:26:45Z", "updatedAt": "2023-09-21T10:26:39Z", "people": 102, "duration": 40, "score": 99 }, { "id": 4, "level": 1, "name": "手写gin框架", "detail": "asf", "cover": "https://raw.githubusercontent.com/mouuii/picture/master/%E6%88%AA%E5%B1%8F2023-09-09%20%E4%B8%8A%E5%8D%8811.13.15.png", "price": 12, "tags": ["asdf"], "status": 1, "categoryId": 7, "createdAt": "2023-09-21T10:26:45Z", "updatedAt": "2023-09-21T10:26:39Z", "people": 102, "duration": 40, "score": 99 }, { "id": 6, "level": 1, "name": "python 从入门到专家", "detail": "asf", "cover": "https://img1.baidu.com/it/u=1865757052,967482618&fm=253&fmt=auto&app=138&f=JPEG?w=807&h=500", "price": 12, "tags": ["asdf"], "status": 1, "categoryId": 31, "createdAt": "2023-09-21T10:26:45Z", "updatedAt": "2023-09-21T10:26:39Z", "people": 102, "duration": 40, "score": 99 }, { "id": 8, "level": 1, "name": "c++网络编程", "detail": "asf", "cover": "https://img2.baidu.com/it/u=92135045,2491414387&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500", "price": 12, "tags": ["asdf"], "status": 1, "categoryId": 29, "createdAt": "2023-09-21T10:26:45Z", "updatedAt": "2023-09-21T10:26:39Z", "people": 102, "duration": 40, "score": 99 }, { "id": 9, "level": 1, "name": "手把手教你抖音开店", "detail": "asf", "cover": "https://img1.baidu.com/it/u=1777665180,861191299&fm=253&fmt=auto&app=138&f=JPEG?w=494&h=297", "price": 12, "tags": ["asdf"], "status": 1, "categoryId": 33, "createdAt": "2023-09-21T10:26:45Z", "updatedAt": "2023-09-21T10:26:39Z", "people": 102, "duration": 40, "score": 99 }, { "id": 10, "level": 1, "name": "ppt 美化", "detail": "asf", "cover": "https://img0.baidu.com/it/u=3908748544,548907133&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500", "price": 12, "tags": ["asdf"], "status": 1, "categoryId": 33, "createdAt": "2023-09-21T10:26:45Z", "updatedAt": "2023-09-21T10:26:39Z", "people": 102, "duration": 40, "score": 99 }, { "id": 11, "level": 1, "name": "AI 大模型之美", "detail": "asf", "cover": "https://t11.baidu.com/it/u=3476623685,201141882&fm=30&app=106&f=JPEG?w=640&h=360&s=5ABF25C0C6AA1CB78E811403030030D2", "price": 12, "tags": ["asdf"], "status": 1, "categoryId": 30, "createdAt": "2023-09-21T10:26:45Z", "updatedAt": "2023-09-21T10:26:39Z", "people": 102, "duration": 40, "score": 99 }, { "id": 12, "level": 1, "name": "云原生架构师基础", "detail": "asf", "cover": "https://img2.baidu.com/it/u=662555810,1285585699&fm=253&fmt=auto&app=138&f=JPEG?w=690&h=429", "price": 12, "tags": ["asdf"], "status": 1, "categoryId": 26, "createdAt": "2023-09-21T10:26:45Z", "updatedAt": "2023-09-21T10:26:39Z", "people": 102, "duration": 40, "score": 99 }, { "id": 14, "level": 1, "name": "go 语言基础2", "detail": "asf", "cover": "https://img2.baidu.com/it/u=3083474656,3617724589&fm=253&fmt=auto&app=120&f=JPEG?w=499&h=282", "price": 12, "tags": ["asdf"], "status": 1, "categoryId": 7, "createdAt": "2023-09-21T10:26:45Z", "updatedAt": "2023-09-21T10:26:39Z", "people": 102, "duration": 40, "score": 99 }, { "id": 16, "level": 1, "name": "go 语言基础4", "detail": "asf", "cover": "https://img2.baidu.com/it/u=3083474656,3617724589&fm=253&fmt=auto&app=120&f=JPEG?w=499&h=282", "price": 12, "tags": ["asdf"], "status": 1, "categoryId": 7, "createdAt": "2023-09-21T10:26:45Z", "updatedAt": "2023-09-21T10:26:39Z", "people": 102, "duration": 40, "score": 99 }]);
// 跳转课程详情
const toDetailPage = (item) => {
    router.push({
        path: '/course/detail',
        query: {
            id: item.id
        }
    })
}
</script>
<style lang="scss" scoped>
.content[data-v-7f78dd80] {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1140px;
    margin: 50px auto 0;
    background: linear-gradient(131deg, #f9f7ff, #f1eeff);
    border-radius: 20px;
}

.avatar[data-v-7f78dd80] {
    flex-shrink: 0;
    position: relative;
    margin-top: -4px;
    margin-left: 16px;
    width: 293px;
    height: 323px;
    font-size: 0;
    cursor: pointer;
    background: url(https://static001.geekbang.org/static/university/img/teacher-avatar-bg.9f238e81.png) no-repeat 0 100%/100%;
}

.avatar-img[data-v-7f78dd80] {
    width: 231px;
    margin-left: 54px;
    transition: all .5s;
}

.avatar-extra[data-v-7f78dd80] {
    transition: all .5s;
    opacity: 0;
    position: absolute;
    bottom: 52px;
    left: 20px;
    width: 315px;
}

.detail[data-v-7f78dd80] {
    padding: 44px 58px 42px 82px;
}

.detail h4[data-v-7f78dd80] {
    position: relative;
    font-size: 24px;
    font-weight: 500;
    color: #353535;
    line-height: 28px;
    margin-bottom: 24px;
    padding-left: 20px;
}

.detail h4[data-v-7f78dd80]:before {
    content: "";
    position: absolute;
    left: -3px;
    top: 5px;
    width: 15px;
    height: 19px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAFF3D5OAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGqADAAQAAAABAAAAHgAAAACagTLwAAAEVElEQVRIDZ1Wz28VVRQ+dxwNmqaJxMCOBOKClZKo/4IJ/wCFBwkplcBro9SUmkZRupCFAUIbfjUNVPxRqu1SE4ssjCsXJjUsDQvrTruohPRZXt+bOX7fnTnz7kxfpeEm88493znnO+eeufe+EakMd/8j1UdrInxO3nYuci5zobx4SCdjTeVXQG+9c8tMAYf7bjSLX1uT3ZE3IK4t8nemqMi7XznnfjynI82mXHqyIdJsSePYDddjNO7+OdUmDOtNETrkTrK+Lvs8jYKGwwqAvjq64P7w4Pcf6O8LZ/SCV6o/n4/rjirmfhhDvlaWJ/pL4kMLLqGTX3ueShovS3uqP8scUbAvZqQ+cVQ1q46xZuEUc29ghJVMn/fv5v0NnJfqdzKXuJlILyIeH74axmR5BSU/aCfyGh5ppyKtRGq1q26OtN0Ge9qA80ttvAsflAcmkC1gaSqXB265s2Gw3wyhs5+TABkt0OxJKjeGZ91QXDBwuTYwpxos1CyDFw/rK9nmIEQP84K0Rpu3dwE++o3riz1lmIWBzITHB3IuchA7btEI4vSJ9Egs2N6Zs9XVSmVv/7Rb9vhWP/ODWmzTrXwMd4tj+mqi8pAd8t1KZaVv0u02h24ycpE8NIPvg8qu2SHVL0/riOFV6e59qGrvoYtM2k56T027f8PATsuBokulAf05nNrGzeN6NzREoaMvD1bD7F1hcxyZPKZQ1ZsicwyZbO7flSmQV47wtsgPjOFFhhzI37OZKf1ySmsKrdxSRkI8nHcNooNto5AIPDPUO7sciq2P0s8Rbc0AMDAy5zYHkWXTcLI8+IXbG+Kl8sK66YQS3zg1Uw4gHsPwAPJ1KlYeghePT7mDxLqN6O0L7gC8z8CIW1f+bLdkZ+361gEkKSqaH9cXetZlDDt+AJfJHjyaqixDzmxsyPWjN90/DHjW4X4a1xhEv6Czb+KyEZDz1soem+cS9kUc6Hr/1FMOdJdqeOv9hiQHLAlfpc1TnGWomW5F5Enht4SiTp6YdktdeDdB/nqtrqKUDAmqOv0LLCtgGf/I9dN3OndcNVM5EaslCYKLVdlKKPHAXF7hZvsqOjH63my2sS1hVGwHbguydISf80h5nBIPVxIOb6eJ9mzshMvtKzXVyzW9ZmBk5B4wUiODJHGRjHhOaMTeDtj8SoWkMnSpTz8jd+n0EfAEVp1JGjjyQrxgUj4mAFoyK4Y2vIr9lJ3WsXIAeSxtxSBmKyBY+DDABuNDnTh0XN2fclq0jk4FAS2V4VviM3YMIa/FF61zMv/8I9lx9lvH78PsimQAdxtHEezBvEqrgJj5YR7G5PM53LnD9a/diicLfngXP0Zsr8cw8X2mQkKQcauTvxh5olxP4DehsXxSr/xFFv75JAbJx5hPet0Yy2S2CJ8cLWo4lfMvrsqEfVRWSbvpnvreuO5Km/IzDtp+LKB013GF+KRYwW00/H+ffd3It4XZf/e2nLfh9B+hZjtyml3MUgAAAABJRU5ErkJggg==) no-repeat 0 0/100%;
}

.detail h4 span[data-v-7f78dd80],
.detail li[data-v-7f78dd80] {
    font-size: 16px;
    color: #353535;
}

.detail h4 span[data-v-7f78dd80] {
    margin-left: 16px;
    font-weight: 400;
    line-height: 22px;
}

.detail li[data-v-7f78dd80] {
    position: relative;
    line-height: 28px;
    margin-bottom: 20px;
    padding-left: 21px;
}

.newCourseContent {
    width: 1140px;
    margin: 30px auto 0px auto;
    min-height: 300px;
}

.newCourseContent .no-course-info {
    text-align: center;
    line-height: 40px;
    color: #999999;
    font-size: 14px;
    padding-top: 110px;
}

.newCourseContent .courseUl {
    display: flex;
    flex-wrap: wrap;
}

.courseItem {
    width: 270px;
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
</style>