<template>
  <div class="login">
      <form-item value="登录" @doing='login'></form-item>
  </div>  
</template>
<script>
import axios from 'axios'
import form from './form'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF8';
export default {
    components:{
        'formItem': form
    },
    methods: {  
      login(data){
          var _this = this;
              axios.post('http://127.0.0.1:8888/login',JSON.stringify(data))
              .then(function(response){
                  _this.$store.commit('addType',response.data);
                  localStorage.setItem('type',response.data);
                  if(response.data >= 0){
                  alert("登录成功");
                 _this.$router.push({
                     path: `/show`,
                 });
                  }else {
                      alert("登录失败");
                  }
              }).catch(function(err){
                  console.log(err);
              })
      }  
    },
}
</script>
<style scoped>

</style>