<template>
  <div class="show">
      <div v-if='type == 0' class="students">
        <router-link to="/show/inputCon" tag="li" active-class='activeLi'>项目申报</router-link>
        <router-link to="/show/usr" tag="li" active-class='activeLi'>个人中心</router-link>
        <router-view></router-view>
      </div>
      <div v-else class="teacher">
         <ul class="history">
            <h2>项目申请记录</h2>
            <li v-for="(item,index) in items" :key="index">  
                <h3>{{item.title}}</h3>
                <span>{{ item.content }}</span>
                <span>{{ item.time.slice(0,10) }}</span>
                <button @click="check(item)">{{ item.examine }}</button>
            </li>
         </ul>
      </div>
  </div>    
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            type: '',
            items: []
        }
    },
    methods: {
        check(val){
           val.examine = "已审核";
           axios.get("http://127.0.0.1:8888/check?id="+val.id)
           .then((res)=>{
               console.log(res);
           }).catch((err)=>{
               console.log(err);
           })
        }  
    },
    mounted() {
        this.type = this.$store.state.type || localStorage.getItem("type");
        console.log(this.type);
        var _this = this;
        axios.get("http://127.0.0.1:8888/getAll")
        .then((res)=>{
            _this.items = _this.items.concat(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
}
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .show {
        margin: 0 auto;
        width: 400px;
    }
    .students > li {
        display: inline-block;
        width: 200px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 24px;
        background-color: green;
        color: #fff;
        cursor: pointer;
    }
    .students .activeLi {
        background-color: cadetblue;
    }

    .teacher li {
        margin: 10px;
        display: flex;
        flex-direction: column;
        width: 100%;
        list-style: none;
        text-align: left;
    }
    .teacher li span:nth-child(2) {
       height: 30px;
       /* 下面三行用于实现打点 */
       white-space: nowrap;
       text-overflow: ellipsis;
       overflow: hidden;
    }
    .teacher li button {
        margin-top: -20px;
        align-self: flex-end;
        width: 80px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border: none;
        cursor: pointer;
        color: #fff;
        background-color: green;
    }
</style>