const connection = require("../Connection/connection");
const cnn = connection;
const controller = {};
const bcrypt = require("bcrypt");

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
controller.piso = (req, res, next) => {
  const id = req.body.id;
  const cant = req.body.cantidad;
  const ly1 = req.body.layer1;
  const ly3 = req.body.layer3;
  const gro = req.body.grosor;
  const img = req.body.imagen;
  const cod1 = req.body.cod1;
  const cod3 = req.body.cod3;
  const doc = req.session.docu;

  console.log("Este es el codigo 1  "+cod1);
  if (gro == 1.5) {
    ly = ly1;
    cod = cod1;
  } else {
    ly = ly3;
    cod = cod3;
  }
  cnn.query(
    "UPDATE pisos SET inventario=inventario-'" +
      cant +
      "' WHERE id = '" +
      id +
      "'"
  );
  cnn.query("INSERT INTO encabezadofac SET ?", {
    id_cliente: doc,
    id_piso: id,
    cantidad: cant,
    precio: ly,
    imagen: img,
    codigo: cod,
  });
  res.redirect("lista");
};

controller.validarlogin = async (req, res, next) => {
  const usu = await req.body.user;
  const con = await req.body.pass;
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
              res.redirect("pisos");
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
    } else {
      res.render("pisos", { datos: resd });
    }
  });
};

controller.elimcarrito = (req, res) => {
  const id = req.body.dd;
  const piso = req.body.pp;
  const cant = req.body.cc;
  cnn.query(
    "UPDATE pisos SET inventario = inventario +'" +
      cant +
      "' WHERE id ='" +
      piso +
      "'"
  );
  cnn.query(
    "DELETE FROM encabezadofac WHERE id = '" + id + "'",
    async (err) => {
      if (err) {
        console.log("error al eliminar en el encabezado de la factura");
        throw err;
      } else {
        res.redirect("/lista");
      }
    }
  );
};

controller.factura = (req, res) => {
  const id_cliente = req.body.id_cliente;
  const id_piso = req.body.idPiso;
};

controller.carrito = (req, res) => {
  const doc = req.session.docu;
  cnn.query("SELECT * FROM encabezadofac INNER JOIN pisos ON(encabezadofac.id_piso=pisos.id) WHERE id_cliente = '"+doc+"'", (err, resd) => {
    if (err) {
      console.log("error consulta de el encabezada de la factura");
    } else {
      res.render("lista", { datos: resd });
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
