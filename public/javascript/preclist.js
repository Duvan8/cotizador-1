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
    confirmButtonText: 'Si',
    cancelButtonText: "No",
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    html: `<h1>Sale Made</h1>
    <p>Sale saved with id <strong>`+fac+`</strong></p>
    <br>
    <a href="#">Imprimir ticket</a>
    `,
  }).then((result) => {
    if (result.value) {
    document.finalizar.submit();
    }
    return false;
  })
}