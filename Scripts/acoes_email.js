$(document).ready(function () {
    $("#Cadastrar").click(function () {
        try {
            if ($("#email").val() !== ""){
                if (enviarEmail( $("#email").val())) {
                    alert("Email enviado!");
                    document.location.reload(true);
                } else {
                    alert("Desculpe! \nTivemos um problema. Tente mais tarde!");
                }
            } else {
                alert("Informe o email");
            }
        } catch (error) {
            console.log(error.message)
            alert("Desculpe! \nTivemos um problema. Tente mais tarde!");
            location.reload();
        }
    });
});

function enviarEmail(email) {
    try {
        let webService = services.find(servico => servico.identificador === "enviarEmail");
        const request = new XMLHttpRequest();
        const url = webService.url;
        request.open("POST", url);

        request.setRequestHeader("Content-Type", "application/json");

        request.send({"email": email});

        request.onload = (e) => {
            if (request.status === 200) {
                console.log(request.statusText);
            } else {
                console.error(request.statusText);
            }
        }

    } catch (error) {
        console.log(JSON.stringify(error) + 'Response' + JSON.stringify(request))
    }
}

const services = [{
    identificador: "enviarEmail",
    url: "https://api-dad.herokuapp.com/pessoa",
    token: "",
    usuario: "",
    senha: "",
}];