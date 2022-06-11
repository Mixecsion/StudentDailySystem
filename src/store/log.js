var logs=[]

function storelog1(log){
    logs.push("用户查询课程："+log);
    localStorage.setItem("logs", logs);
}

export{
    storelog1,logs
}