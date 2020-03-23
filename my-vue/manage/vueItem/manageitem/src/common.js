var checkUsr = function(data) {
    if (data.nickname == '') {
        alert("昵称不能为空");
        return false;
    } else if (data.password == '') {
        alert("密码不能为空");
        return false;
    } else if (data.nickname == data.password) {
        alert("密码和昵称不可以一样");
        return false;
    } else {
        return true;
    }
}

var checkCon = function(data) {
    if (data.title == '') {
        alert("标题是必须的");
        return false;
    } else if (data.content.length <= 0) {
        alert("正文为空");
        return false;
    } else if (data.content.length >= 200) {
        alert("文章过长");
        return false;
    } else {
        return true;
    }
}
export { checkUsr, checkCon };