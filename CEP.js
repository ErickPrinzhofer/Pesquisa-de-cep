
/**    function pesquisar(){
        var cep = document.getElementById('txtcep');
        const axios = require('axios');
        const headers = {'Content-Type': 'aplication/json'};
        const urlCep = `https://viacep.com.br/ws/${cep}/json/`;
        axios.get(urlCep, {headers})
            .then(response => {
        console.log(response.data);FFF
        console.log(cep)F
    });
    }
*/
function verificar() {
  const txtcep = document.getElementById('txtcep')  // Pega o que o usuário digitou 
  const resultado = document.getElementById('resultado')  //Só absorve o que vai aparecer no resultado da página
  const cep = txtcep.value  // Dando valor ao cep, para utilizá-lo mais pra frente

  const headers = { 'Content-Type': 'application/json' }; // Autorização, como é uma api livre, foi só necessário dizer que é json 
  const urlCep = `https://viacep.com.br/ws/${cep}/json/`;   /// Troucar o valor do CEP por uma variavel
  axios.get(urlCep, { headers }) // Método get do axios, axios foi definido no index.html
    .then(response => { //retornando o que estava na api, mas só o que eu achei necessário
      const rua = (response.data.logradouro); //Busca o logeadouro
      const bairro = (response.data.bairro);     //bairro
      const cidade = (response.data.localidade); //cidade
      const uf = (response.data.uf);          //Tipo SP/
      const ddd = (response.data.ddd);         //DDD

      //Abaixo é o que vai aparecer na página para o usuário
      resultado.innerHTML = ` 
      Rua: ${rua} <br/>
      Bairro:  ${bairro} <br/>
      Cidade: ${cidade} <br/>
      UF: ${uf} <br/>
      DDD: ${ddd}`;
    })
    .catch(error => {
      resultado.innerHTML = 'Erro na busca de CEP</br>Tente novamente'
    })
}
