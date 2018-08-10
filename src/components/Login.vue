<template>
  <el-container>
    <el-header style="height:160px;"></el-header>
    <el-main>
      <div style="background:#333;padding: 60px;">
        <div id="login">
          <el-form ref="form" label-width="80px">
            <el-form-item label="账号">
              <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="el-button--primary" @click="submit2">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
    	username:"",
    	password:""
    }
  },
  methods: {
    noticeTip:function(type,msg) {
      this.$message({
          message: msg,
          type: type
        });
    },
    submit:function(){
    	var _self = this;
    	_self.$ajax({
    		method:"post",
    		url:'/login',
    		data:{
    			username:_self.username,
    			password:_self.password
    		}
    	})
    	.then(function(res){
        console.log(res);
  			if(res.data.code == 1){
  				var cur = _self.username;
          _self.$store.commit('login',cur);
          // var msg = res.data.message;
          // _self.noticeTip("success",msg);
          let redirect = decodeURIComponent(_self.$route.query.redirect || '/admin');
              _self.$router.push({
                path: redirect
            })
  			}else{
          var msg = res.data.message;
          _self.noticeTip("error",msg);
        }
  		})
  		.catch(function(err){
  			console.log("error"+err);
  		})
    },
    submit2:function(){
 			var result = true;
 			if(result){
 				var cur = this.username;
 				this.$store.commit('login',cur);
 				console.log(sessionStorage.user);
	    	let redirect = decodeURIComponent(this.$route.query.redirect || '/admin');
	          this.$router.push({
	            path: redirect
	          })
 			}
    }
  }
}

</script>
<style scoped>
  #login{
    width: 400px;
    margin: 0 auto;
    padding: 10px;
  }
  label.el-form-item__label{
    color: #75efe2;
  }
  .el-button{
    width: 100%;
  }
</style>