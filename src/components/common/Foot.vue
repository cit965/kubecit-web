<template>
	<footer>
		<div class='footer-main'>
			<div class='footer-xlx'>
				<img src="@/assets/img/citlogo.jpeg">
			</div>
			<div class='footer-factory'>
				<img src="@/assets/img/citlogo.jpeg">
			</div>
			<div class="copytight">
				<ul class='copy-top'>
					<li>关于我们</li>
					<li>|</li>
					<li>联系我们</li>
					<li>|</li>
					<li>意见反馈</li>
					<li>|</li>
					<li>版权声明</li>
				</ul>
				<div class='copy-bottom'>
					<span>Copyrignt© 2023 cit865.cn </span>	
					<a data-v-d94f43e2="" href="https://beian.miit.gov.cn/" target="_blank" class="go">京ICP备 xxx号</a>
					<p class='copy-user'>
						<a href="">《CIT社区用户条约》</a>
					</p>
				</div>
			</div>
			<div class="wx">
                <div class="wx-bg">
                    <img src='@/assets/img/citlogo.jpeg' />
                </div>
                <div class="wx-dsc">官方微信</div>
            </div>
            <div class="wx">
                <div class="wx-bg">
                    <img src='@/assets/img/citlogo.jpeg' />
                </div>
                <div class="wx-dsc">咨询老师微信</div>
            </div>
		</div>
	</footer>
</template>


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
    display: flex;
    font-size: 14px;
    margin:0 10px 10px 50px;
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
</style>