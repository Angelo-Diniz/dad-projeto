$(document).ready(function(){
    $("#enviarEmail").click(function () {
        if ($("#emailDoador").val() !== "" && $("#valorSelecionado option:selected").val() !== ""){
            if(dispararEmail(email, valor)){
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
    });


    
});

function dispararEmail(email, valor) {

    
}