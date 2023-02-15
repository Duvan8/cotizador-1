var puertas = sessionStorage.getItem("puertas"); //Obtener datos de sessionStorage
var operacion = "A"; //"A"=agregar; "E"=edtidar
puertas = JSON.parse(puertas); // Covertir a objeto

if (puertas === null)
  // Si no existe, creamos un array vacio.
  puertas = [];

function AgregarPuerta() {
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
  prechith = $("#chig").val();
  preshith = $("#shig").val();

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
      } else {
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

  puertas.push(datos_cliente); // Guardar datos en el array definido globalmente
  sessionStorage.setItem("puertas", JSON.stringify(puertas));

  ListarPuertas();

  return Mensaje(1);
}

function ListarPuertas() {
  $("#puertas-list").html(
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

  for (var i in puertas) {
    var d = JSON.parse(puertas[i]);
    $("#puertas-list").append(
      "<tr class='bg-white'>" +
        "<td>" +
        "</td>" +
        "<td>" +
        d.producto +
        "</td>" +
        "<td>" +
        d.codigo +
        "</td>" +
        "<td><img class='puer' src='images/doors/" +
        d.imgpuerta +
        "'></td>" +
        "<td><img class='marc' src='images/doors/marcos/" +
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
        "' class='btnEliminar' href='lista'><span class='fa-sharp fa-solid fa-trash'> </span> </a> </td>" +
        "</tr>"
    );
  }
}

if (puertas.length !== 0) {
  ListarPuertas();
} else {
  $("#puertas-list").append("<h2>No tienes ninguna puerta seleccionada</h2>");
}

function contarpuertas() {
  var doors = puertas;
  npuertas = doors.length;

  $("#numeropuertas").append(
    "<a>Tienes actualmente" +
      "<br>" +
      "<span class='badge'>" +
      npuertas +
      "</span></a> doors"
  );
  return npuertas;
}

function Eliminar(e) {
  puertas.splice(e, 1); // Args (posición en el array, numero de items a eliminar)
  sessionStorage.setItem("puertas", JSON.stringify(puertas));
}

$(".btnEliminar").bind("click", function () {
  indice_selecionado = $(this).attr("id"); // "this" contiene el elemento clikeado en el contexto actual
  Eliminar(indice_selecionado); // Eliminamos el elemento llamando la funcion de eliminar
  ListarPuertas();
});

contarpuertas();
// Esperar el evento de envio del formulario !!
$("#puertas").bind("submit", function () {
  debugger;
  if (operacion == "A") return AgregarPuerta();
  else {
    return Editar();
  }
});
