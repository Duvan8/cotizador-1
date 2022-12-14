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
  let cor = core.value;
  console.log("🚀 ~ file: calculoform.js:16 ~ marco ~ cor", cor);
  if (cor == "Honey Comb") {
    redondear = 107.72;
    if (cor == "Honey Comb" && lenguaje == "222.43") {
      redondear = 222.43;
    }
  }
  else if(cor == "Solid"){
    redondear = 131.33;
    if(cor == "Solid" && lenguaje == "222.43"){
      redondear = 246.04;
    }
  }
  if (lenguaje == costo) {
    marco.type = "image";
  } else {
    marco.type = "hidden";
  }
  document.getElementById("lblLenguajeSeleccionado").innerText = `${redondear}`;
}

