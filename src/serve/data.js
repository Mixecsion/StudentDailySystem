var iconv = require('iconv-lite');
var fs = require('fs');
 
function loadjson(filepath)
{
    var data;
 
    try{
 
        var jsondata = iconv.decode(fs.readFileSync(filepath, "binary"), "utf8");
 
        data = JSON.parse(jsondata);
 
        console.log(data);
    }
    catch(err)
    {
        console.log(err);
    }
 
    return data;
}
 
 
function savejson(filepath, data)
{
    var datastr = JSON.stringify(data, null, 4);
 
    if (datastr)
    {
        try{
            fs.writeFileSync(filepath, datastr);
        }
        catch(err)
        // eslint-disable-next-line no-empty
        {   
        }
    }
}
 
var data = loadjson('E:/code/StudentDailySystem/student-daily/src/data/db238.json');

for(var i=0; i<data.class.length; i++)
{
    if(data.class[i].name == "计算机组成原理")
    {
        data.class[i].amount = 3;
    }
}
 
savejson('E:/code/StudentDailySystem/student-daily/src/data/db238.json', data)

