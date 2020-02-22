 var app = new Vue({
     el:'#app',
     data:{
         box:{
             name:'',
             age:20,
             sex:'female'
         },
        items: [{
            name: 'Jack',
            age: 30,
            sex: 'Male'
        }, {
            name: 'Bill',
            age: 26,
            sex: 'Male'
        }, {
            name: 'Tracy',
            age: 22,
            sex: 'Female'
        }, {
            name: 'Chris',
            age: 36,
            sex: 'Male'
        }]
     },
     methods: {
         add: function(){
             this.items.push(this.box);
              this.box={name:'',age: 20,sex:'female'};
         },
         deleteThis: function(index){
             console.log(index);
            this.items.splice(index,1);
         }

     },
 })
 