const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = 
[
    'https://i.postimg.cc/bvcp9gXs/jonathan-borba-6r-Onmv-EOKg-U-unsplash.jpg',
    'https://i.postimg.cc/cCHSL535/jonathan-borba-92dr-Kkzne-P4-unsplash.jpg',
    'https://i.postimg.cc/ncGqK9bY/234666a572046af02a9d6d8763387963.jpg',
    'https://i.postimg.cc/8zyW98C7/bailey-burton-s-QKHf-Nl-Uw9-U-unsplash.jpg'
];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);