<template>
    <div>
      <h1>{{ msg }}</h1>
      <ul>
        <li v-for="re in arr">{{re}}</li>
      </ul>
      <router-link to="/about">about</router-link> 
      <div id="top">
        <test></test> 
      </div>
    </div>
    
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
      arr:["a","b","c","d"]
    }
  }
}
</script>
