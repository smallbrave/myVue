 var app = new Vue({
           el: '#app',
           data: {
             message: 'hello Vue!',
             seen: true,
             todos:[{
                text : '学习javascript'
             },{
                 text: '学习css'
             },{
                 text: '学习html'
             },{
                 text: '学习整个项目'
             }
             ]
           },
           methods: {
    //快排
               qsort: function(array){
                 var less = [];
                 var greater = [];  
                 var pivot;
                if(array.length<2){
                      return array;
                  }else{
                            pivot = array[0];
                      for(var val = 1; val<array.length;val++){
                          if(array[val]<pivot){
                             less.push(array[val]);
                          }else{
                              greater.push(array[val]);                             
                          }
                      }
                    //   console.log(less);
                    //   console.log(greater);
                      return this.qsort(less) +pivot+ this.qsort(greater);      
                  }
               }
           },
})