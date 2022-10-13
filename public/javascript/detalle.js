$(document).ready(function () {
  $(".det").on("click", function () {
    let btn = $(".det").index(this);
    let id = $(".id").eq(btn);

    let d = id.val();

    alert("datos para actualizar" + d);

    $.ajax({
      type: "post",
      url: "/buscando",
      data: {
        dd: d,
      },
    });
  });
});
