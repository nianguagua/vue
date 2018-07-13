<template>
  <div>
    <h1>{{ msg }}</h1> 
    <router-link to="/boy">首页</router-link>
  </div>
</template>
<script>
export default {
  name: 'BoySecond',
  data () {
    return {
      msg: 'BoySecond'
    }
  }
}
</script>