import express from "express";

const app = express();
app.use(express.json()); // serve pra q sejam interpretadas como json

app.get("/api/exemplo/:id", (req, res) => {
  const queryParams = req.query.nome;
  const routeParams = req.params.id;

  res.json({
    queryParams, // Query paramentro pegando aqui
    routeParams, // Route perametro pegando aqui
  });
});

// exemplo usando post
app.post("/api/exemplo", (req, res) => {
  console.log("entrei aqui");
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = num1 + num2;

  res.status(200).json({ result });
});

// FUP que solicite dois numeros reais, realize a soma. Imprima o resultado.
app.post("/api/exercicio1", (req, res) => {
  const num1 = parseFloat(req.body.num1); // pode-se usar parseFloat para num com casas dec
  const num2 = req.body.num2; // neste caso nenhum dos dois precisa converter pq o json é interpretado corretamente
  const resultado = num1 + num2;

  res.status(200).json({ resultado });
});

// FUP que leia o valor da hora do trabalhador e a
// quantidade de horas trabalhadas.
// Imprima o valor que o trabalhador deverá receber ao final do mês.
app.post("/api/exercicio2", (req, res) => {
  const valorPorHora = parseFloat(req.body.valorPorHora);
  const qtdHoras = parseFloat(req.body.qtdHoras);
  const resultado = valorPorHora * qtdHoras;

  res.status(200).json({ resultado });
});

/*FUP que solicite o peso de 5 
pessoas e calcule a media. Imprima o resultado */
app.post("/api/exercicio3", (req, res) => {
  const p1 = parseFloat(req.body.p1);
  const p2 = parseFloat(req.body.p2);
  const p3 = parseFloat(req.body.p3);
  const p4 = parseFloat(req.body.p4);
  const p5 = parseFloat(req.body.p5);
  const resultado = (p1 + p2 + p3 + p4 + p5) / 5;

  res.status(200).json({ resultado });
});

/* Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é : F = (9*C+160)/5 Sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/
app.post("/api/exercicio4", (req, res) => {
  const celsius = parseFloat(req.body.celsius);
  const resultado = (9 * celsius + 160) / 5;

  res.status(200).json({ resultado });
});

/* FUP que solicite a quantidade de milhas e converta para quilometros (1milha = 1.60934kms)*/
app.post("/api/exercicio5", (req, res) => {
  const milhas = parseFloat(req.body.milhas);
  const resultado = milhas * 1.609;

  res.status(200).json({ resultado });
});

/* FUP que solicite a duração de um evento em segundos e imprima em horas, minutos e segundos */
app.post("/api/exercicio6", (req, res) => {
  const duracao = parseFloat(req.body.duracao);
  const horas = Math.floor(duracao / 3600);
  const minutos = Math.floor((duracao % 3600) / 60);
  const segundos = duracao % 60;

  const resultado = { horas, minutos, segundos };

  res.status(200).json({ resultado });
});

/* FUP que leia um valor em quilometros e converta para metros e centimetro */
app.post("/api/exercicio7", (req, res) => {
  const km = parseFloat(req.body.km);
  const metros = Math.floor(km * 1000);
  const centimetros = Math.floor(km * 100000);

  const resultado = { metros, centimetros };
  res.status(200).json({ resultado });
});

/* FUP que peça um número e imprima a tabuada deste número */
app.post("/api/exercicio8", (req, res) => {
  const num = parseFloat(req.body.num);
  const resultado = {};

  for (let i = 1; i <= 10; i++) {
    resultado[`multiplicacao_${i}`] = num * i;
  }

  res.status(200).json({ resultado });
});

/* FUP que calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma mensagem de "Aprovado", caso a média seja igual ou superior a 7, a mensagem "Recuperação", caso a média se igual ou superior a 5 e inferior a 7, ou a mensagem “Reprovado”, caso a média seja inferior a 5. */
app.post("/api/exercicio9", (req, res) => {
  const n1 = parseFloat(req.body.n1);
  const n2 = parseFloat(req.body.n2);
  const n3 = parseFloat(req.body.n3);

  const resultado = (n1 + n2 + n3) / 3;
  var msg = "";

  if (resultado >= 7) {
    msg = "Aprovado!";
  } else if (resultado >= 5 && resultado < 7) {
    msg = "Recuperação";
  } else msg = "Reprovado";

  res.status(200).json({ resultado, msg });
});

/* FUP que calcule o IMC - solicite se é H ou M e faça o calculo */
app.post("/api/exercicio10", (req, res) => {
  const h = parseFloat(req.body.h);
  const sexo = req.body.sexo;
  let imc;

  if (sexo === "H") {
    imc = 72.7 * Math.pow(h, 2) - 58;
  } else if (sexo === "M") {
    imc = 62.1 * Math.pow(h, 2) - 44.7;
  }

  res.status(200).json({ imc });
});

/* FUP que solicite a operação (+,-,/,*) e dois numeros, calcule a operação solicitada e informe o resultado */

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
