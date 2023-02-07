const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: "31.220.54.202",
  database: "acem_cotizador",
  user: "acem_carrito",
  password: "Acemar1959-+",
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