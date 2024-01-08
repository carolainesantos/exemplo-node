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

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
