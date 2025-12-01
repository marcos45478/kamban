
alert("Arraste e solte os cards entre as colunas. As mudanças serão salvas automaticamente! Odeio javascript");

function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

// 2. seve para adicionar eventos de arrastar aos cards
function adicionarEventosAosCards() {
    // Pega em todos os cards que existem na página
    document.querySelectorAll('.kanban-card').forEach(card => {
        // Primeiro limpamos eventos antigos para não duplicar
        card.removeEventListener('dragstart', dragStart);
        card.removeEventListener('dragend', dragEnd);

        // Adiciona os eventos de arrastar novamente
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    });
}

// 3. CONFIGURAÇÃO DAS COLUNAS (ONDE SOLTAR OS CARDS)
document.querySelectorAll('.kanban-cards').forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault(); // Necessário para permitir o "drop"
        e.currentTarget.classList.add('cards-hover');
    });

    column.addEventListener('dragleave', e => {
        e.currentTarget.classList.remove('cards-hover');
    });

    column.addEventListener('drop', e => {
        e.currentTarget.classList.remove('cards-hover');

        // Pega o card que está a ser arrastado
        const dragCard = document.querySelector('.kanban-card.dragging');
        
        if (dragCard) {
            // Move o card para a nova coluna
            e.currentTarget.appendChild(dragCard);
            
            // Salva a nova posição imediatamente!
            salvarNoLocalStorage();
        }
    });
});

// FUNÇÃO PARA SALVAR 
function salvarNoLocalStorage() {
    const dados = [];
    
    document.querySelectorAll('.kanban-column').forEach(column => {
        const id = column.getAttribute('data-id');
        const cardsContainer = column.querySelector('.kanban-cards');
        
        dados.push({
            id: id,
            conteudo: cardsContainer.innerHTML
        });
    });

    localStorage.setItem('kanbanData', JSON.stringify(dados)); 
}

// 5. FUNÇÃO PARA CARREGAR 
function carregarDoLocalStorage() {
    const dadosSalvos = localStorage.getItem('kanbanData');

    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);

        dados.forEach(colunaDados => {
            const column = document.querySelector(`.kanban-column[data-id="${colunaDados.id}"]`);
            
            if (column) {
                // Restaura os cards naquela coluna
                column.querySelector('.kanban-cards').innerHTML = colunaDados.conteudo;
            }
        });
    }
}



carregarDoLocalStorage();

adicionarEventosAosCards();