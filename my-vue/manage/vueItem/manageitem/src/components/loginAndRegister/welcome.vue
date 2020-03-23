<template>
  <div class="register">
      <router-link to="/login" >登录</router-link>
      <router-link to="/register">注册</router-link>
  </div>   
</template>
<script>
export default {
    name: 'welcome'
}
</script>
<style scoped>
    a {
        display: inline-block;
        margin: 0 20px;
        width: 60px;
        height: 30px;
        line-height: 30px;
        color: #000;
        text-decoration: none;
        background-color: mediumaquamarine;
        border: 1px solid #ccc;
    }
</style>