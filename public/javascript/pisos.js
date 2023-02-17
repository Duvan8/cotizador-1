var pisos = sessionStorage.getItem("pisos"); //Obtener datos de sessionStorage
var operacion = "A"; //"A"=agregar; "E"=edtidar
pisos = JSON.parse(pisos); // Covertir a objeto

if (pisos === null)
  // Si no existe, creamos un array vacio.
  pisos = [];

function Agregarpiso() {
  // Seleccionamos los datos de los inputs de formulario de pisos
  layer1 = $("#layer1").val();
  layer3 = $("#layer3").val();
  clear = $("#clear").val();
  semiclear = $("#semiclear").val();
  character = $("#character").val();
  core = $("#core").val();
  thickness1 = $("#thickness1").val();
  thickness3 = $("#thickness3").val();
  length1 = $("#length1").val();
  length3 = $("#length3").val();
  width = $("#width").val();
  grosor = $("#grosor").val();
  cantidad = $("#cantidad").val();
  codig = $("#codigo").val();
  cod1 = $("#cod1").val();
  cod3 = $("#cod3").val();
  img = $("#imgpiso").val();
  let prec = 0,
    thick,
    leng,
    cod;

  if (grosor == 1.5) {
    prec = layer1;
    thick = thickness1;
    leng = length1;
    cod = cod1;
  } else {
    prec = layer3;
    thick = thickness3;
    leng = length3;
    cod = cod3;
  }

  var datos_cliente = JSON.stringify({
    producto: $("#producto").val(),
    precio: prec,
    imgp: img,
    claro: $("#clear").val(),
    semiclaro: $("#semiclear").val(),
    personaje: $("#character").val(),
    centro: $("#core").val(),
    espesor1: thick,
    logni: leng,
    codigo: cod + codig,
    ancho: $("#width").val(),
    wid: $("#grosor").val(),
    cant: $("#cantidad").val(),
  });

  pisos.push(datos_cliente); // Guardar datos en el array definido globalmente
  sessionStorage.setItem("pisos", JSON.stringify(pisos));

  listarpisos();

  return Mensaje(1);
}

function listarpisos() {
  $("#pisos-list").html(
    "<thead>" +
      "<tr>" +
      "<th>  </th>" +
      "<th> Product </th>" +
      "<th> Code </th>" +
      "<th> Image </th>" +
      "<th> Door </th>" +
      "<th> Frame </th>" +
      "<th> Clear</th>" +
      "<th> SemiClear</th>" +
      "<th> Character</th>" +
      "<th> Core</th>" +
      "<th> Thickness</th>" +
      "<th> Core</th>" +
      "<th> subtotal</th>" +
      "<th> </th>" +
      "</tr>" +
      "</thead>" +
      "<tbody>" +
      "</tbody>"
  );

  for (var i in pisos) {
    var d = JSON.parse(pisos[i]);
    $("#pisos-list").append(
      "<tr class='bg-white'>" +
        "<td>" +
        "</td>" +
        "<td>" +
        d.producto +
        "</td>" +
        "<td>" +
        d.codigo +
        "</td>" +
        "<td><img class='puer' src='images/flooring/" +
        d.imgp +
        "'></td>" +
        "<td>" +
        d.wid +
        "</td>" +
        "<td>" +
        d.claro +
        "%" +
        "</td>" +
        "<td>" +
        d.semiclaro +
        "%" +
        "</td>" +
        "<td>" +
        d.personaje +
        "%" +
        "</td>" +
        "<td>" +
        d.centro +
        "</td>" +
        "<td>" +
        d.espesor1 +
        "</td>" +
        "<td>" +
        d.logni +
        "</td>" +
        "<td>" +
        d.cant +
        "</td>" +
        "<td id='precpiso'>" +
        d.precio +
        "</td>" +
        "<td> <a id='" +
        i +
        "' class='btnElim' href='lista'><span class='fa-sharp fa-solid fa-trash'> </span> </a> </td>" +
        "</tr>"
    );
  }
}

if (pisos.length !== 0) {
  listarpisos();
} else {
  $("#pisos-list").append("<h2>No tienes ningun piso seleccionado</h2>");
}

function contarpisos() {
  var doors = pisos;
  npisos = doors.length;

  $("#numeropisos").append(
    "<a>Tienes actualmente" +
      "<br>" +
      "<span class='badge'>" +
      npisos +
      "</span></a> doors"
  );
  return npisos;
}

function Elim(e) {
  pisos.splice(e, 1); // Args (posición en el array, numero de items a eliminar)
  sessionStorage.setItem("pisos", JSON.stringify(pisos));
}

$(".btnElim").bind("click", function () {
  indice_selecionado = $(this).attr("id"); // "this" contiene el elemento clikeado en el contexto actual
  Elim(indice_selecionado); // Eliminamos el elemento llamando la funcion de eliminar
  listarpisos();
});

contarpisos();
// Esperar el evento de envio del formulario !!
$("#pisos").bind("submit", function () {
  debugger;
  if (operacion == "A") return Agregarpiso();
  else {
    return Editar();
  }
});
