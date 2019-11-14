$(document).ready(function(){
    $("#enviarEmail").click(function () {

        try {
            if ($("#emailDoador").val() !== "" && $("#valorSelecionado option:selected").val() !== ""){

                if(dispararEmail($("#emailDoador").val(), $("#valorSelecionado option:selected").val())){
                    alert("Enviado!");
                    location.reload();
                }
                else {
                    alert("Desculpe! \nTivemos um problema. Tente mais tarde!");
                    location.reload();
                }
            }
            else{
                alert("É necessário preencher todos os campos");
            }
        } catch (error) {
            console.log(error.message)
            alert("Desculpe! \nTivemos um problema. Tente mais tarde!");
            location.reload();
        }
       
    });


    
});

function dispararEmail(email, valor) {

    
}