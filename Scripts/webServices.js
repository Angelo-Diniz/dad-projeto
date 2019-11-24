const services = [{
    identificador : "cadastrarDoador",
    url : "https://api-dad.herokuapp.com/pessoa", 
    token : "",
    usuario : "",
    senha : "",
}]; 

function getWwebService(service) {
    return services.find(servico => servico.identificador === "cadastrarDoador");
}