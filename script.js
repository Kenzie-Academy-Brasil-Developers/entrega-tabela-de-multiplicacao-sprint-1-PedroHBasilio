
function tabelaMultiplicacao(n) { 
    let tabela = [];
    for (let linha = 0; linha <= n; linha++) {
        tabela.push([linha])

        for(let coluna = 0; coluna <= n; coluna ++){
            tabela[linha][coluna] = linha * coluna
        }
    }
    console.table(tabela)
}
tabelaMultiplicacao(12)