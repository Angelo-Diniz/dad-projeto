$(document).ready(function () {
    $("#verDoacoes").click(function () {
        try {
            if ($("#cpf").val() !== "") {

                buscarDoacoes($("#cpf").val());
             
            } else {
                alert("Nome, CPF e Email são obritatórios");
            }   
        } catch (error) {
            console.log(error.message)
        }
    });
});

function buscarDoacoes(cpf) {
    try {
        let webService = services.find(servico => servico.identificador === "buscarDoacoes");
        const request = new XMLHttpRequest();
        const url = webService.url + "/cpf/" + cpf;
        request.open("GET", url);

        request.setRequestHeader("Content-Type", "application/json");

        request.send();

        request.onload = (e) => {
            if (request.response) {
              
                console.log(request.status);
                ocultarItem();
                var retorno = JSON.parse(request.response);
                
                itemValor.innerHTML = "Nome: " + " " + retorno.nome;
                itemData.innerHTML = "Doações: " + " " + retorno.saldoDoacoes;
                lista.appendChild(itemValor);
                lista.appendChild(itemData);

                retorno.doacoes.forEach(doacao => {
                    /*TENTAR COLOCAR DE FORMA BUNITINHA*/
                });

            } else {
                alert("CPF NÃO LOCALIZADO")
                console.error(JSON.stringify(request));
            }
        }

    } catch (error) {
        console.log(JSON.stringify(error) + 'Response' + JSON.stringify(request))
    }
}


const lista = document.getElementById('lista');
const itemValor = document.createElement('li');
const itemData = document.createElement('li');

const services = [{
    identificador: "buscarDoacoes",
    url: "https://api-dad.herokuapp.com/pessoa",
    token: "",
    usuario: "",
    senha: "",
}];

function doacao(data, valor){
    this.data = data;
    this.valor = valor;
 }
 
function ocultarItem() {
    var divBusca = document.getElementById("containter_login");
    if (divBusca.parentdivBusca) {
    divBusca.parentdivBusca.removeChild(divBusca);
    }
}

 //Chamar a função

 