Vue.component('todo-item',{
    props:['todo'],
  //属性
    template:'<li> {{todo.text}} </li>'
})
Vue.component('button-counter',{
    data:function(){
        return{
            count: 0
        }
    },
//在此，data必为函数而不可以是普通对象
    template:'<button @click="count++">you have clicked {{ count }} times.</button>'
//关于v-on的缩写：‘@’，v-bind的缩写：‘：’
})
Vue.component('blog-post',{
    props: ['post'],
// 每一个组件元素必须只能有一个根元素
    template: `<div class='blog-post'>
               <h3> {{ post.text }} </h3>
               <button @click="$emit('enlarge-text')"> Enlarge Text </button>
               <div v-html='post.content'></div>
               </div>`
})
//关于在组件上使用v-model
Vue.component('custom-input',{
    props: ['value'],
    template:`
       <div class='custom-input'>
       <p>{{ value }}</p>
       <input
         v-bind:value='value'
         v-on:input="$emit('input',$event.target.value)"
       >
       </div>
    `
})
//通过插槽分发内容
Vue.component('alert-box',{
    template:`
       <div class="demo-alert-box">
       <strong> ERROR! </strong>
       <slot></slot>   
       </div>
    `
    //slot 元素 ，用于分发内容，作为插槽；可在此处的slot中添加一个值，来作为一个初始值，如果后期
    //有添加内容，则添加的内容会自动将初始值给替换掉。
})
//插槽的使用,关于对属性的访问：slot中无法直接访问来自于父组件的属性，需要先绑定该属性
//绑定在 <slot> 元素上的特性被称为插槽 prop。
Vue.component('base-layout',{
    props:['searchText'],
    template:`
    <div class="container">
      <header>
        <slot name="header" :searchText="searchText" >
         </slot>
      </header> 
      <main>
       <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
    `
})


var app = new Vue({
    el:'#app',
    data:{
        postFontSize:1,
        searchText:'xixihaha',
        list:[
            {id:0,text:'蔬菜',content:'生活如酒，或芳香，或浓烈，因为诚实，它变得醇厚；'+
            '生活如歌，或高昂，或低沉，因为守信，它变得悦耳； 生活如画，或明丽，或素雅，因为诚信，它变得美丽。'},
            {id:1,text:'零食',content:'若能掬起一捧月光，我选择最柔和的；若能采来香山红叶，'+
            '我选择最艳丽的；若能摘下满天星辰，我选择最明亮的。也许你会说，我的选择不是最好，但我的选择，我相信。'},
            {id:2,text:'水果',content:'人生弯弯曲曲水，世事重重叠叠山。热情去奔跑，'+
            '去超越，然后才能拾掇失意后的坦然，挫折后的不屈，困苦艰难后的从容。'}
        ]
    }
})
