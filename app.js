const express = require ('express');
const app = express();
// const modulo = require('./routes/certificado')

const handlebars = require('express-handlebars');
const dados = [];

app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
// app.use('/certificado', modulo);

app.get('/certificado', (request, response) => {
    response.status(200).send('recebido')
    response.render('certificado', {dados})

});


app.post('/certificado',(request, response, next)=>{
    const { nome, data } = request.body;
    const dado = {
        nome: nome,
        data: data
    };
    
    dados.push(dado);
    
    response.status(200).json(dado);
    console.log(dados)

});


app.use('/teste', (request, response, next)=>{
    response.status(200).send({
        mensagem: 'Deu certo!'
    });
});

module.exports = app;