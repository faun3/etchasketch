//create 16x16 grid of square divs
let size = 16;
const gridContainer = document.querySelector('.grid');
const pixel = document.createElement('div');
pixel.style.cssText = 'border: 2px; border-color: black; background-color: black;';
pixel.textContent='a';
for (let i = 1; i <= size * size; i++){
    gridContainer.appendChild(pixel.cloneNode(true));
}