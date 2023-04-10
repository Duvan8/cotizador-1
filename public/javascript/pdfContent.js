const fomu = document.querySelector("#tab");
fomu.addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = await fetch("http://localhost:3000/calcpdf");
  const json = await data.json();

  const content = {
    table: {
      headerRows: 1,
      widths: [
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
      ],
      body: [
        [
          "Product",
          "SKU",
          "Top Layer",  
          "Pallets",
          "SQF per Pallet",
          "Boxes per pallet",
          "SQL per Box",
          "Unit Price SQF",
          "Total",
        ],
        ...json.datos.map((item) => {
          return Object.keys(item).map((key) => item[key]);
        }),
      ],
    },
  };

  await fetch("http://localhost:3000/finalizar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  });

  await fetch("http://localhost:3000/base", {
    method: "POST"
  });
  window.location.href = "http://localhost:3000/pisos";
});
