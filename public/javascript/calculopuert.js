function piso() {
  let layer = document.getElementById("grosor").value;
  let layer1 = document.getElementById("layer1").value;
  let layer2 = document.getElementById("layer3").value;
  let valor = document.getElementById("cantidad").value;
  let stock = document.getElementById("stock").value;
  let agregar = document.getElementById("agregar");
  v = parseInt(valor);
  s = parseInt(stock);
  if (s < v) {
    alert("no hay unidades disponibles");
    agregar.type = "hidden";
  } else {
    if (layer == 3) {
      price = layer2 * valor;
    } else {
      price = layer1 * valor;
    }
    agregar.type = "submit";
  }
  document.getElementById("prec").innerText = `${price}`;
}
