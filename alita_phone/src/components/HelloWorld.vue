<template>
  <div >
    <input v-modle='inputValue'>
    <button v-on:click='hanle'> 提交</button>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
data(){

   return {
      inputValue:'',
      list:[]
   }
},
methods:{
  hanle(){
    this.list.push(this.inputValue)
    this.inputValue=''
  }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #f00;
}

.one{width:100px; height:100px;border:1px solid #f00;}
</style>
