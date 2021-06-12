const express = require ('express');
const app = express();

const rotaCertificado = require('./routes/certificado')



app.use(express.json());
app.use('/certificado', rotaCertificado)

app.use('/teste', (request, response, next)=>{
    response.status(200).send({
        mensagem: 'Deu certo!'
    });
});

module.exports = app;