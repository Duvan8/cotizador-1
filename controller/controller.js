const connection = require("../Connection/connection");
const cnn = connection;
const { render } = require("ejs");
const controller = {};
const req = require("express/lib/request");
const fs = require("fs");
const pdfService = require('../public/javascript/pdf')

controller.index = (req, res, next) => {
  res.render("index");
};
controller.formulario = (req, res, next) => {
  res.render("formulario");
};
controller.prueba = (req, res, next) => {
  res.render("prueba");
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
controller.pedido = async (req, res) => {
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment;filename=invoice.pdf'
  });
  pdfService.buildPDF(
    (chunk) => stream.write(chunk),
    () => stream.end()
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
