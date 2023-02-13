function piso() {
  let layer = document.getElementById("grosor").value;
  let layer1 = document.getElementById("layer1").value;
  let layer2 = document.getElementById("layer3").value;
  if (layer == 3) {
    price = layer2;
  } else {
    price = layer1;
  }
  document.getElementById("prec").innerText = `${price}`;
}
