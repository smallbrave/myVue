//web服务器
let http = require('http');
let urls = require('url');
let mysql = require('./database.js');
let check = require('./checkUsr.js')

let server = http.createServer();
server.on('request', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let url = urls.parse(req.url, true);
    let pathname = url.pathname;
    if (pathname == '/') {
        res.end("hello world");
    } else if (pathname == '/login') {
        let datalist = '';
        req.on('data', (data) => {
            datalist += data;
        })
        req.on('end', () => {
            check.checkUsr(JSON.parse(datalist))
                .then(function(response) {
                	console.log("登录成功");
                    res.end(response.toString());
                }).catch(function(err) {
                    console.log(err);
                    res.end(err + ",请确认你是否已经注册");
                })
        })
    } else if (pathname == '/register') {
        let params = url.query;
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF8'
        })
        mysql.insertUsr(params)
            .then(function(response) {
                console.log(response);
                res.end(response);
            }).catch(function(err) {
                console.log(err);
                res.end("err");
            })
    } else if (pathname == '/up') {
    	let datalist = '';
    	req.on('data',(data) => {
    		datalist += data;
    	})
    	req.on('end',() => {
    		console.log(datalist);
    		mysql.insertData(JSON.parse(datalist))
    		.then((response)=>{
    			console.log(response);
    			res.end(response);
    		}).catch((err)=>{
        	res.end("err");
      	    })
    	})
    } else if (pathname == '/down') {
        let param = url.query;
        mysql.getData(param)
        .then((response)=>{
        	res.end(JSON.stringify(response));
        }).catch((err)=>{
        	res.end("err");
        })
    } else if (pathname == '/getAll') {
    	mysql.getAll()
    	.then((response)=>{
    		res.end(JSON.stringify(response));
    	}).catch((err)=>{
    		res.end("err");
    	})
    } else if (pathname == '/check') {
    	let param = url.query;
    	mysql.update(param)
    	.then((response)=>{
    		res.end("ok");
    	}).catch((err)=>{
    		res.end("err");
    	})
    }
})
server.listen(8888);
// console.log("服务器已就绪");