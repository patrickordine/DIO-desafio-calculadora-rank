const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculaRank(vitorias, derrotas){
    let resultado = vitorias - derrotas;
    let rank
    if(resultado <=10){
        rank = "Ferro"
    }else if( resultado>=11 && resultado<=21){
        rank = "Bronze"
    }else if( resultado>=21 && resultado<=50){
        rank = "Prata"
    }else if( resultado>=51 && resultado<=80){
        rank = "Ouro"
    }else if( resultado>=81 && resultado<=90){
        rank = "Diamante"
    }else if( resultado>=91 && resultado<=100){
        rank = "Lendário"
    }else if( resultado>=101){
        rank = "Imortal"
    }
    console.log("O Herói tem de Saldo de "+ resultado + " está no nível de " + rank);
}
function iniciarCalculadoraRanque() {
    rl.question('Digite o número de vitórias (ou "sair" para encerrar): ', (qtdeVitorias) => {
        if (qtdeVitorias.toLowerCase() === 'sair') {
            console.log("Programa encerrado.");
            rl.close();
            return;
        }

        const vitorias = parseInt(qtdeVitorias);
        if (isNaN(vitorias)) {
            console.log("Entrada inválida. Digite um número válido de vitórias.");
            iniciarCalculadoraRanque(); // Chama recursivamente para pedir novamente
            return;
        }

        rl.question('Digite o número de derrotas: ', (qtdeDerrotas) => {
            const derrotas = parseInt(qtdeDerrotas);
            if (isNaN(derrotas)) {
                console.log("Entrada inválida. Digite um número válido de derrotas.");
                iniciarCalculadoraRanque(); // Chama recursivamente para pedir novamente
                return;
            }

            // Chamar a função de cálculo de ranque com os valores inseridos pelo usuário
            calculaRank(vitorias, derrotas);

            // Perguntar novamente para continuar o programa
            iniciarCalculadoraRanque();
        });
    });
}
iniciarCalculadoraRanque();
