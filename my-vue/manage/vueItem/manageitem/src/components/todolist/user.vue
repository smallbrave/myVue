<template>
  <div class="user">
    <h1>个人中心</h1>
    <ul class="history" v-if="items.length > 0">
      <h2>项目申请记录</h2>
      <li v-for="(item,index) in items" :key="index">  
          <h3>{{item.title}}</h3>
          <span>{{ item.content }}</span>
          <span>{{ item.time.slice(0,10) }}</span>
          <span>{{ item.examine }}</span>
      </li>
    </ul>
    <h3 v-else>暂无提交记录</h3>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
      return {
        items: [
          // {
          //   title: 'xixihaha',
          //   content: "你不知道的是哦到i红单了客户i哦后哈啊来看分红i吵闹i杀红i",
          //   time: "2019-02-02",
          //   examine: "待审核"
          // },
          //           {
          //   title: 'xixihaha',
          //   content: "你不知道的是哦到i红单了客户i哦后哈啊来看分红i吵闹i杀红i",
          //   time: "2019-02-02",
          //   examine: "待审核"

          // },
          // {
          //   title: 'xixihaha',
          //   content: "你不知道的是哦到i红单了客户i哦后哈啊来看分红i吵闹i杀红i",
          //   time: "2019-02-02",
          //   examine: "待审核"
          // }
        ]
      }
    },
    mounted(){
      var _this = this;
      var usrId = this.$store.state.usrId || localStorage.getItem('usrId');
      console.log(usrId);
       axios.get("http://127.0.0.1:8888/down?usrId="+usrId)
       .then((res)=>{
         _this.items = _this.items.concat(res.data).reverse();
       }).catch((err)=>{
         console.log(err);
       })
    }
}
</script>
<style scoped>
  * {
    padding: 0;
  }
  .user {
    text-align: left;
  } 
  li {
    margin: 10px 0;
    list-style: none;
    display: flex;
    flex-direction: column;
  }
  li span:nth-child(2){
    height: 30px;
    /* 下面三行用于实现打点 */
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  li span:last-child {
    align-self: flex-end;
  }
</style>