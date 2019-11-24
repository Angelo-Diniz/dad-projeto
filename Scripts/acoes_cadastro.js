$(document).ready(function(){
    $("#Cadastrar").click(function () {
        try {
            if ($("#nome").val() !== ""
            && $("#cpf").val() !== "" ){
                if(cadastrarDoador($("#nome").val(), $("#email").val(), $("#cpf").val(), $("#endereco").val())){
                    alert("Cadastrado!");
                    document.location.reload(true);
                }
                else {
                    alert("Desculpe! \nTivemos um problema. Tente mais tarde!");
                }
            }
            else{
                alert("Nome, CPF e Email são obritatórios");
            }
        } catch (error) {
            console.log(error.message)
            alert("Desculpe! \nTivemos um problema. Tente mais tarde!");
            location.reload();
        }
    });
});

function cadastrarDoador(nome, email, cpf, endereco) {
    try {
        let webService =  services.find(servico => servico.identificador === "cadastrarDoador");
        const Http = new XMLHttpRequest();
        const url= webService.url;
        Http.open("POST", url);
        
        Http.setRequestHeader("Content-Type", "application/json");
        Http.setRequestHeader("Access-Control-Allow-Origin", "*");
        Http.setRequestHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
        Http.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        let dados= {
            "nome": nome,
            "cpf": cpf,
            "endereco": endereco || "Nao disponivel",
            "email": email
        }

        Http.send(dados);
        Http.onreadystatechange = (e) => {
          console.log(Http.responseText)
        }

    } catch (error) {
        console.log(JSON.stringify(error) + 'Response' + JSON.stringify(Http))
    }
}

const services = [{
    identificador : "cadastrarDoador",
    url : "https://api-dad.herokuapp.com/pessoa", 
    token : "",
    usuario : "",
    senha : "",
}]; 
