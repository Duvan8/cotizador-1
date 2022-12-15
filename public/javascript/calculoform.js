var sub = [];
/* document.getElementById("imgmac").style.visibility = "hidden"; */
function marco() {
  let cbxLenguajes = document.getElementById("cbxLenguajes");
  let lenguaje = cbxLenguajes.value;
  let precio = document.getElementById("cantidad");
  let valor = precio.value;
  let Total = lenguaje * valor;
  let redondear = Number(Total.toFixed(2));
  let coste = document.getElementById("precio");
  let costo = coste.value;
  let marco = document.getElementById("mrpuert");
  let core = document.getElementById("coreshjgjhg");
  let puert = document.getElementById("producto").value;
  console.log("🚀 ~ file: calculoform.js:15 ~ marco ~ puert", puert)
  let cor = core.value;
  switch (puert) {
    case "Unfinished Basic":
      if (cor == "Honey Comb") {
        redondear = 107.72;
        if (cor == "Honey Comb" && lenguaje == "222.43") {
          redondear = 222.43;
        }
      } else {
        redondear = 131.33;
        if (cor == "Solid" && lenguaje == "222.43") {
          redondear = 246.04;
        }
      }
      break;
    case "Unfinished Basic Frameless":
      if (cor == "Honey Comb") {
        redondear = 125.61;
        if (cor == "Honey Comb" && lenguaje == "246.04") {
          redondear = 240.32;
        }
      } else {
        redondear = 145.67;
        if (cor == "Solid" && lenguaje == "246.04") {
          redondear = 260.38;
        }
      }
      break;
  }
  if (lenguaje == costo) {
    marco.type = "image";
  } else {
    marco.type = "hidden";
  }
  document.getElementById("lblLenguajeSeleccionado").innerText = `${redondear}`;
}
