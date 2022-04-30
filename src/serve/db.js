var mysql = require('mysql')//引入mysql模块
const mysqlConfig = {
    host: 'localhost', // 新数据库连接时的域名
    user: 'root',//数据库用户名
    password: '123456', // root 密码
    database: 'test', // 数据库名
    port: '3306'//端口号
};
const pool = mysql.createPool({//创建连接池
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
    database: mysqlConfig.database,
    port: mysqlConfig.port,
    multipleStatements: true    // 多语句查询
});
module.exports=pool;