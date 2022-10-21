$(document).ready(function () {
  $(".elim").on("click", function (e) {
    let btn = $(".elim").index(this);
    let id = $(".id").eq(btn);
    let total = $(".to").eq(btn);
    let subtotal = $(".subtotal").eq(btn);
    let i = id.val();
    let t = total.val();
    let st = subtotal.val();
    console.log(st-t)
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          $.ajax({
            type: "POST",
            url: "/eliguardatos",
            data: {
              ii: i,
            },
          });
          $(this)
            .parent()
            .parent()
            .fadeOut("slow", function () {
              $(this).remove();
            });

          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  });
});
