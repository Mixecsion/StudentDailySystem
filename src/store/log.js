var logs=[]

function storelog1(log){
    logs.push("用户查询课程："+log);
    localStorage.setItem("logs", logs);
}

function storelog2(log){
    logs.push("用户导航搜索："+log);
    localStorage.setItem("logs", logs);
}

function storelog3(){
    logs.push("用户添加日程");
    localStorage.setItem("logs", logs);
}

function storelog4(){
    logs.push("用户查看作业列表");
    localStorage.setItem("logs", logs);
}

export{
    storelog1,storelog2,storelog3,storelog4,logs
}