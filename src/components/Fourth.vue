<template>
  <div>
    <h1>{{ msg }}</h1> 
    <router-link to="/">首页</router-link>
  </div>
</template>
<script>
export default {
  name: 'Fourth',
  data () {
    return {
      msg: 'Fourth'
    }
  }
}
</script>