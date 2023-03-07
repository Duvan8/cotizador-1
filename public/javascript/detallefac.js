$(document).ready(function () {
  $(".detalle").on("click", function () {
    alert("si entro en la consulta");
    let btn = $(".detalle").index(this);
    let id = $(".idfac").eq(btn);

    let d = id.val();
    console.log("🚀 ~ file: detallefac.js:8 ~ $ ~ d:", d);

    $.ajax({
      type: "post",
      url: "/detalle",
      data: {
        dd: d,
      },
    });
  });
});
