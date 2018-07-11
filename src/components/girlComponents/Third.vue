<template>
  <div>
    <h1>{{ msg }}</h1> 
    <router-link to="/">首页</router-link>
  </div>
</template>
<script>
export default {
  name: 'Third',
  data () {
    return {
      msg: 'Third'
    }
  }
}
</script>