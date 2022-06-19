const colors = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#board');
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

function createPixel() {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.style.backgroundColor = 'white';
  return pixel;
}

function createPixelBoard() {
  const board = document.createElement('div');
  board.setAttribute('id', 'pixel-board');
  return board;
}

function generatePixelBoard() {
  for (let index = 0; index < 5; index += 1) {
    const board = createPixelBoard();
    for (let i = 0; i < 5; i += 1) {
      board.appendChild(createPixel());
    }
    pixelBoard.appendChild(board);
  }
}

window.onload = () => {
  createPaletteColors();
  generatePixelBoard();
};
