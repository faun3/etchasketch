//create 16x16 grid of square divs
let size = 16;
const gridContainer = document.querySelector('.grid');
const pixel = document.createElement('div');
pixel.style.cssText = 'border: 1px solid black;';
pixel.style.cssText = 'width: 6.25%; margin: auto;';
pixel.style.cssText = 'aspect-ratio: 1 / 1;';
pixel.textContent = 'ab';
for (let i = 1; i <= size * size; i++){
    gridContainer.appendChild(pixel.cloneNode(true));
}