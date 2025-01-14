const express = require("express");
const { query } = require("../Connection/connection");
const connection = require("../Connection/connection");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/", controller.login);
router.get("/login", controller.login);
router.get("/account", controller.account);
router.get("/index", controller.index);
router.get("/pisos", controller.pisos);
router.get("/formulario", controller.formulario);
router.get("/imprimir", controller.pedido);
router.get("/flooring", controller.flooring);
router.get("/lista", controller.lista);
router.get("/facturas", controller.facturas);
router.get("/vacio", controller.vacio);
router.get("/precios", controller.precios);
router.get("/inventario", controller.inventario);
router.post("/facturas", controller.facturas);
router.post("/index", controller.index);
router.post("/prueba", controller.prueba);
router.post("/piso", controller.piso);
router.post("/client", controller.client);
router.post("/pisos", controller.pisos);
router.post("/validarlogin", controller.validarlogin);
router.post("/elimcarrito", controller.elimcarrito);
router.post("/finalizar", controller.finalizar);
router.post("/actprec", controller.actprec);
router.post("/actinv", controller.actinv);
router.post("/base", controller.base);

router.get("/calcpdf", controller.calcpdf);

router.get("/formulario/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM puertas WHERE id=?",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        connection.query(
          "SELECT * FROM codigo WHERE id = ?",
          [id],
          (err, resbd) => {
            if (err) {
              throw err;
            } else {
              nocache(res);
              res.render("formulario", { datos: results[0], cod: resbd[0] });
            }
          }
        );
      }
    }
  );
});
router.get("/flooring/:id", (req, res) => {
  const id = req.params.id;
  const doc = req.session.docu;
  connection.query("SELECT * FROM pisos WHERE id=?", [id], (err, results) => {
    if (err) {
      throw err;
    } else {
      nocache(res);
      connection.query(
        "SELECT * FROM pisosprec WHERE idcliente='" +
          doc +
          "' AND idpisos='" +
          [id] +
          "'",
        (err, prec) => {
          res.render("flooring", { datos: results[0], precio: prec[0] });
        }
      );
    }
  });
});
router.get("/compra/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT codigo,imagen,layer,cantidad,producto, SUM(cantidad) AS cant, ROUND(SUM(precio),2) AS pr FROM encabezadofac INNER JOIN pisos ON (encabezadofac.id_piso=pisos.id) WHERE id_enc = '" +
      id +
      "' GROUP BY id_enc,id_cliente,id_piso,layer;",
    (err, results) => {
      if (err) {
        throw err;
      } else {
        connection.query(
          "SELECT ROUND(SUM(precio),2) AS sum FROM encabezadofac WHERE id_enc = '" +
            id +
            "'",
          (err, exp) => {
            if (err) {
              throw err;
            } else {
              res.render("compra", { data: results, total: exp });
            }
          }
        );
      }
    }
  );
});

router.get("/precli/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM pisosprec INNER JOIN pisos ON (pisosprec.idpisos = pisos.id) WHERE idcliente = '" +
      id +
      "'",
    (err, results) => {
      if (err) {
        throw err;
      } else {
        res.render("precli", { datos: results });
      }
    }
  );
});


function nocache(res) {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
}

module.exports = router;
