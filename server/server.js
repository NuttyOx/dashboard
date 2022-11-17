import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

var connection = mysql.createConnection({
  host: process.env.DB_CONNECTION,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (err) throw err;
  console.log('You are now connected...');

  connection.query(
    'SELECT * FROM tickets WHERE status_id = 6',
    function (err, results) {
      if (err) throw err;
      console.log(results);
    }
  );
});
