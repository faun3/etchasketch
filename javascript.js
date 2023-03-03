function createBoard(size)
{
    if (size < 2 || size > 100){
        alert('Size must be between between [2; 100]!');
        return;
    } 
    const board = document.querySelector('.board');
    const squares = board.querySelectorAll('div');
    squares.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        board.insertAdjacentElement('beforeend', square);
    }
}

const resizeButton = document.querySelector('button');
resizeButton.addEventListener('click', () => {
    let boardSize = prompt('What size should the new board be?');
    createBoard(boardSize);
});

function resizeBoard(size)
{
    createBoard(size);
}

createBoard(16);