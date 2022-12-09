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
  if (lenguaje == costo) {
    marco.type = "image";
  } else {
    marco.type = "hidden";
  }
  document.getElementById("lblLenguajeSeleccionado").innerText = `${redondear}`;
}

