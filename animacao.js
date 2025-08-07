/*Animação do carrossel dos parceiros*/

window.onload = () => {
        const list = document.getElementById('image-list');
        const items = list.querySelectorAll('li'); // Seleciona todos os itens
    
        // Duplicando os itens da lista para garantir um ciclo contínuo
        items.forEach(item => {
            const clone = item.cloneNode(true); // Clona o item
            list.appendChild(clone); // Adiciona a cópia ao final da lista
        });
    };
