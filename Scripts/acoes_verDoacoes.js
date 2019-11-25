$(document).ready(function () {
    $("#verDoacoes").click(function () {
        try {
            if ($("#cpf").val() !== "") {

                buscarDoacoes($("#cpf").val());
             
            } else {
                alert("Caro doador, favor informar CPF!");
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
            if (request.status === 302) {
              
                console.log(request.status);
                ocultarItem();
                var retorno = JSON.parse(request.response);
                preencheDadosDoador(retorno.nome, retorno.saldoDoacoes)
                retorno.doacoes.forEach(doacao => {
                    preencheLista(doacao.valor, doacao.data.substring(0,10));
                });
                document.getElementById("exibicaoDoacoes").style.display = "block";

            } else {
                alert("CPF NÃO LOCALIZADO")
                console.error(JSON.stringify(request));
            }
        }

    } catch (error) {
        console.log(JSON.stringify(error) + 'Response' + JSON.stringify(request))
    }
}
const container = document.getElementById('accordion');
const containerDoador = document.getElementById('dadosDoador');
const doadorDados = document.getElementById('nome');

const services = [{
    identificador: "buscarDoacoes",
    url: "https://api-dad.herokuapp.com/pessoa",
    token: "",
    usuario: "",
    senha: "",
}];

function preencheLista(valor, data) {
    const card = document.createElement('div');
    card.classList = 'card-body';
  // Construct card content
  const content = `
 
    <div class="card-body">
        <h5 class="card-title">Data: ${data}</h5>
        <p class="card-text">Valor: R$${valor}</p>
    </div>
  `;

  // Append newyly created card element to the container
  container.innerHTML += content;
}

function preencheDadosDoador(nome, totalDoacoes) {
    const cardDoador = document.createElement('div');
    cardDoador.classList = 'card-body';
  // Construct card content
  const content = `
            <div class="card-header">
            Doador: ${nome}
            </div>
            <div class="card-body">
                <h5 class="card-title">Total de doações: R$${totalDoacoes}</h5>
            </div>
  `;

  // Append newyly created card element to the container
  containerDoador.innerHTML += content;
}

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