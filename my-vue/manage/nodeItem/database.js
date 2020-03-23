// database.js 数据库文件
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'manage'
})
connection.connect();
console.log("连接成功");

//获取所有的用户数据（密码和账号）
module.exports.getUsr = function(){
	return new Promise((resolve,reject)=>{
        var sql = 'select * from user';
        connection.query(sql,(err,data)=>{
	        if(err) 
	        	reject(err);
	        resolve(data);
        })		
    })
}

//用户注册，将用户插入数据库
module.exports.insertUsr = function(datalist){
	return new Promise((resolve,reject)=>{
        var sql = 
        ` insert into user (name,password,type) 
          values ('${datalist.nickname}','${datalist.password}',${0});
        `
        connection.query(sql,(err,data)=>{
    	    if(err){
                if(err.sqlState == 23000){
                     reject("用户名已存在，注册失败")  
                }
      	    } 
       	    resolve("注册成功");
        })		
	})
}

//将申请数据插入到数据库（按学号）
module.exports.insertData = function(datalist){
	return new Promise((resolve,reject)=>{
		var sql = 
		` insert into todolist (title,content,time,usrId,examine,id)
		  values('${datalist.title}','${datalist.content}','${datalist.time}',
		'${datalist.usrId}','${datalist.examine}','${datalist.id}');
		`
		connection.query(sql,(err,data)=>{
			if(err){
				reject("插入失败");
			}
			else 
				resolve("插入成功");
		})
	})
}

//获取申请数据（按学号获取）
module.exports.getData = function(usrId){
	return new Promise((resolve,reject)=>{
		var sql = `select * from todolist where usrId=${usrId.usrId}`;
		connection.query(sql,(err,data)=>{
			if(err){
				reject(err);
			}else {
				resolve(data);
			}
		})
	})
}

//获取所有的申请数据
module.exports.getAll = function(){
	return new Promise((resolve,reject)=>{
		var sql = `select * from todolist`;
		connection.query(sql,(err,data)=>{
			if(err){
				reject(err);
			}else {
				resolve(data);
			}
		})
	})
}

//通过传入一个参数，即唯一值：id，来实现局部更新数据库内容
module.exports.update = function(id){
	return new Promise((resolve,reject)=>{
		var sql = `update todolist set examine="已审核" where id="${id.id}"`;
		connection.query(sql,(err,data)=>{
			if(err){
				reject(err);
			}else {
				resolve(data);
			}
		})
	})
}