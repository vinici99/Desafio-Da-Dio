function partidas(vitorias, derrotas) {
    let resultado = vitorias - derrotas
    return resultado
}

function rank() {
    let saldoVitorias = partidas(100, 20)
    let nivel = ""
    if (saldoVitorias <= 10) {
        nivel = "Ferro"
    }else if (saldoVitorias <= 20){
        nivel = "Bronze"
    }else if (saldoVitorias <= 50){
        nivel = "Prata"
    }else if (saldoVitorias <= 80){
        nivel = "Ouro"
    }else if (saldoVitorias <= 90){
        nivel = "Diamante"
    }else if (saldoVitorias <= 100){
        nivel = "Lendário"
    }else if (saldoVitorias >= 101){
        nivel = "Imortal"
    }
    return `O Herói tem de saldo de ${saldoVitorias} está no nivel de ${nivel}`

}

console.log(rank())
