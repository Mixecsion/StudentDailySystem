var logs=[]

function storelog1(log){
    logs.push(log);
    localStorage.setItem("logs", JSON.stringify(logs));
}

export{
    storelog1,logs
}