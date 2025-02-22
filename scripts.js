document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de interatividade: Adicionar um evento de clique a um botão
    const botao = document.querySelector('form button');
    if (botao) {
        botao.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Mensagem enviada!');
        });
    }
});