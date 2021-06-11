const express = require('express');
const router = express.Router();

router.post('/',(request, response, next)=>{
    response.status(200).send({
        mensagem: 'recebendo dados pelo método POST'
    });
    
});

module.exports = router;
