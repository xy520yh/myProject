<template>
  <div id="app">
    <div class='top'>
      <h1>豆瓣</h1>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{item.message}}</li>
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


</style>
