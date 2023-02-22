//create 16x16 grid of square divs
let size = 10;
const gridContainer = document.querySelector('.grid');
const pixel = document.createElement('div');
pixel.textContent = 'ab';
pixel.style = 'aspect-ratio: 1;';
gridContainer.style = `grid-template-columns: repeat(${size}, 1fr);`
for (let i = 1; i <= size * size; i++){
    gridContainer.appendChild(pixel.cloneNode(true));
}