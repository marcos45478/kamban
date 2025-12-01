🎯 ProjectBoard – Kanban Web App
<p align="center"> <img src="https://img.shields.io/badge/Status-Concluído-4CAF50?style=for-the-badge"> <img src="https://img.shields.io/badge/Feito%20com-HTML%20%7C%20CSS%20%7C%20JS-2196F3?style=for-the-badge"> <img src="https://img.shields.io/badge/Persistência-LocalStorage-FFC107?style=for-the-badge"> </p> <p align="center"> Um gerenciador de tarefas no estilo <strong>Kanban</strong>, totalmente funcional, responsivo e com salvamento automático no <strong>LocalStorage</strong>. </p>
📌 Visão Geral

O ProjectBoard é uma aplicação web que permite organizar tarefas através de colunas do tipo:

📝 A Fazer

🔧 Fazendo

✅ Concluído

Você pode arrastar e soltar cards, e a posição deles é salva automaticamente mesmo ao atualizar a página.

🚀 Funcionalidades

✔ Drag & Drop suave e intuitivo
✔ Salva automaticamente no navegador (LocalStorage)
✔ Mantém a ordem e a coluna dos cards após atualizar a página
✔ 100% responsivo
✔ Visual limpo e moderno
✔ Interface simples e eficiente

🧠 Como Funciona a Lógica
🔹 1. Eventos de arrastar e soltar

Os cards recebem eventos de início e final do arraste:

function dragStart(e) { e.currentTarget.classList.add('dragging'); }
function dragEnd(e) { e.currentTarget.classList.remove('dragging'); }

🔹 2. Quando o card é solto em uma coluna
column.addEventListener('drop', e => {
    const dragCard = document.querySelector('.kanban-card.dragging');
    e.currentTarget.appendChild(dragCard);
    salvarNoLocalStorage();
});

🔹 3. Salvando o estado do quadro
localStorage.setItem('kanbanData', JSON.stringify(dados));

🔹 4. Restaurando tudo ao abrir a página
const dados = JSON.parse(localStorage.getItem('kanbanData'));

📁 Estrutura do Projeto
📂 projeto-kanban
 ├── index.html
 ├── css/
 │    └── style.css
 ├── js/
 │    └── script.js
 └── img/
      └── logo.png

▶ Como Executar
1️⃣ Baixe ou clone:
git clone https://github.com/marcos45478/kamban

2️⃣ Abra o arquivo:
index.html


Pronto! Não precisa instalar nada.

🛠 Tecnologias Utilizadas

HTML5

CSS3

JavaScript ES6+

LocalStorage

Font Awesome

🎓 Canais de Inspiração

Foram usados estudos e conhecimentos dos seguintes criadores:

🔹 Programação Web

Fundamentos de desenvolvimento web e estrutura blak-end.

🔹 Everton Dev – LocalStorage

Aulas práticas sobre salvar, carregar e manipular dados no navegador.

🔹 Larissa Kich – CSS

Estudos de responsividade, layout e boas práticas visuais.

🌟 Melhorias Futuras

Criar novos cards dinamicamente

Edição inline dos cards

Modo claro/escuro

Criar novas colunas

Sistema de login com usuários

👤 Autor

Marcos
Desenvolvedor Full stak em formação 🚀
