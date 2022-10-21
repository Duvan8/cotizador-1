const PDFDocument = require("pdfkit");

function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  doc.image("./public/images/icons/LOGO.png", {
    fit: [250, 300],
    align: "center",
    valign: "center",
  });
  doc.fontSize(25).text("Some text with an embedded font!");
  doc.end();
}

module.exports = { buildPDF };
