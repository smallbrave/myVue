<template>
    <div id="usr">
        <p class="title">标题</p>
        <input type="text" v-model="title" autofocus/>
        <p class="title">内容</p>
        <textarea v-model="content"></textarea>
        <button @click="complete"> 完成 </button>
        <button @click="cancel"> 取消 </button>
    </div>
</template>

<script>
import store from '@/store';
export default {
    name: 'Usr',
    store,
    data:function(){
        return {
            title:"",
            content: ""
        }
    },
    methods:{
        complete(){
            store.commit('add',{
                title: this.title,
                content: this.content
            });
            window.console.log({
                title: this.title,
                content: this.content
            });
            alert("添加成功");
            this.title = "";
            this.content = "";
        },
        cancel(){
            this.title = "";
            this.content = ""
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0; 
}
#usr{
    width: 100%;
    text-align: center;
}
#usr .title{
    text-align: left;
    margin-top: 10px;
    text-indent: 1em;
}
input,textarea{
    border: 1px solid #ccc;
    border-radius: 5px;
}
input{
   display: inline-block;
   width: 90%;
   text-indent: 1em;
   outline: none;
   height: 30px;
}
textarea{
    display: inline-block;
    width: 95%;
    height: 300px;
    text-indent: 1em;
    resize: none;
    outline: none;
}
button{
    margin-top: 60px;
    margin-right: 20px;
    display: inline-block;
    width: 120px;
    height: 30px;
    border: none;
    border-radius: 5px;
    color: #fff;
}
button:nth-of-type(1){
    background-color: green;
    border: 1px solid green;
}
button:nth-of-type(2){
    background-color: #fff;
    color: green;
    border: 1px solid green;
}
</style>