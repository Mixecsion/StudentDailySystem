/* eslint-disable no-unused-vars */
var x = new Date();
var hour,minute,date,month,year,week;
year = x.getFullYear()
month = x.getMonth()
date = x.getDate()
hour = x.getHours()
minute = x.getMinutes()
//初始化
var a = 6;
var ini;
function start()//开始
{
  ini=setInterval(timer,1000);
}
function timer(){
   // second++;
  /*if(second>=60){
    second=0;
    minute=minute*1+1;
  }*/

  minute=minute+6;//以计算机的10秒作为模拟系统的1小时

  if(minute>=60){
    minute=0;
    hour=hour*1+1;
  }

  if(hour>=24){
    hour=0;
    date=date*1+1;
  }


  switch(month){
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:{
          if(date>=32){
              date = 1;
              month = month*1+1;
          }
          break;
      }
      case 4: case 6: case 9: case 11:{
          if(date>=31){
              date = 1;
              month = month*1+1;
          }
          break;
      }
      case 2:{
          if(date>=29){
              date = 1;
              month = month*1+1;
          }
          break;
      }
  }

  if(month>=13){
    month=1;
    year=year*1+1;
  }


  week = new Date(year+"-"+month+"-"+date).getDay();
    if(week==1)
        week="Mon"
    else if(week==2)
        week="Tue"
    else if(week==3)
        week="Wed"
    else if(week==4)
        week="Thu"
    else if(week==5)
        week="Fri"
    else if(week==6)
        week="Sat"
    else if(week==0)
        week="Sun"
  
}
function pause(){
    clearInterval(ini);
}
function forward(){
    date = date+1;
    
      switch(month){
          case 1: case 3: case 5: case 7: case 8: case 10: case 12:{
              if(date>=32){
                  date = 1;
                  month = month*1+1;
              }
              break;
          }
          case 4: case 6: case 9: case 11:{
              if(date>=31){
                  date = 1;
                  month = month*1+1;
              }
              break;
          }
          case 2:{
              if(date>=29){
                  date = 1;
                  month = month*1+1;
              }
              break;
          }
      }
    
      if(month>=13){
        month=1;
        year=year*1+1;
      }
    
      week = new Date(year+"-"+month+"-"+date).getDay();
      if(week==1)
          week="Mon"
      else if(week==2)
          week="Tue"
      else if(week==3)
          week="Wed"
      else if(week==4)
          week="Thu"
      else if(week==5)
          week="Fri"
      else if(week==6)
          week="Sat"
      else if(week==0)
          week="Sun"
}
function back(){
    date = date-1;
    
      switch(month){
          case 2: case 4: case 6: case 8: case 9: case 11: case 1:{
              if(date<1){
                  date = 31;
                  month = month-1;
              }
              break;
          }
          case 5: case 7: case 10: case 12:{
              if(date<1){
                  date = 30;
                  month = month-1;
              }
              break;
          }
          case 3:{
              if(date<1){
                  date = 28;
                  month = month-1;
              }
              break;
          }
      }
    
      if(month<1){
        month=12;
        year=year-1;
      }
    
      week = new Date(year+"-"+month+"-"+date).getDay();
      if(week==1)
          week="Mon"
      else if(week==2)
          week="Tue"
      else if(week==3)
          week="Wed"
      else if(week==4)
          week="Thu"
      else if(week==5)
          week="Fri"
      else if(week==6)
          week="Sat"
      else if(week==0)
          week="Sun"
}

export{
    start,timer,pause,forward,back,year,minute,month,week,date,hour
}
