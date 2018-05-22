const mysql = require('mysql');

const connection = mysql.createConnection(
    {
		 host: 'mysql.shekalug.org',
		  user: 'amestuardo',
		  password: '5sVXguJn',
		  database: 'amestuardo_db'
    }
)
module.exports = connection;
