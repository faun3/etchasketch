function createBoard(size)
{
    let color='';
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
            color = colorGenerator();
            square.style.backgroundColor = `${color}`;
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

function colorGenerator()
{
    let colorString ='';
    const colorNumber = Math.floor(Math.random() * 16777215).toString(16);
    colorString = "#" + colorNumber;
    return colorString;
}

createBoard(16);