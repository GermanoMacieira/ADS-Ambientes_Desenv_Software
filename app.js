
// Variáveis
var express = require("express"); // Referência para a requisição da biblioteca(módulo) do Express;
var bodyParser = require("body-parser"); // Referência para a requisição da biblioteca(módulo) do Body-parser;

var app = express(); // Configuração do Express: variável inicia o Express;

// Funções
function somar(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

app.use(bodyParser.json()); // Essa biblioteca ajudará na leitura dos dados que vamos enviar via POST.

app.get("/", function (req, res) {      // Configuração de uma url (Só para testar);
  res.send("Calculadora Web");
});

// 1-url Soma
app.post("/soma", function (req, res) {
    var body = req.body;
    var resultado = somar(body.a, body.b); // body.a, body.b são as variáveis enviados para a aplicação.
    res.send(`A soma de ${body.a} e ${body.b} é: ${resultado}`); // Finalização da requisição;
});

// 2-url Subtração
app.post("/subtracao", function (req, res) {
    var body = req.body;
    var resultado = subtracao(body.a, body.b);
    res.send(`A subtração de ${body.a} e ${body.b} é: ${resultado}`); // Finalização da requisição;
});

// 3-url Divisão
app.post("/divisao", function (req, res) {
    var body = req.body;
    var resultado = divisao(body.a, body.b);    
    res.send(`A divisão de ${body.a} e ${body.b} é: ${resultado}`); // Finalização da requisição;
});

// 4-url Multiplicação
app.post("/multiplicacao", function (req, res) {
    var body = req.body;
    var resultado = multiplicacao(body.a, body.b);  
  res.send(`O produto de ${body.a} e ${body.b} é: ${resultado}`); // Finalização da requisição;
});

app.listen(3001, function () {
  // Indicação da porta 3001;
  console.log("App de Exemplo escutando na porta http://localhost:3001/");
});
