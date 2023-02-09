function piso() {
  let layer = document.getElementById("grosor").value;
  let layer1 = document.getElementById("lay").value;
  let layer2 = document.getElementById("prec").value;
  if(layer == 3){
    price = layer1;
  }
  else{
    price = layer2;
  }
  document.getElementById("precio").innerText = `${price}`;
}
