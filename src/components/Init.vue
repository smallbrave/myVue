<template>
  <div id="init">
         <router-view></router-view>
         <input type="submit" value="登录" @click="login" />
         <input type="submit" value="注册" @click="register"/>
  </div>
</template>

<script>
export default {
  name: 'Init',
  data:function(){
    return{
        usr:"",
        passwd:"", 
    }
  },
  methods:{
    login(){
       this.$router.push({path: 'login'});
    },
    register(){
       this.$router.push({path: 'register'});
    } 
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#init{
  width: 90%;
  margin: 5% auto;
}
#init form{
  text-align: left;
}
#init input{
  display: block;
  margin: 20px 30px; 
  height: 24px;
  width: 80%;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
}
#init input[type='submit']{
  display: inline-block;
  margin-top: 40px;
  width: 100px;
  height: 40px;
  font-size: 20px;
  border-radius: 5px;
  background-color: aqua
}
</style>
