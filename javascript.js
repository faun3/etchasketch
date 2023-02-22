//create 16x16 grid of square divs
let size = 10;
const gridContainer = document.querySelector('.grid');
const pixel = document.createElement('div');
pixel.style = 'aspect-ratio: 1;';
gridContainer.style = `grid-template-columns: repeat(${size}, 1fr);`
for (let i = 1; i <= size * size; i++){
    gridContainer.appendChild(pixel.cloneNode(true));
}

pixel.addEventListener('onmouseover', function (e) {
    console.log(e);
});

const squares = document.querySelectorAll('.grid > div');
squares.forEach((square) => {
    square.addEventListener('onmouseover', () => {
        square.style = 'background-color: black;';
    });

    square.addEventListener('onmouseout', () => {
        square.style = 'background-color: white;';
    });
});
//const pixels = document.querySelectorAll(pixel);
//pixels.forEach((pixel) => {
    //pixel.addEventListener('onmousehover', function (e) => {
        //console.log(e);
    //});
//});
