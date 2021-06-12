const express = require('express');
const router = express.Router();

const dados = [];


router.get('/',(request, response, next)=>{
    response.status(200).send({
        mensagem: 'Acessando a rota tipo GET'
    });
});



router.post('/',(request, response, next)=>{
    const { nome, data } = request.body;
    const dado = {
        nome,
        data
    };
    
    dados.push(dado);
    
    response.status(201).json(dado);

});


module.exports = router, dados;
