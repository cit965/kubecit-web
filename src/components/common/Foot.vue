<template>
	<footer>
		<div class='footer-main'>
			<div class='footer-xlx'>
				<img src="@/assets/img/logo-2-small-f.png">
			</div>
			<div class='footer-factory'>
				<img src="@/assets/img/foot-factory.png">
			</div>
			<div class="copytight">
				<ul class='copy-top'>
					<li @click="clickAbout">关于我们</li>
					<li>|</li>
					<li>联系我们</li>
					<li>|</li>
					<li>意见反馈</li>
					<li>|</li>
					<li>版权声明</li>
				</ul>
				<div class='copy-bottom'>
					<div style="text-align: center;margin-top: 5px">Copyright © 2018~2038 </div>

			        <p style="text-align: center;margin-top: 5px">
                    <!-- <router-link> wlb965用户服务协议</router-link> -->
					<router-link to="policyUserService">wlb965用户服务协议</router-link>
					<router-link to="policyUserPrivate">wlb965隐私政策</router-link>
                    <!-- <a class="go" href="#" target="_blank" title="京ICP备xxxxxx">京ICP备xxxxxx</a>  -->
                    </p>
				</div>
			</div>
			<div class="wx">
				<div class="wx-bg">
					<img src='@/assets/img/weichat.jpg' />
				</div>
				<div class="wx-dsc">官方微信</div>
			</div>
			<!-- <div class="wx">
				<div class="wx-bg">
					<img src='@/assets/img/citlogo.jpeg' />
				</div>
				<div class="wx-dsc">咨询老师微信</div>
			</div> -->
		</div>
	</footer>
</template>

<script setup>
import { useRoute } from 'vue-router'
// const route = useRoute()
const router = useRouter()
const clickAbout = () => {
  router.push('/about');
}
</script>
<style scoped>
footer{
	width: 100%;
	min-width: 1200px;
	height: 150px;
	background: #3483FF;
	opacity: 1;
	border-radius: 0px;
}
.footer-main{
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 1200px;
	height: 100%;
	color: #FFFFFF;
	margin: auto;
}
.footer-xlx{
	width: 110px;
	opacity: 1;
}
.footer-xlx img{
	width: 100%;
	height: 100%;
}
.footer-factory{
	width: 130px;
	margin: 0 20px;
}
.footer-factory img{
	width: 100%;
	height: 100%;
}
.copy-top{
    font-size: 14px;
    margin: 0 0 10px 0;
    display: flex;
}
.copy-top li{
	margin: 0 10px;
	color: #FFFFFF !important;
}
.copy-bottom{
	font-size:12px;
}
.copy-bottom a{
	color: #FFFFFF;
	text-decoration: underline;
	padding-left: 10px;
}
.wx{
	margin-left: 20px;
	width: 80px;
	height: 100px;
	font-size: 12px;
}
.wx-bg{
	width: 80px;
	height: 80px;
}
.wx img{
	width: 100%;
	height: 100%;
}
.wx-dsc{
  padding-top:5px;
  text-align: center;
}
.copy-user{
	margin-top: 10px;
	text-align: center;
}
.copy-user a{
	text-decoration: none;
	color:#FFFFFF;
}

li{
    list-style-type: none;
}
</style>