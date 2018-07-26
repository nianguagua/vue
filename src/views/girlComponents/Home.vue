<template>
	<el-container>
		<el-header style="height:120px;">
			<el-row :gutter="10">
				<el-col :span="8">
					<headnavLeft></headnavLeft>
				</el-col>
				<el-col :span="12">
					<div class="box nav">
						<template>
							<el-menu :default-active="activeIndex" class="top-nav" mode="horizontal" @select="changeTab">
								<el-menu-item index="home">Home</el-menu-item>
								<el-menu-item index="second">Second</el-menu-item>
								<el-menu-item index="third">Third</el-menu-item>
								<el-menu-item index="fourth">Fourth</el-menu-item>
							</el-menu>
						</template>
					</div>  
				</el-col>
				<el-col :span="4">
					<headnavGirlRight></headnavGirlRight>
				</el-col>
			</el-row> 
		</el-header>
		<el-main>
			<el-row>
				<el-col :span="2">
					<div class="box">&nbsp;</div>
				</el-col>
				<el-col :span="6">
					<div class="box indroduce">
						<transition name="fadeLeft">
							<div id="home-indroduce" v-if="currentShow == 'home'">
								<b>这里是介绍哦:</b>
								<p>
									这里是漫画和插画的工作站哦~css图片居中分css图片水平居中和垂直居中两种情况，有时候还需要图片同时水平垂直居中，下面分几种居中情况分别介绍
								</p>
								<img class="tip" src="../../../static/image/tip.jpg" alt="">
							</div>
						</transition>
						<transition name="fadeLeft">
							<div id="second-indroduce" v-if="currentShow == 'second'">
								<i>it is {{second.indroduce}}</i>
							</div>
						</transition>
						<transition name="fadeLeft">
							<div id="third-indroduce" v-if="currentShow == 'third'">
								<i>it is {{third.indroduce}}</i>
							</div>
						</transition>
						<transition name="fadeLeft">
							<div id="fourth-indroduce" v-if="currentShow == 'fourth'">
								<i>it is {{fourth.indroduce}}</i>
							</div>
						</transition>
					</div>
				</el-col>
				<el-col :span="14">
					<div class="box content">
						<div id="home-content" v-if="currentShow == 'home'">
							<el-row>
								<el-col :span="12">
									<div class="photo">
										<h2>相簿</h2>
										<div class="photo-box">
											<span class="photo1">
												<img class="img-photo" src="../../../static/image/photo1.jpg" alt="">
											</span>
											<span class="photo2">
												<img class="img-photo" src="../../../static/image/photo2.jpg" alt="">
											</span>
											<span class="photo3">
												<img class="img-photo" src="../../../static/image/photo3.jpg" alt="">
											</span>
										</div>
									</div>
								</el-col>
								<el-col :span="12">
									<div class="comic">
										<h2>COMIC</h2>
										<div class="comic-box">
											<span class="comic1">
												<img src="../../../static/image/photo3.jpg" alt="">
											</span>
											<span class="comic2">
												<img src="../../../static/image/photo2.jpg" alt="">
											</span>
											<span class="comic3">
												<img src="../../../static/image/photo1.jpg" alt="">
											</span>
										</div>
									</div>
								</el-col>
							</el-row>
							<div class="next-box">
								<router-link to="/first">
									<div class="box">
										<span class="go">Go</span>
									</div>  
								</router-link>
							</div>
						</div>
						<div id="second-content" v-if="currentShow == 'second'">
							second
							<img src="../../../static/image/girl.jpg" alt="" />
							<div class="next-box">
								<router-link to="/second">
									<div class="box">
										<span class="go">Go</span>
									</div>  
								</router-link>
							</div>
						</div>
						<div id="third-content" v-if="currentShow == 'third'">
							third
							<div class="next-box">
								<router-link to="/third">
									<div class="box">
										<span class="go">Go</span>
									</div>  
								</router-link>
							</div>
						</div>
						<div id="fourth-content" v-if="currentShow == 'fourth'">
							fourth
							<div class="next-box" @click="goFourth"> 
								<router-link to="#">
									<div class="box">
										<span class="go">Go</span>
									</div>  
								</router-link>
							</div>
						</div>
					</div>
				</el-col>
				<el-col :span="2">
					&nbsp;
				</el-col>
			</el-row>
		</el-main>
		<el-footer style="height:20px">
			
		</el-footer>
	</el-container>
</template>

<script>
import Bus from '../../assets/js/eventBus'
export default {
	name: 'Home',
	data () {
		return {
			activeIndex: 'home',
			currentShow:"home",
			home:{
				indroduce:"homeHHH",
				content:""
			},
			second:{
				indroduce:"secondHHH",
				content:""
			},
			third:{
				indroduce:"thirdHHH",
				content:""
			},
			fourth:{
				indroduce:"fourthHHH",
				content:""
			}
		}
	},
	mounted:function(){
		var _self = this;
	},
	methods:{
		changeTab:function(key,keyPath){
			var _self = this;
			_self.currentShow = key;
		},
		goFourth:function(){
			var _self = this;
	  		if(this.$store.state.code === ''){
	  			// alert("请输入邀请码");
	  			Bus.$emit("transCode",true);
	  			// this.$store.dialog = true;
	  			// store.commit('showDialog', true);
	  		}else{
	  			_self.$router.push({path:'/fourth'});
	  		}
	  		//this.$store.state.code = "123";
		}
	}
}
</script>
<style scoped>
	.indroduce{
		height: 520px;
	 /* background: #ddd;*/
		position: relative;
	}
	img.tip{
		width: 50px;
		height: 50px;
		float: right;
		margin-right: 10px;
	}
	#home-indroduce,#second-indroduce,#third-indroduce,#fourth-indroduce{
		width: 300px;
		height: 300px;
		background: #37d9b5;
		position: absolute;
		top: 15px;
		right: -20px;
		box-shadow: 5px 5px #000;
	}
	.main .content{
		height: 520px;
		/*background: #999;*/
	}
	#home-content,#second-content,#third-content,#fourth-content{
		/*width: 800px;*/
		height: 500px;
		background: #fff;
	}
	/*------home-----*/
	#home-indroduce p{
		color: #236355;
		text-indent: 2em;
		padding: 0 5px;
		line-height: 30px;
	}
	#home-content{
		background: url('../../../static/image/girlHomeBg2.jpg');
		background-size: cover;
	}
	#home-content .photo-box,.comic-box{
		position: relative;
		text-align: center;
		background: #fff;	
	}
	#home-content .photo-box img,.comic-box img{
		max-width: 100%;
		max-height: 100%;
		height: auto;
		width: auto;
		vertical-align: middle;
	}
	#home-content .photo,.comic{
		/*border: 1px solid red;*/
	}
	#home-content .el-row{
		position: static;
	}
	#home-content h2{
		color: #37d9b5;
		text-align: center;
		text-shadow: 1px 1px #000;
	}
	.photo1,.photo2,.photo3,.comic1,.comic2,.comic3{
		display: block;
		width: 200px;
		height: 260px;
		line-height: 200px;
		left: 80px;
		top: 50px;
		position: absolute;
		border: 1px solid #236355;
	}
	#home-content .photo1,.comic1{
		background: #999;
		transform: rotate(15deg);
		-ms-transform: rotate(15deg);
		-webkit-transform: rotate(15deg);
		z-index: 20;
	}
	#home-content .photo1:hover,.comic1:hover{
		z-index: 100;
		box-shadow: 6px 6px #000;
	}
	#home-content .photo2,.comic2{
		background: #666;
		transform: rotate(30deg);
		-ms-transform: rotate(30deg);
		-webkit-transform: rotate(30deg);
		z-index: 40;
	}
	#home-content .photo2:hover,.comic2:hover{
		z-index: 100;
		box-shadow: 6px 6px #000;
	}
	#home-content .photo3,.comic3{
		background: #333;
		transform: rotate(-15deg);
		-ms-transform: rotate(-15deg);
		-webkit-transform: rotate(-15deg);
		z-index: 60;
	}
	#home-content .photo3:hover,.comic3:hover{
		z-index: 100;
		box-shadow: 6px 6px #000;
	}
	/*------home end-----*/
	.next-box{
		position: relative;
		top:345px;
		/*left: 800px;*/
		/*z-index: -1;*/
		left: 100%;
		width: 40px;
		height: 70px;
		padding-top:10px;
		text-align: center;
	 /* background: #666;*/
		overflow: hidden;
	}
	.next-box .box{
		width: 50px;
		height: 50px;
		margin-left: -25px;
		transform: rotate(45deg);
		box-shadow: 5px 5px #000;
		background: #37d9b5;
	}
	.next-box span.go{
		color: #000;
		float: right;
		margin-right: 8px;
		margin-top: 5px;
		transform: rotate(-45deg);
	}
</style>
