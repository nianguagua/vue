<template>
  <el-container>
    <el-header style="height:160px;"></el-header>
    <el-main>
      <div style="background:#ccc;padding: 60px;">
        <div id="login">
          <el-form ref="form" label-width="80px">
            <el-form-item label="账号">
              <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="submit2">登录</el-button>
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
    submit:function(){
    	var _self = this;
    	_self.$ajax({
    		method:"post",
    		url:'/loginTest.php',
    		data:{
    			name:_self.username,
    			pass:_self.password
    		}
    	})
    	.then(function(res){
  			if(res){
  				store.commit(login);
  				_self.$router.go("/admin");
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
	    	let redirect = decodeURIComponent(this.$route.query.redirect || '/');
	          this.$router.push({
	            path: redirect
	          })
 			}
      
      /*
      this.$ajax.post('/intelliffic_web/httpProxy/getData',{
        "type": "post",
        "url":"http://10.10.100.204:8090/intellirt/get_acs_states",
        "json":'{"count":1000000,"index":1,"user":"nian1","ver":"1.1"}',
        "time":new Date().getTime()
      })
      .then(function(res){
        console.log(res);
      })
      .catch(function(err){
        console.log(err);
      })
      */
    }
  }
}

</script>
<style scoped>
  #login{
    width: 400px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 4px;
    background: #ccc;
  }
</style>