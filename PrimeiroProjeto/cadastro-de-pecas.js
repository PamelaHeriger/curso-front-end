'use strict'
var readlineSync = require("readline-sync");
var nomepeca, pesopeca, quantpeca;
const capacidadecaixa = 2;
var listapeca = [];
var resp;

do{
    console.log();
    console.log("\t\t--- BEM VINDO AO NOSSO ---");
    console.log("\t----- SISTEMA DE CADASTRO DE PECAS -----");
    console.log();
    console.log("\t\t MENU DE OPCOES ");
    console.log("\t\t 1 . Cadastrar Nova Peca. ");
    console.log("\t\t 2 . Listar Pecas Cadastradas. ");
    console.log("\t\t 3 . Finalizar Sistema. ");
    console.log();
    resp = readlineSync.question("\t\t Escolha Uma Opcao: ");

    switch(resp){
        case '1':
            console.log();
            
            console.log("\t CADASTRANDO PECA");
                console.log();
                quantpeca = listapeca.length;
                if(quantpeca < capacidadecaixa){
                    //Validando capacidade máxima da caixa
                    nomepeca = readlineSync.question("\t Informe o Nome do Peca: ");
                    if(nomepeca.length >3){
                        //Validando quantidade de caractére do nome
                        pesopeca = readlineSync.question("\t Informe o Peso da Peca (Kg): ");
                        console.log(pesopeca*1000);
                        if(pesopeca*1000 >= 0.100){
                            //Convertendo para Kg peso digitado pelo usuário
                            listapeca.push(nomepeca);
                        }else{
                            console.log();
                            console.log("\tO Peso da Peca Deve Ser No Minimo de 100 gramas!!");
                            console.log();
                        }
                    }else{
                        console.log('\t O nome ' + ' da Peca é Inválido! Digite um Nome Com no Mínimo 3 Letras!');
                    }
                }else{
                    console.log("\tLimite de 10 Pecas Na Caixa Excedido!!");
                    }
                break;
        case '2':
            console.log("\t EXIBINDO LISTA DE PECAS CADASTRADAS");
            console.log();
            console.log("\t Pecas Cadastradas: ");
            for(var indice = 0; indice <= listapeca.length-1; indice++){
                //Comando usado para escrever na tela uma peça debaixo da outra
                const posicaoAtual = listapeca[indice];
                console.log("\tPeca " + (indice+1) + " - " + posicaoAtual);
            }
            break;
        case '3':
                console.log();
                console.log("\t---- SAVINIS AGRADECE POR UTILIZAR NOSSOS SISTEMAS!!! ----");
                console.log();
            break;
        default:
            console.log();
                    console.log();
                    console.log("\t OPCAO INVALIDA! ESCOLHA NOVAMENTE!");
    }
    
}while(resp != 3);
