
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
  const txtcep = document.getElementById('txtcep')
  const resultado = document.getElementById('resultado')
  const cep = txtcep.value

  const headers = { 'Content-Type': 'application/json' };
  const urlCep = `https://viacep.com.br/ws/${cep}/json/`;   /// Troucar o valor do CEP por uma variavel
  axios.get(urlCep, { headers })
    .then(response => {
      const rua = (response.data.logradouro); //Busca o logeadouro
      const bairro = (response.data.bairro);     //bairro
      const cidade = (response.data.localidade); //cidade
      const uf = (response.data.uf);          //Tipo SP/
      const ddd = (response.data.ddd);         //DDD

      resultado.innerHTML = `
      Rua: ${rua} <br/>
      Bairro:  ${bairro} <br/>
      Cidade: ${cidade} <br/>
      UF: ${uf} <br/>
      DDD: ${ddd}`;
    })
    .catch(error =>{
      resultado.innerHTML = 'Erro na busca de CEP</br>Tente novamente'
    })
}
