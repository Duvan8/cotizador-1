function piso() {
  let layer = document.getElementById("grosor").value;
  let layer1 = document.getElementById("layer1").value;
  let layer2 = document.getElementById("layer3").value;
  let valor = document.getElementById("cantidad").value;
  if (layer == 3) {
    price = layer2 * valor;
  } else {
    price = layer1 * valor;
  }
  document.getElementById("prec").innerText = `${price}`;
}
