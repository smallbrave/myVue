new Vue({
    el: "#app",
    data: {
        hots: ["北京", "上海", "深圳", "广州"],
        city: '',
        lists: [{
            "city": '重庆',
            "wea": '阴',
            "tem1": 20,
            "tem2": 10,
            "week": '星期日'
        }]
    },
    methods: {
        search: function() {
            var _this = this;
            var val = "&city=" + this.city;
            axios.get("https://tianqiapi.com/api?version=v6&appid=99687922&appsecret=20SRzmQ0" + val)
                .then(function(response) {
                    var res = response.data;
                    _this.lists.splice(0, 1, res);
                    _this.city = '';
                    console.log(res);
                }).catch(function(err) {
                    console.log(err);
                })
        },
        searchItem(data) {
            var _this = this;
            var val = "&city=" + data;
            axios.get("https://tianqiapi.com/api?version=v6&appid=99687922&appsecret=20SRzmQ0" + val)
                .then(function(response) {
                    var res = response.data;
                    _this.lists.splice(0, 1, res);
                }).then(function(err) {
                    console.log(err);
                })
        }
    },
})