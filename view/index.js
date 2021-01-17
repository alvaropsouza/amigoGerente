const cotacao = document.querySelector('#cotacao');
const lpa = document.querySelector('#lucroporacao');
const plresultado = document.querySelector('#plresultado')

function calculapl() {
    const pl = new Pl(cotacao.value, lpa.value);

    plresultado.innerHTML = `Seu pl é equivalente à: ${pl.result}`
}
