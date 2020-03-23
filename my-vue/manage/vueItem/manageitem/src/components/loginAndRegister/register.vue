<template>
  <div class="register">
      <form-item value="注册" @doing='register'></form-item>
  </div>
    
</template>
<script>
import axios from 'axios'
import form from './form'

export default {
    components:{
        'formItem': form
    },
    methods: {
      register(data){
            var __this = this; 
              axios.get('http://127.0.0.1:8888/register?nickname='+data.nickname+"&password="+data.password)
              .then(function(response){
                  alert(response.data);
                  if(response.data == "注册成功")
                  __this.$router.push('login')
              }).catch(function(err){
                  console.log(err);
              })        
        }  
    },
}
</script>
<style scoped>

</style>