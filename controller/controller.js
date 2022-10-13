const connection = require("../Connection/connection");
const cnn = connection;
const { render } = require("ejs");
const controller = {};
const req = require("express/lib/request");

controller.index = (req, res, next) => {
  res.render("index");
};
controller.inicio = (req, res, next) => {
  res.render("index");
};
controller.formulario = (req, res, next) => {
  res.render("formulario");
};
controller.paginacion = (req, res, next) => {
  res.render("paginacion");
};
controller.index = async (req, res) => {
  cnn.query("SELECT * FROM producto", (err, resbd) => {
    if (err) {
      console.log("error en consultar productos");
      throw err;
    } else {
      res.render("index", { datos: resbd });
    }
  });
};
controller.cotizador = async (req, res) => {
  const articulo = req.body.nombre;
  const alto = req.body.hight;
  const ancho = req.body.width;
  const apertura = req.body.opening;
  const centro = req.body.core;
  const cuadro = req.body.frame;
  const acabado = req.body.acabado;
  const espesor = req.body.Thickness;
  const cantidad = req.body.cantidad;
  const cambio = req.body.precio;
  const codigo = req.body.codigo;
  const puerta = req.body.puerta;
  const marco = req.body.juan;
  var cudr, flete;
  if (cuadro == cambio) {
    cudr = "yes";
  } else {
    cudr = "no";
  }
  const total = cuadro * cantidad;
  console.log(
    "Estos son los valores del formulario",
    articulo,
    alto,
    ancho,
    apertura,
    centro,
    cudr,
    espesor,
    cantidad,
    total,
    codigo,
    marco
  );
  cnn.query(
    "INSERT INTO agregados SET ?",
    {
      producto: articulo,
      width: ancho,
      height: alto,
      opening: apertura,
      core: centro,
      frame: cudr,
      finish: acabado,
      thickness: espesor,
      quantity: cantidad,
      total: total,
      codigo: codigo,
      imgpuerta: puerta,
      imgframe: marco,
    },
    (err) => {
      if (err) {
        throw err;
      } else {
        res.redirect("guardados");
      }
    }
  );
};
controller.guardados = (req, res, next) => {
  cnn.query("SELECT * FROM agregados", (err, resbd) => {
    if (err) {
      throw err;
    } else {
      cnn.query(
        " SELECT ROUND(SUM(total),2) AS comprando FROM agregados",
        (err, results) => {
          if (err) {
            throw err;
          } else {
            cnn.query(
              "SELECT SUM(quantity) AS cantidad FROM agregados",
              (err, consulta) => {
                if (err) {
                  throw err;
                } else {
                  res.render("guardados", {
                    datos: resbd,
                    pagar: results,
                    quantity: consulta,
                  });
                }
              }
            );
          }
        }
      );
    }
  });
};
controller.eliguardatos = async (req, res) => {
  const doc = req.body.ii;
  console.log("hola mundo"+doc);
    conexion.query(
    'DELETE FROM agregados WHERE id="' + doc + '"',
    async (err) => {
      if (err) {
        console.log("error al eliminar en usuarios");
        throw err;
      } else {
        console.log("usuario eliminado");
        res.redirect("guardados");
      }
    }
  );
};
controller.detalle = (req, res, next) => {
  const id = req.body.dd;
  cnn.query("SELECT * FROM producto WHERE id=?", [id], async (err, results) => {
    if (err) {
      console.log("error en la conuslta de los detalles del producto");
      throw err;
    } else {
      res.render("/formulario", { datos: results });
    }
  });
  console.log("id del producto: " + id);
};
module.exports = controller;
