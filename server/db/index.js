const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit:10,
    password: 'Welcome1',
    user:'root',
    database:'leMellows',
    host: 'localhost',
    port:3306
});

let lemellowsDB = {};

lemellowsDB.all = () => {

    return new Promise((resolve, reject)=>{
        pool.query('select  * from Log_User', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    });
};

module.exports=lemellowsDB;