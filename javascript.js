function createBoard(size)
{
    const board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement('beforeend', square);
    }
}

function resizeBoard(size)
{
    createBoard(size);
}

createBoard(10);
resizeBoard(16);
resizeBoard(10);