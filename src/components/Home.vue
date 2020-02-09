<template>
  <div id="home">
     <router-view/> 
      <ul class="footer">
      <router-link to="list"><li :class="{'checked':checkedOne}"  @click="toggleOne">新闻主页</li></router-link>
      <router-link to="usr"><li :class="{'checked':checkedTwo}" @click="toggleTwo">个人中心</li></router-link>
      </ul> 
  </div>
</template>

<script>
import store  from '@/store'
export default {
  name: 'Home',
  store,
  data:function(){
    return{
      checkedOne:true,
      checkedTwo:false,
      }
  },
  methods:{
    toggleOne(){
      this.checkedOne = true;
      this.checkedTwo = false;
      
    },
    toggleTwo(){
      this.checkedOne = false;
      this.checkedTwo = true;
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#home .footer{
  position: fixed;
  bottom: 0px;
  list-style: none;
  width: 100%;
  height: 40px;
  color: #fff;
}
.footer li{
  display: inline-block;
  width: 50%;
  line-height: 40px;
}
.checked{
  background-color: aquamarine;
}
a {
  color: #000;
  text-decoration: none;
}
a:hover{
  color: none;
}
a:active{
  color: none;
}
</style>
