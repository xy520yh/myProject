<template>
  <div class="header">
      <div class="logo">
          <img src="../assets/logo.png" alt="logo">
      </div>
      <div class="nav-container">
          <ul>
              <li>首页</li>
              <li>关于</li>
              <li>联系我们</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "vheader",
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    height: 80px;
    background-color: #eeeeee;
}
.logo{
    float: left;
    margin-left: 30px;
    padding-top: 15px;
}
.logo img{
    height: 50px;
}
.nav-container{
    float: right;
    font-size: 16px;
    color: #666666;
}
ul{
    margin: 0;
    padding: 0;
}
li{
    display: inline-block;
    list-style: none;
    margin-right: 30px;
    padding: 30px 10px;
}

</style>
