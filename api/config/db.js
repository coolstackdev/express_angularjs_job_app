var mysql = require('mysql');


if (process.env.NODE_ENV == 'prod') {
    var connection = mysql.createConnection({
        host: 'taskoli.ct18thcv5utp.ca-central-1.rds.amazonaws.com',
        port: '3306',
        user: 'root',
        password: 'Therock1684',
        database: 'taskoli_prod',
        connectionLimit: 20,
        multipleStatements: true
    });
} else {
    var connection = mysql.createConnection({
        host: 'taskoli.ct18thcv5utp.ca-central-1.rds.amazonaws.com',
        port: '3306',
        user: 'root',
        password: 'Therock1684',
        database: 'taskoli_dev',
        connectionLimit: 20,
        multipleStatements: true
    });
}


connection.connect(function (err) {
    if (err) {
        console.log("Error connecting database ... \n\n");
        throw err;
    } else {
        console.log("Database is connected ... \n\n");
    }
});

module.exports = connection;