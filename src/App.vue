<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
    html,body,#app{
      margin: 0;
      padding: 0;
      height: 100%; 
      width: 100%;
      border: none;
    }
   /* #app{
      background-size: cover;
      background: url('../static/image/girlHomeBg.jpg');
    }*/
</style>
