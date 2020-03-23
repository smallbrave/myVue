<template>
  <div class="sameForm">
     <label for="nickname">账号：</label>
     <input type="text" id="nickname" v-model="nickname" name="nickname" />
     <label for="password">密码：</label>
     <div class="password">
     <input type="password" id="password" v-model="password" ref="detail" name="password" />
     <span class="iconfont icon-xiaoyanjing" @click="toShow"></span>
     </div>
     <button @click="todo">{{value}}</button>
  </div>
</template>
<script>
import {checkUsr} from '../../common'
export default {
   props: ['value'],
   data() {
      return {
         nickname: '',
         password: '',
      }
   },
   methods: {
      todo() {
         let item = {
            'nickname': this.nickname,
            'password': this.password,
         };
         if(checkUsr(item)){
            localStorage.setItem('usrId',this.nickname);
            this.$store.commit('addUsr',this.nickname);
            this.$emit('doing',item); 
            this.nickname = '';
            this.password = '';
         }
      },
      toShow() {
         var type = this.$refs.detail.type;
         if(type == 'text'){
             this.$refs.detail.type = 'password';
         }else {
            this.$refs.detail.type = 'text';
         }  
      }
   }
}
</script>
<style scoped>
@import '../../style/style.css';
   .sameForm {
      margin: 100px auto;
      padding: 40px;
      width: 600px;
      text-align: left;
      background-color: lightsteelblue;
   }
   .sameForm input {
      display: block;
      margin: 10px auto;
      width: 400px;
      height: 30px;
      line-height: 30px;
      font-size: 24px;
      text-indent: .5em;
      outline: none;
   }
   .sameForm label {
      margin-left: 100px;
   }
   .sameForm button {
      display: block;
      margin: 40px auto;
      width: 400px;
      height: 40px;
      background-color: lightgreen;
   }
   .password {
      position: relative;
   }
   .password span {
      position: absolute;
      top: 10px;
      right: 120px;
      cursor: pointer;
   }
</style>