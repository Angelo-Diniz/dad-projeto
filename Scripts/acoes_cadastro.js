$(document).ready(function () {
    $("#Cadastrar").click(function () {
        try {
            if ($("#nome").val() !== "" &&
                $("#cpf").val() !== "") {
                if (cadastrarDoador($("#nome").val(), $("#email").val(), $("#cpf").val(), $("#endereco").val())) {
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

function cadastrarDoador(nome, email, cpf, endereco) {
    try {
        let webService = services.find(servico => servico.identificador === "cadastrarDoador");
        let dados = {
            "nome": nome,
            "cpf": cpf,
            "endereco": endereco || "Nao disponivel",
            "email": email
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
        return true;
    } catch (error) {
        console.log(JSON.stringify(error) + 'Response' + JSON.stringify(request))
    }
}

const services = [{
    identificador: "cadastrarDoador",
    url: "https://api-dad.herokuapp.com/pessoa",
    token: "",
    usuario: "",
    senha: "",
}];