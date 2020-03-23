<template>
  <div class="inputCon">
    <h1> 项目申报 </h1>
    <label>项目名称：</label>
    <input type="text" name="title" v-model="title" />
    <label>项目申请人学号：</label>
    <input type="number" name="usrId" v-model="usrId" />
    <label>项目详情：</label>
    <textarea name="content" v-model="content" ></textarea>
    <button @click="upIt">提交</button>    
  </div> 
</template>
<script>
import axios from 'axios'
import {checkCon} from '../../common';

export default {
    data(){
      return {
        title: '',
        content: '',
        usrId: '',
      }
    },
    methods: {
      upIt(){
        localStorage.setItem('usrId',this.usrId);
        this.$store.commit('addUsr',this.usrId);
        var time = new Date().toLocaleString();
        time = time.slice(0,9).replace(/\//g,'-');
        var id = new Date().getTime();
        console.log(id);
        var data = {
          title: this.title,
          content: this.content,
          usrId: this.usrId,
          time: time,
          examine: "待审核",
          id: id
        }
        if(checkCon(data)){
          axios.post("http://127.0.0.1:8888/up",JSON.stringify(data))
          .then((res)=>{
            if(res.data == '插入成功'){
              alert("上传成功");
            }else {
              alert("上传失败");
            }
          }).catch((err)=>{
            console.log(err);
          })
          alert("提交成功");
          this.title = '';
          this.content = '';
          this.usrId = '';
        }
      }
    }   
}
</script>
<style scoped>
  .inputCon {
    margin: 30px 10px;
    text-align: left;
  }

  input,textarea {
    display: block;
    margin: 10px;
    width: 100%;
    text-indent: .5em;
    font-size: 24px;
    outline: none;
    color: #000;
  }

  textarea {
    resize: none;
    height: 300px;
  }

  button {
    margin-left: 12px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    border: none;
    cursor: pointer;
    background-color: green;
  }
</style>