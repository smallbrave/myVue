<template>
     <div id="register">
       <form @submit.prevent="remenber">
         <p>取个小名</p>
         <input type="text" v-model="usr" autofocus />
         <p>设置密码</p>
         <input type="password" v-model="passwd"/>
         <p>再次输入密码</p>
         <input type="password" v-model="repeat"/>
         <input type="submit" value="注册"/>
       </form>
     </div>
</template>
<script>
export default {
    name:'Register',
    data:function(){
      return {
        usr:"",
        passwd:"",
        repeat:""
      }
    },
    methods:{
      remenber:function(){
        if(this.passwd == this.repeat){
          window.console.log(this.usr);
          window.console.log(this.passwd);
          const info = { usr: this.usr, passwd: this.passwd};

           localStorage.setItem('message' ,JSON.stringify(info));
           this.usr = "";
           this.passwd = "";
           this.repeat = "";
           this.$router.push('./login');
           alert("注册成功");
        }else{
          alert("两次输入密码不一致");
          return false;
        }
      }
    }
}
</script>

<style scoped>
#register{
  width: 90%;
  margin: 5% auto;
}
#register form{
  text-align: left;
}
#register input{
  display: block;
  margin: 20px 30px; 
  height: 24px;
  width: 80%;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
}
input:hover{
  cursor: pointer;
}
#register input[type='submit']{
  height: 40px;
  font-size: 20px;
  background-color: aqua;
}
</style>