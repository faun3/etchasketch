//create 16x16 grid of square divs
let size = 16;
const gridContainer = document.querySelector('.grid');
const pixel = document.createElement('div');
pixel.textContent = 'ab';
pixel.style = 'aspect-ratio: 1;';
for (let i = 1; i <= size * size; i++){
    gridContainer.appendChild(pixel.cloneNode(true));
}