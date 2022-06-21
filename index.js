const colors = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#board');
const lengthBoard = document.querySelector('#board-size');
const genarateBoard = document.querySelector('#generate-board');

let r; let g; let b;

function createRGB() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
}

function createPaletteColors() {
  colors.forEach((palette, index) => {
    createRGB();
    const paletteColor = palette;
    if (index === 0) {
      paletteColor.style.backgroundColor = 'black';
    } else {
      paletteColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
  });
}

function minLength(board, length) {
  return board < length;
}

function maxLength(board, length) {
  return board > length;
}

function verifyLengthBoard() {
  const FIVE = 5;
  const FIFTY = 50;
  switch (true) {
  case minLength(lengthBoard.value, FIVE):
    return FIVE;
  case maxLength(lengthBoard.value, FIFTY):
    return FIFTY;
  case minLength(FIVE, lengthBoard.value) && maxLength(FIFTY, lengthBoard.value):
    return lengthBoard.value;
  default:
    return FIVE;
  }
}

function getElementWithClassSelected() {
  return document.querySelector('.selected');
}

function toPaint({ target }) {
  const color = getElementWithClassSelected();
  const pixel = target;
  pixel.style.backgroundColor = color.style.backgroundColor;
}

function createPixel() {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.style.backgroundColor = 'white';
  pixel.addEventListener('click', toPaint);
  return pixel;
}

function createPixelBoard() {
  const board = document.createElement('div');
  board.setAttribute('id', 'pixel-board');
  return board;
}

function generatePixelBoard() {
  const boardSize = verifyLengthBoard();
  for (let index = 0; index < boardSize; index += 1) {
    const board = createPixelBoard();
    for (let i = 0; i < boardSize; i += 1) {
      board.appendChild(createPixel());
    }
    pixelBoard.appendChild(board);
  }
}

function selectedColor() {
  colors.forEach((palete) => {
    palete.addEventListener('click', () => {
      getElementWithClassSelected().classList.remove('selected');
      palete.classList.add('selected');
    });
  });
}

function initialColorSelected() {
  colors[0].classList.add('selected');
}

genarateBoard.addEventListener('click', () => {
  if (lengthBoard.value === '') {
    alert('Board inválido');
  } else {
    pixelBoard.innerHTML = '';
    generatePixelBoard();
  }
});

window.onload = () => {
  createPaletteColors();
  generatePixelBoard();
  initialColorSelected();
  selectedColor();
};
