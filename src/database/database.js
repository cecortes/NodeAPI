//* Import mysql module
import mysql from "promise-mysql";

//* Import config module
import config from "./../config";

//* Create the connection to the database
const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

//* Create getConnection function
const getConnection = () => {
  return connection;
};

//* Export the getConnection function
module.exports = {
  getConnection,
};
