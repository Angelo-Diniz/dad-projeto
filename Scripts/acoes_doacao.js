$(document).ready(function () {
    $("#enviarDoacao").click(function () {
        try {
            if ($("#nome").val() !== "" &&
                $("#cpf").val() !== "") {
                if (cadastrarDoacao($("#valor").val(), $("#cpf").val())) {
                    alert("Cadastrado!");
                    document.location.reload(true);
                } else {
                    alert("Desculpe! \nTivemos um problema. Tente mais tarde!");
                }
            } else {
                alert("Nome, CPF e Email são obritatórios");
            }
        } catch (error) {
            console.log(error.message)
            alert("Desculpe! \nTivemos um problema. Tente mais tarde!");
            location.reload();
        }
    });
});

function cadastrarDoacao(valor, cpf) {
    try {
        let webService = services.find(servico => servico.identificador === "cadastrarDoacao");
        let dados = {
            "cpf": cpf,
            "valor": valor
        }
        const request = new XMLHttpRequest();
        const url = webService.url;
        request.open("POST", url);

        request.setRequestHeader("Content-Type", "application/json");

        request.send(JSON.stringify(dados));
        request.onload = (e) => {
            if (request.status === 201) {
                return true;
            } else {
                return false;
            }
        }
    } catch (error) {
        console.log(JSON.stringify(error) + 'Response' + JSON.stringify(request))
    }
}

const services = [{
    identificador: "cadastrarDoacao",
    url: "https://api-dad.herokuapp.com/doacao",
    token: "",
    usuario: "",
    senha: "",
}];