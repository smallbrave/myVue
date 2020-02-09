<template>
     <div id="login">
       <form   @submit.prevent="login">
         <p>账号</p>
         <input type="text" v-model="usr" autofocus/>
         <p>密码</p>
         <input type="password" v-model="passwd"/>
         <input type="submit" value="登录"/>
       </form>
     </div>
</template>
<script>
export default {
    name:'Login',
    data:function(){
      return {
        usr:"",
        passwd:""
      }
    },
    methods:{
        login: function(){
        var item =JSON.parse(localStorage.getItem("message"));
        if(this.usr == item.usr){
          if(this.passwd == item.passwd){
            this.$router.push('./home/list');
            alert("登录成功");
          }else{
            alert("密码错误");
            this.passwd = "";
          }
        }else{
            alert("你是不是还没注册?");
            this.usr = "";
            this.passwd = "";
         }
    }
  }

}
</script>

<style scoped>
#login{
  width: 90%;
  margin: 5% auto;
}
#login form{
  text-align: left;
}
#login input{
  display: block;
  margin: 20px 30px; 
  height: 24px;
  width: 80%;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
}
#login input[type='submit']{
  height: 40px;
  font-size: 20px;
  background-color: aqua
}
</style>