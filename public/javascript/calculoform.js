var sub = [];
/* document.getElementById("imgmac").style.visibility = "hidden"; */
function marco() {
  let lenguaje = document.getElementById("cbxLenguajes").value;
  let valor = document.getElementById("cantidad").value;
  let costo = document.getElementById("precio").value;
  let marco = document.getElementById("mrpuert");
  let core = document.getElementById("coreshjgjhg");
  let puert = document.getElementById("producto").value;
  let codfinish = document.getElementById("codfinish").value;
  let prechith = document.getElementById("chig").value;
  let preshith = document.getElementById("shig").value;
  let finishe = document.getElementById("finihshddd").value;
  let cor = core.value;
  if (codfinish == "true") {
    if (finishe == "M" || core == "Honey Comb") {
      if (costo == lenguaje) {
        Total = lenguaje * valor;
      } else {
        Total = lenguaje * valor;
      }
    }
    if (finishe == "H" || core == "Solid") {
      if (costo == lenguaje) {
        Total = prechith * valor;
      } else {
        Total = preshith * valor;
      }
    }
  } else {
    Total = lenguaje * valor;
  }
  let redondear = Number(Total.toFixed(2));

  if (lenguaje == costo) {
    marco.type = "image";
  } else {
    marco.type = "hidden";
  }
  document.getElementById("lblLenguajeSeleccionado").innerText = `${redondear}`;
}
