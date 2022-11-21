/* const PDFDocument = require("pdfkit");
function tabla() {
  let obtenerDato = document.getElementsByTagName("td");

console.log(obtenerDato);
}
function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  doc.image("./public/images/icons/LOGO.png", 30, -35, {
    fit: [150, 150],
    align: "center",
    valign: "center",
  });
  doc.moveTo(20, 75).lineTo(591, 75).fillAndStroke("#8e8e8e").stroke();
  doc.fillColor("black");
  doc.text("DISTRIBUTORS QUOTATION", 220, 85, {
    width: 410,
  });
  doc.moveTo(20, 100).lineTo(591, 100).fillAndStroke("#8e8e8e").stroke();
  doc.end();
}

module.exports = { buildPDF } */