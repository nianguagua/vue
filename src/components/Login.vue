<template>
 <div>
    login123
    Name: <input type="text" v-model="username">
    Pass: <input type="password" v-model="password">
    <button @click="submit2">submit</button>
 </div>
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
    }
  }
}

</script>
<style scoped>

</style>