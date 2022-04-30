const db = require('./db');//引入连接mysql的db.js
db.getConnection((err,connection)=>{
        if(err)
        res.send(err);
        else
        {
            var sql = 'SELECT * FROM user ';
            connection.query(sql, (err, result) => {
                if(err)
                res.send(err);
                else
                res.send(result);
            })
        }
    })