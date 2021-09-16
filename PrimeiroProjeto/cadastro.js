var readlineSync = require("readline-sync");
var listaParticipante = [];
var listaPalestrante = [];
var indice = 0;
var tipoPessoa="n";

console.log("");
console.log("Cadastro de Evento");
console.log("");
console.log("");

var nomeEvento = readlineSync.question("Informe o Nome do Evento: ");
console.log("");
var dtEvento  = readlineSync.question("Informe a Data do Evento " + nomeEvento + ": ");
console.log("");
var hrEvento = readlineSync.question("Informe a Hora do Evento: " + nomeEvento + ": ");
console.log("");

console.log("o evento " + nomeEvento + " Marcado para o dia " + dtEvento + " As " + hrEvento + " hrs. Cadastrado com sucesso! ");

console.log("");
console.log("");

while (indice <100) {  
  tipoPessoa = readlineSync.question("Deseja Cadastrar um palestrante? (s/n): ");
  console.log("");
  if (tipoPessoa == "s") { 
    var nomePalestrante = readlineSync.question("Informe o Nome Completo do Palestrante: "); 
    console.log("");
    var idadePalestrante = readlineSync.question("Qual Eh  a Idade do Paletrante " + nomePalestrante + ": "); 
    console.log("");

    if (parseInt(idadePalestrante) > 18) {
      listaPalestrante.push(nomePalestrante); 
      console.log(nomePalestrante + ".Palestrante Cadastrado com Sucesso!");
      console.log("");
    }
    else {
      console.log(nomePalestrante + ".Eh Menor de Idade Para Participar!");
      console.log("");
    }
  }
  else {
    tipoPessoa = readlineSync.question("Deseja Cadastrar um Participante? (s/n): ");
    console.log("");
    if (tipoPessoa == "s") { 
      var nomeParticipante = readlineSync.question("Informe o Nome Completo do Participante: "); 
      console.log("");
      var idadeParticipante = readlineSync.question("Qual Eh  a Idade do Participante " + nomeParticipante + ": "); 
      console.log("");
  
      if (parseInt(idadeParticipante) > 18) {
        listaParticipante.push(nomeParticipante);
        console.log(nomeParticipante + ".Participante Cadastrado com Sucesso!");
        console.log("");
      }
      else {
        console.log(nomeParticipante + ".Eh Menor de idade para participar!");
        console.log("");
      }
    }
  }

  indice = listaParticipante.length + listaPalestrante.length;

  var pergunta = readlineSync.question('Deseja Continuar Cadastrando? (s/n): ');
  console.log("");
  console.log("");

  if (pergunta == "n") {
    indice = 100;    
  }
}

  console.log("Lista de Participantes: " + listaParticipante);
  console.log("Lista de Palestrantes: " + listaPalestrante);
