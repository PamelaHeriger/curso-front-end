'use strict'

var readlineSync = require("readline-sync");
var resp, nomeEvento, dataEvento, quantEventos;
var dataPartes, strData;
var idadeparticipante, nomeparticipante, quantParticipante;
const numParticipante = 4;
var quantPalestrante, i, nomepalestrante;
var evento = [], listaPalestrante = [], listaParticipante = [];

do{
    console.log();
    console.log("\t\t ------ SISTEMA DE CADASTRO DE EVENTOS ------");
    console.log("\t MENU DE OPCOES");
    console.log("\t 1 . Cadastrar Novo Evento.");
    console.log("\t 2 . Cadastrar Palestrante.");
    console.log("\t 3 . Cadastrar Participante.");
    console.log("\t 4 . Exibir Lista De Eventos.");
    console.log("\t 5 . Exibir Lista de Palestrantes.");
    console.log("\t 6 . Exibir Lista de Participantes.");
    console.log("\t 7 . Finalizar Sistema");
    resp = readlineSync.question("\t Escolha Uma Opcao: ");

    switch(resp){
        case '1':
            console.log();
            console.log("\t CADASTRANDO EVENTO ");
            strData = readlineSync.question(" Informe Uma Data Valida : (XX/XX/XXXX) ");
            dataPartes = strData.split('/');
            dataEvento = new Date(dataPartes[2], dataPartes[1] - 1, dataPartes[0]);
            if(dataEvento < new Date()){
                console.log();
                console.log("\tData Invalida! Verifique a Data e Tente Novamente!!");
                console.log();
            } else{
                nomeEvento = readlineSync.question("Informe o Nome do Evento: ");
                evento.push(nomeEvento);
            }break;
            case '2':
                console.log();
                console.log("\t CADASTRANDO PALESTRANTES");
                console.log();
                quantPalestrante = listaPalestrante.length;
                if(quantPalestrante < 0){
                    console.log("\t Nenhum Palestrante Foi Cadastrado!!");
                }else{
                    nomepalestrante = readlineSync.question("Informe o Nome do Palestrante: ");
                    listaPalestrante.push(nomepalestrante);
                }
                break;
            case '3':
                console.log();
                console.log("\t CADASTRANDO PARTICIPANTES");
                console.log();
                quantParticipante = listaParticipante.length;
                if(quantParticipante < numParticipante){
                    nomeparticipante = readlineSync.question("Informe o Nome do Participante: ");
                    idadeparticipante = readlineSync.question("Informe a Idade do Participante: ");
                    if(idadeparticipante >= 18){
                        listaParticipante.push(nomeparticipante);
                    }else{
                        console.log();
                        console.log("\tO Participante Deve Ser Maior de 18 Anos Para Participar!!");
                        console.log();
                    }
                }else{
                    console.log("\tVoce Nao Pode Participar! O Numero Maximo De Participantes Ja Foi Atingido!!");
                }
                break;
            case '4':
                console.log();
                console.log("\t EXIBINDO LISTA DE EVENTOS CADASTRADOS");
                console.log();
                quantEventos = evento.length;
                console.log("Foram Cadastrados " + quantEventos + "Eventos.");
                console.log("Os Eventos Sao : " + evento[0]);
                break;
            case '5':
                console.log();
                console.log("\t EXIBINDO LISTA DE PALESTRANTES CADASTRADOS");
                console.log();
                quantPalestrante = listaPalestrante.length;
                console.log("Foram Cadastrados " + quantPalestrante);
                i = 0;
                while (quantPalestrante-1 >= 0) {
                    console.log("Os Nomes sao: " + listaPalestrante[i]);
                    quantPalestrante--;
                    i++; 
                }
                break;
            case '6':
                console.log();
                console.log("\t EXIBINDO LISTA DE PARTICIPANTES CADASTRADOS");
                console.log();
                quantParticipante = listaParticipante.length;
                console.log("Foram Cadastrados " + quantParticipante);
                for(var indice = 0; indice <= quantParticipante-1; indice++){
                    const pAtual = listaParticipante[indice];
                    console.log("Participante " + (indice+1) + " - " + pAtual);
                }
                break;
            case '7':
                console.log();
                console.log("\t OBRIGADO POR UTILIZAR NOSSO SISTEMA!!!");
                console.log();
                break;
                default:
                    console.log();
                    console.log("\t OPCAO INVALIDA! ESCOLHA NOVAMENTE!");
    }
}while(resp != 7);
