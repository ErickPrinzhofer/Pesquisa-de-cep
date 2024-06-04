const axios = require('axios');
const cep = '12943430';
const urlCep = `https://viacep.com.br/ws/${cep}/json/`;
const headers = {'Content-Type': 'aplication/json'}
/**
 * cep
 * rua
 complemento
 * bairro
 * cidade
 * uf
 ibge
 gia
 * ddd
 siafi
 */

axios.get(urlCep, {headers})
    .then(response => {
        console.log(response.data);
    });


