const mysql = require("mysql");

/* const conexion = mysql.createConnection({
  host: "acemardistributors.com",
  database: "cotizador",
  user: "admin",
  password: "Acemars1959@",
}); */

const conexion = mysql.createConnection({
  host: "b7jslc2prndhihmsk0yy-mysql.services.clever-cloud.com",
  database: "b7jslc2prndhihmsk0yy",
  user: "uu1irodkuuevmegx",
  password: "RY9vNZNgxJpTFYo5P2EF",
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