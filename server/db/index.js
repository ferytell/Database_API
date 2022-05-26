const mysql = require('mysql');


 const pool = mysql.createPool({
    connectionLimit:10,
    password: 'explosion',
    user: 'root',
    database: 'bangkit',
    host: 'localhost',
    port: '5000',
});

    

let articledb ={};

articledb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM article`, (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

articledb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM article WHERE id = ?`,[id], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};


module.exports = articledb;