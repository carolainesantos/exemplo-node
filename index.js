import express from "express";

const app = express();

app.get("/api/exemplo/:id", (req, res) => {
  const queryParams = req.query.nome;
  const routeParams = req.params.id;

  res.json({
    queryParams, // Query paramentro pegando aqui
    routeParams, // Route perametro pegando aqui
  });
});

// FUP que solicite dois numeros reais, realize a soma. Imprima o resultado.
app.get("/api/exercicio1", (req, res) => {
  const num1 = parseFloat(req.query.num1); // pode-se usar parseFloat para num com casas dec
  const num2 = parseInt(req.query.num2); // pode-se usar parseInt pra num Inteiros
  const resultado = num1 + num2;

  res.json({ resultado });
});

// FUP que leia o valor da hora do trabalhador e a
// quantidade de horas trabalhadas.
// Imprima o valor que o trabalhador deverá receber ao final do mês.
app.get("/api/exercicio2", (req, res) => {
  const valorPorHora = parseFloat(req.query.valorPorHora);
  const qtdHoras = parseFloat(req.query.qtdHoras);
  const resultado = valorPorHora * qtdHoras;

  res.json({ resultado });
});

/*FUP que solicite o peso de 5 
pessoas e calcule a media. Imprima o resultado */
app.get("/api/exercicio3", (req, res) => {
  const p1 = parseFloat(req.query.p1);
  const p2 = parseFloat(req.query.p2);
  const p3 = parseFloat(req.query.p3);
  const p4 = parseFloat(req.query.p4);
  const p5 = parseFloat(req.query.p5);

  const resultado = (p1 + p2 + p3 + p4 + p5) / 5;

  res.json({ resultado });
});

/* Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é : F = (9*C+160)/5 Sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/
app.get("/api/exercicio4", (req, res) => {
  const celsius = parseFloat(req.query.celsius);
  const resultado = (9 * celsius + 160) / 5;

  res.json({ resultado });
});

/* FUP que solicite a quantidade de milhas e converta para quilometros (1milha = 1.60934kms)*/
app.get("/api/exercicio5", (req, res) => {
  const milhas = parseFloat(req.query.milhas);
  const resultado = milhas * 1.609;

  res.json({ resultado });
});

/* FUP que solicite a duração de um evento em segundos e imprima em horas, minutos e segundos */
app.get("/api/exercicio6", (req, res) => {
  const duracao = parseFloat(req.query.duracao);
  const horas = Math.floor(duracao / 3600);
  const minutos = Math.floor((duracao % 3600) / 60);
  const segundos = duracao % 60;

  const resultado = { horas, minutos, segundos };

  res.json({ resultado });
});

/*
app.get("/api/exercicio6", (req, res) => {
  const duracao = parseFloat(req.query.duracao);
  const hr = parseFloat(req.query.hr);
  const min = parseFloat(req.query.min);
  const seg = parseFloat(req.query.seg);
  const resultado = (min = duracao / 60);

  res.json({ resultado });
}); */

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
