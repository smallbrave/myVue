new Vue({
    el: "#app",
    data: {
        status: false,
        keywords: '周杰伦',
        songs: [],
        netSong: "",
        hotComments: [],
        playing: false,
        sing: {
            source: 'https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
        }
    },
    methods: {
        getMusic() {
            var _this = this;
            var keyword = this.keywords;
            axios.get("http://localhost:3000/search?keywords=" + keyword)
                .then(function(res) {
                    _this.songs = res.data.result.songs;
                    console.log(res);
                }).catch(function(err) {
                    console.log(err);
                })
            console.log(this.keywords);
        },
        open(data) {
            var _this = this;
            var name = data.name;
            _this.getComments(data.id);
            var id = data.id;
            axios.get("http://localhost:3000/check/music?id=" + id)
                .then(function(res) {
                    console.log(res);
                }).catch(function(err) {
                    alert("暂无版权");
                    console.log(err);
                })
            axios.get("http://localhost:3000/song/detail?ids=" + id)
                .then(function(res) {
                    var source = res.data.songs[0].al.picUrl;
                    if (data) {
                        _this.sing = { source: source, name: name };
                    } else {
                        _this.sing = {
                            source: "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                            name: name
                        };
                    }
                }).catch(function(err) {
                    console.log(err);
                })
            _this.netSong = "https://music.163.com/song/media/outer/url?id=" + id + ".mp3";
        },
        statuschange() {
            this.status = !this.status;
        },
        getComments(id) {
            var _this = this;
            axios.get("http://localhost:3000/comment/music?id=" + id)
                .then(function(res) {
                    _this.hotComments = res.data.hotComments;
                    console.log(res);
                }).catch(function(err) {
                    console.log(err);
                })
        },
        play() {
            this.playing = true;
        },
        pause() {
            this.playing = false;
        }
    }
})



// http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=