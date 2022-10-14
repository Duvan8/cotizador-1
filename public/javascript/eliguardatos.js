$(document).ready(function(){
    $('.elim').on('click',function(){
        let btn=$('.elim').index(this);
        let id=$('.id').eq(btn);

        let i=id.val();
        alert("datos eliminados")
        
        $.ajax({
            type:"POST",
            url:'/eliguardatos',
            data:{
                ii:i
            }
        });
    })
})