const img = document.getElementById('carousel');
const direitaBTN = document.getElementById('btn-direita');
const esquerdaBTN = document.getElementById('btn-esquerda');

// Imagens upada em unsplash.com
let imagens = [
    'https://i.postimg.cc/bvcp9gXs/jonathan-borba-6r-Onmv-EOKg-U-unsplash.jpg',
    'https://i.postimg.cc/cCHSL535/jonathan-borba-92dr-Kkzne-P4-unsplash.jpg',
    'https://i.postimg.cc/ncGqK9bY/234666a572046af02a9d6d8763387963.jpg',
    'https://i.postimg.cc/8zyW98C7/bailey-burton-s-QKHf-Nl-Uw9-U-unsplash.jpg'
];

img.src = imagens[0];
let position = 0;

// Passar Imagens a direita ao clicar no botão da direita
const nextdireita = () => {
    if (position >= imagens.length - 1) {
        position = 0
        img.src = imagens[position];
        return;
    }
    img.src = imagens[position + 1];
    position++;
}

// Passar Imagens a Esquerda ao clicar no botão da Esjquerda
const nextesquerda = () => {
    if (position < 1) {
        position = imagens.length - 1;
        img.src = imagens[position];
        return;
    }
    img.src = imagens[position - 1];
    position--;
}

// Evento que liga os botões a função de passar a direita ou esquerda
direitaBTN.addEventListener("click", nextdireita);
esquerdaBTN.addEventListener("click", nextesquerda);