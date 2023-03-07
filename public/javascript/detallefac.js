$(document).ready(function () {
  $(".detalle").on("click", function () {
    alert("si entro en la consulta");
    let btn = $(".detalle").index(this);
    let id = $(".idfac").eq(btn);

    let d = id.val();

    $.ajax({
      type: "post",
      url: "/compra",
      data: {
        dd: d,
      },
    });
  });
});
