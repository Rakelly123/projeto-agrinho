// 1. Função para filtrar os cards na tela
function filtrarConteudo(categoria) {
    // Seleciona todos os cards que têm a classe 'bloco-conteudo'
    const cards = document.querySelectorAll('.bloco-conteudo');
    
    cards.forEach(card => {
        // Se o botão for 'todos', mostra tudo
        if (categoria === 'todos') {
            card.style.display = 'block';
        } else {
            // Se o card contiver a classe da categoria (metodo ou vantagem), mostra. Se não, esconde.
            if (card.classList.contains(categoria)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// 2. Evento para o botão de ação do cabeçalho
document.getElementById('btn-interativo').addEventListener('click', function() {
    alert('Obrigado pelo interesse! Juntos podemos transformar o manejo da terra em um futuro 100% sustentável.');
});
