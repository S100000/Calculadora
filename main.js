const display = document.getElementById('display');
let operadorAtual = '';
let valorAtual = '';
let valorAnterior = '';

document.querySelectorAll('.botao').forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.textContent;

        if (!isNaN(valor)) {
            // Se o botão clicado for um número
            valorAtual += valor;
            display.textContent = valorAtual;
        } else if (valor === '=') {
            // Se o botão clicado for o sinal de igual
            if (valorAnterior && operadorAtual && valorAtual) {
                valorAtual = eval(`${valorAnterior} ${operadorAtual} ${valorAtual}`);
                display.textContent = valorAtual;
                operadorAtual = '';
                valorAnterior = '';
            }
        } else {
            // Se o botão clicado for um operador
            if (valorAtual) {
                valorAnterior = valorAtual;
                valorAtual = '';
                operadorAtual = valor;
            }
        }
    });
});
