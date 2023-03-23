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
    Swal.fire("no units available");
    agregar.type = "hidden";
  } else {
    if (layer == 3) {
      price = layer2 * valor;
      boxes = 25;
      sq = 734.5;
    } else {
      price = layer1 * valor;
      boxes = 30;
      sq = 881.4;
    }
    var pre = price.toFixed(2);
    agregar.type = "submit";
  }
  document.getElementById("prec").innerText = `${pre}`;
  document.getElementById("box").innerText = `${boxes}`;
  document.getElementById("sqf").innerText = `${sq}`;
}
