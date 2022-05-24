/* eslint-disable no-unused-vars */
import ClassBox from '../data/db238.json'

function searchclass(name){
    var flag=0;
    for(var i=0;i<ClassBox.class.length;i++){
        if(name==ClassBox.class[i].name&&flag==0){
            flag = 1;
            return ClassBox.class[i];
        }
    }
    return -1;
}

export{
    searchclass
}