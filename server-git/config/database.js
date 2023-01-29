const mysql = require('mysql');
const Promise = require('promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test_react',
});

pool.getConnection(function (err, connection) {
  if (err) throw err; // not connected!
  console.log('Database connectend แล้วนะ');
  connection.release();
});

const query = (sql, args) => {
  return new Promise((resolve, reject) => {
    try {
      pool.getConnection((error, connection) => {
        if (error) {
          reject(error);
        }
        connection.query(sql, args, function (error, results) {
          if (error) {
            reject(error);
          }
          resolve(results);
        });
      });
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = { query };

// connection.end();
