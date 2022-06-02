const mysql = require('mysql');
const { 
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PWD,
    MYSQL_DB
  } = process.env;

// CREATES A DB CONNECTION
const DB = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PWD,
  database: MYSQL_DB,
  charset: 'utf8mb4',
})

// CONNECTS DB
DB.connect(err => {
  if (err)
    console.log(err);
  else
    console.log(`Connected to database ${ MYSQL_DB }`);
});


const query = (q, data) => {
  return new Promise((resolve, reject) => {
    DB.query(q, data, (err, res) => (err ? reject(err) : resolve(res)))
  })
}

module.exports = query;