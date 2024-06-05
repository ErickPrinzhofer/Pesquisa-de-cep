
/**    function pesquisar(){
        var cep = document.getElementById('txtcep');
        const axios = require('axios');
        const headers = {'Content-Type': 'aplication/json'};
        const urlCep = `https://viacep.com.br/ws/${cep}/json/`;
        axios.get(urlCep, {headers})
            .then(response => {
        console.log(response.data);
        console.log(cep)
    });
    }
*/
const axios = require('axios');
const headers = {'Content-Type': 'aplication/json'};
function pesquisar(){    
    const cep = document.getElementById('txtcep');
    const valor = cep.value;
    const urlCep = `https://viacep.com.br/ws/${valor}/json/`;
    axios.getAdapter(urlCep, {headers})
    .then(response => {
        console.log(response.data);
    })
console.log(response.data)
    

}

