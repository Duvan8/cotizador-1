alert("hola mundo 1")
$(document).ready(function () {
  $("#btghvxc").on("click", function () {
    // Selecciona la tabla y conviértela en una imagen
    const table = document.querySelector("#tablasss");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const width = table.offsetWidth;
    const height = table.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(table, 0, 0, width, height);

    const base64 = canvas.toDataURL();

    alert("hola mundo 2");

    $.ajax({
      type: "post",
      url: "/base",
      data: {
        dd: base64,
      },
      success: function () {
        console.log("form was submitted");
      },
    });
  });
});
