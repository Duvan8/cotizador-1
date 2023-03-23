const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: "31.220.54.202",
  database: "cotizador",
  user: "acemar",
  password: "Acemar1959+-",
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