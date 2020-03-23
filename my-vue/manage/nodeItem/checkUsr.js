 // checkUsr.js
 //用户登录
var mysql = require('./database.js');
function checkUsr(inputUsr){
	return new Promise((resolve,reject)=>{
	mysql.getUsr()
	.then(function(res){
		var data = res;
		for(var val of data){
			if(val['name'] == inputUsr.nickname){
				if(val['password'] == inputUsr.password){
					resolve(val['type']);
				}
			}
		}
		reject("登录失败");
	}).catch(function(err){
        console.log("出错了");
	})
   })
    console.log("登录");
}

 module.exports.checkUsr = checkUsr;