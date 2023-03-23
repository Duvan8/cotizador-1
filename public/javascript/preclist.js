function precio(){
    cod = $("#codgio").val();
    document.getElementById("subtotal").innerText = `${cod}`;
}
function finis(){
    event.preventDefault();
    fac = $("#factura").val();

    Swal.fire({
    type: '',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: "Not",
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    html: `<h1>THANK YOU</h1>
    <p>YOUR REQUEST IS BEIGN PROCESSED<strong></strong></p>
    <br>
    <p>Ticket #`+fac+`</p>
    <p>We have sent you an email with the pre-order number.</p>
    `,
  }).then((result) => {
    if (result.value) {
    document.finalizar.submit();
    }
    return false;
  })
}