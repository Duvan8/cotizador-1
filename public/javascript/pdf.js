$(document).ready(function () {
  $("#btghvxc").on("click", function () {
    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "acemardistributors.com@gmail.com",
        pass: "chgrioaywvdsnuxg",
      },
    });

    transporter.verify().then(() => {
      console.log("todo a salido fenomenal");
    });

    let mailOptions = {
      from: '"Fred Foo 👻" <acemardistributors.com@gmail.com>',
      to: "sistemas@acemar.co",
      subject: "Prueba de envío de JSON con Nodemailer",
      text: "Este es un correo de prueba enviado desde Nodemailer y jQuery",
      html: "<h1>Este es un correo de prueba enviado desde Nodemailer y jQuery</h1><p>Este correo electrónico incluye un mensaje HTML para probar la funcionalidad de nodemailer.</p>",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Correo electrónico enviado: " + info.response);
      }
    });
  });
});
