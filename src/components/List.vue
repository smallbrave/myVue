<template>
    <div id="list">
        <ul class="message" v-for="(list,index) in lists" :key="index">
            <li>{{ list.title }}</li>
            <li>{{ list.content }}</li>
        </ul>
    </div>
</template>

<script>
import store  from '@/store'
export default {
    name: 'List',
    store,
    computed:{
     lists (){
       return store.state.lists
     }  
  }
}
</script>

<style scoped>
#list .message{
  margin: 20px;
  list-style: none;
  text-align: left;
    text-indent: .5em;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 6px #ccc;
}
.message li:nth-of-type(1){
  text-indent: 1em;
  border-bottom: 1px solid #ccc;
}
</style>