var dbVacas = sessionStorage.getItem("dbVacas"); //Obtener datos de sessionStorage
var operacion = "A"; //"A"=agregar; "E"=edtidar
dbVacas = JSON.parse(dbVacas); // Covertir a objeto

if (dbVacas === null)
  // Si no existe, creamos un array vacio.
  dbVacas = [];

function Mensaje(t) {
  switch (t) {
    case 1: //
      $(".mensaje-alerta").append(
        "<div class='alert alert-success' role='alert'>Se agrego con exito la vaca</div>"
      );
      break;
    case 2: //
      $(".mensaje-alerta").append(
        "<div class='alert alert-danger' role='alert'>Se elimino la vaca</div>"
      );
      break;
    default:
  }
}

function AgregarVaca() {
  // Seleccionamos los datos de los inputs de formulario
  cantidad = $("#cantidad").val();
  imgmarco = $("#cbxLenguajes").val();
  preciocon = $("#precio").val();
  icod = $("#codinicial").val();
  fcod = $("#codmarco").val();
  col = $("#colores").val();
  finse = $("#finihshddd").val();
  ker = $("#Kerfs").val();
  opn = $("#open").val();
  ven = $("#elvenner").val();
  core = $("#coreshjgjhg").val();
  puert = $("#producto").val();
  codfinish = $("#codfinish").val();
  console.log(
    "🚀 ~ file: funciones.js:40 ~ AgregarVaca ~ codfinish",
    codfinish
  );
  prechith = $("#chig").val();
  preshith = $("#shig").val();
  console.log("🚀 ~ file: funciones.js:39 ~ AgregarVaca ~ puert", puert);
  let cr, mr, cod, totl;
  if (codfinish == "true") {
    if (finse == "M") {
      if (preciocon == imgmarco) {
        sub = imgmarco * cantidad;
      } else {
        sub = imgmarco * cantidad;
      }
    }
    if (finse == "H") {
      if (preciocon == imgmarco) {
        sub = prechith * cantidad;
      }else{
        sub = preshith * cantidad;
      }
    }
  } else {
    sub = imgmarco * cantidad;
  }
  if (core == "Honey Comb") {
    cr = "-HC-";
  } else {
    cr = "-SO-";
  }
  if (imgmarco == preciocon) {
    mr = "-F";
  } else {
    mr = " ";
  }
  cod = icod + finse + col + cr + fcod + mr + ven;

  var datos_cliente = JSON.stringify({
    producto: $("#producto").val(),
    codigo: cod,
    imgpuerta: $("#imgpuerta").val(),
    imgmarco: sub,
    aimgf: $("#marco").val(),
    height: $("#hight").val(),
    width: $("#width").val(),
    finish: $("#finish").val(),
    opening: $("#opening").val(),
    core: $("#coreshjgjhg").val(),
    thickness: $("#Thickness").val(),
    precio: $("#precio").val(),
    cantidad: $("#cantidad").val(),
  });

  dbVacas.push(datos_cliente); // Guardar datos en el array definido globalmente
  sessionStorage.setItem("dbVacas", JSON.stringify(dbVacas));

  ListarVacas();

  return Mensaje(1);
}

function ListarVacas() {
  $("#dbVacas-list").html(
    "<thead>" +
      "<tr>" +
      "<th>  </th>" +
      "<th> producto </th>" +
      "<th> Codigo </th>" +
      "<th> Door </th>" +
      "<th> Frame </th>" +
      "<th> Height</th>" +
      "<th> Width</th>" +
      "<th> Finish</th>" +
      "<th> Opening</th>" +
      "<th> Core</th>" +
      "<th> Thickness</th>" +
      "<th> Quantity</th>" +
      "<th> Subtotal</th>" +
      "</tr>" +
      "</thead>" +
      "<tbody>" +
      "</tbody>"
  );

  for (var i in dbVacas) {
    var d = JSON.parse(dbVacas[i]);
    $("#dbVacas-list").append(
      "<tr>" +
        "<td>" +
        "</td>" +
        "<td>" +
        d.producto +
        "</td>" +
        "<td>" +
        d.codigo +
        "</td>" +
        "<td><img class='puer' src='images/productos/" +
        d.imgpuerta +
        "'></td>" +
        "<td><img class='marc' src='images/productos/marcos/" +
        d.aimgf +
        "'></td>" +
        "<td>" +
        d.height +
        "</td>" +
        "<td>" +
        d.width +
        "</td>" +
        "<td>" +
        d.finish +
        "</td>" +
        "<td>" +
        d.opening +
        "</td>" +
        "<td>" +
        d.core +
        "</td>" +
        "<td>" +
        d.thickness +
        "</td>" +
        "<td>" +
        d.cantidad +
        "</td>" +
        "<td id='precio'>" +
        d.imgmarco +
        "</td>" +
        "<td> <a id='" +
        i +
        "' class='btnEliminar' href='prueba'><span class='glyphicon glyphicon-trash'> </span> </a> </td>" +
        "</tr>"
    );
  }
}

if (dbVacas.length !== 0) {
  ListarVacas();
} else {
  $("#dbVacas-list").append("<h2>No tienes ninguna puerta seleccionada</h2>");
}

function contarVacas() {
  var vacas = dbVacas;
  nVacas = vacas.length;

  $("#numeroVacas").append(
    "<a>Tienes actualmente" +
      "<br>" +
      "<span class='badge'>" +
      nVacas +
      "</span></a> Vacas"
  );
  return nVacas;
}

function Eliminar(e) {
  dbVacas.splice(e, 1); // Args (posición en el array, numero de items a eliminar)
  sessionStorage.setItem("dbVacas", JSON.stringify(dbVacas));
}

$(".btnEliminar").bind("click", function () {
  indice_selecionado = $(this).attr("id"); // "this" contiene el elemento clikeado en el contexto actual
  Eliminar(indice_selecionado); // Eliminamos el elemento llamando la funcion de eliminar
  ListarVacas();
});

contarVacas();
// Esperar el evento de envio del formulario !!
$("#vacas-form").bind("submit", function () {
  debugger;
  if (operacion == "A") return AgregarVaca();
  else {
    return Editar();
  }
});
