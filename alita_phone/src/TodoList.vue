<template>
  <div id="app">
    <div class='top'>
      <h1>豆瓣</h1>
      <ul>
        <li v-for="item in items">{{item.message}}</li>
      </ul>

    </div>
   
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data(){
    return {
      items:[
      {message:'电影'},
      {message:'图书'},
      {message:'广播'},
      {message:'小组'}
    ]
  }
  }
}
</script>

<style>
h1{padding-left:10px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 width:640px; margin:0 auto;
}
</style>
