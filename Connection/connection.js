const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: "localhost",
  database: "cotizador",
  user: "root",
  password: "",
});

conexion.connect(function (error) {
  if (error) {
    console.log("error en la conexion");
    throw error;
  } else {
    console.log("CONEXION EXITOSA");
  }
});

module.exports = conexion;