const express = require("express");
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
router.get("/compra", controller.compra);
router.get("/vacio", controller.vacio);
router.post("/facturas", controller.facturas);
router.post("/index", controller.index);
router.post("/prueba", controller.prueba);
router.post("/piso", controller.piso);
router.post("/client", controller.client);
router.post("/pisos", controller.pisos);
router.post("/validarlogin", controller.validarlogin);
router.post("/elimcarrito", controller.elimcarrito);
router.post("/factura", controller.factura);
router.post("/finalizar", controller.finalizar);
router.post("/compra", controller.compra);

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
          res.render("flooring", {datos:results[0], precio:prec[0]})
        }
      );
    }
  });
});
function nocache(res) {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
}

module.exports = router;
