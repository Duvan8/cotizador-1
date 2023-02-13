const connection = require("../Connection/connection");
const cnn = connection;
const controller = {};
const bcryptjs = require("bcryptjs");
const bcrypt = require("bcrypt");
const pdfService = require("../public/javascript/pdf");

controller.index = (req, res, next) => {
  res.render("index");
};
controller.formulario = (req, res, next) => {
  res.render("formulario");
};
controller.prueba = (req, res, next) => {
  res.render("lista");
};
controller.pisos = (req, res, next) => {
  res.render("pisos");
};
controller.login = (req, res, next) => {
  res.render("login");
};
controller.account = (req, res, next) => {
  res.render("account");
};
controller.flooring = (req, res, next) => {
  res.render("flooring");
};
controller.validarlogin = async (req, res, next) => {
  const usu = await req.body.user;
  const con = await req.body.pass;
  console.log(usu, con);
  cnn.query(
    "SELECT * FROM cliente WHERE mail=?",
    [usu],
    async (err, results) => {
      if (err) {
        next(new Error("Error de consulta login", err));
      }
      if (results != 0) {
        if (bcrypt.compareSync(con, results[0].password)) {
          req.session.Login = true;
          const doc = (req.session.docu = results[0].id);
          let rol = results[0].rol;
          switch (rol) {
            case "admin":
              res.redirect("account");
              break;
            case "client":
              res.redirect("index");
              break;
          }
        } else {
          console.log("datos incorrectos");
          res.redirect("/");
        }
      } else {
        console.log("datos incorrectos");
        res.redirect("/");
      }
    }
  );
};

controller.client = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.pass;
  const phon = req.body.phone;
  const rolex = req.body.rolex;
  const add = req.body.address;
  const pos = req.body.postal;
  const sta = req.body.state;
  const pass = await bcryptjs.hash(password, 8);

  cnn.query(
    "INSERT INTO cliente SET ?",
    {
      mail: email,
      password: pass,
      phone: phon,
      rol: rolex,
      address: add,
      postal: pos,
      state: sta,
    },
    (err) => {
      if (err) {
        throw err;
        console.log("Error al crear la cuenta");
      } else {
        res.redirect("/account");
      }
    }
  );
};
controller.pisos = (req, res) => {
  cnn.query("SELECT * FROM pisos", (err, resd) => {
    if (err) {
      console.log("error consulta de los pisos");
      throw err;
    } else {
      res.render("pisos", {datos: resd});
    }
  });
};
controller.index = async (req, res) => {
  cnn.query("SELECT * FROM puertas", (err, resbd) => {
    if (err) {
      console.log("error en consultar puertas");
      throw err;
    } else {
      res.render("index", { datos: resbd });
    }
  });
};
controller.pedido = async (req, res) => {
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment;filename=invoice.pdf",
  });
  pdfService.buildPDF(
    (chunk) => stream.write(chunk),
    () => stream.end()
  );
};

module.exports = controller;
