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
router.get("/lista", controller.prueba);
router.get("/imprimir", controller.pedido);
router.get("/flooring", controller.flooring);
router.post("/index", controller.index);
router.post("/prueba", controller.prueba);
router.post("/client", controller.client);
router.post("/pisos", controller.pisos);
router.post("/validarlogin", controller.validarlogin);
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
  connection.query("SELECT * FROM pisos WHERE id=?", [id], (err, results) => {
    if (err) {
      throw err;
    } else {
      nocache(res);
      res.render("flooring", { datos: results[0] });
    }
  });
});
function nocache(res) {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
}

module.exports = router;
