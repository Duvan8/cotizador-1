const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: "acemardistributor.com",
  database: "distacemar_quotationdoors",
  user: "distacemar_doors",
  password: "Acemar123+-",
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