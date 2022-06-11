import ClassBox from '../data/db238.json'
import {GetNowTime} from '../components/timeSetter.vue'

function classRemind(name){
    var flag=0;
    var weekday=GetNowTime()[5]
    var endTimeHour = GetNowTime()[3]
    for(var i=0;i<ClassBox.class.length;i++){
        if(weekday==ClassBox.class[i].date){
            if(endTimeHour<ClassBox.class[i].endtimeHour){
                if(flag==0){
                    flag=1;
                    return ClassBox.class[i];
                }
            }
        }
    }
    return -1;
}

export{
    classRemind
}