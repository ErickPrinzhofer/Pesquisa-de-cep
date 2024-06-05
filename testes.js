const axios = require('axios');
const headers = { 'Content-Type': 'aplication/json' };
const urlCep = `https://viacep.com.br/ws/12943430/json/`;
axios.get(urlCep, { headers })
  .then(response => {
    console.log(response.data)
    console.log(response.data.logradouro); //Busca o logeadouro
    console.log(response.data.bairro);     //bairro
    console.log(response.data.localidade); //cidade
    console.log(response.data.uf)          //Tipo SP
    console.log(response.data.ddd)         //DDD

  })
  .catch(error=>{
    
  })