$(document).ready(function(){
    $('.elim').on('click',function(){
        let btn=$('.elim').index(this);
        let id=$('.id').eq(btn);
        let idpiso=$('.idPiso').eq(btn);
        let cant=$('.cant').eq(btn);

        let d=id.val();
        let p=idpiso.val();
        let c=cant.val();
        
        $.ajax({
            type:"POST",
            url:'/elimcarrito',
            data:{
                dd:d,
                pp:p,
                cc:c,
            }
        });
    })
})