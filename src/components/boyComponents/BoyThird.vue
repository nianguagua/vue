<template>
  <div>
    <h1>{{ msg }}</h1> 
    <router-link to="/boy">首页</router-link>
  </div>
</template>
<script>
export default {
  name: 'BoyThird',
  data () {
    return {
      msg: 'BoyThird'
    }
  }
}
</script>