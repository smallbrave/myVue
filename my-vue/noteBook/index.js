var vm = new Vue({
    el: '#app',
    data: {
        job: '',
        lists: ["写代码", "吃饭饭", "睡觉觉"]
    },
    methods: {
        deleteThis: function(index) {
            this.lists.splice(index, 1);
        },
        deleteAll() {
            var len = this.lists.length;
            this.lists.splice(0, len);
        },
        add() {
            this.lists.push(this.job);
            this.job = '';
        }
    }

})