//add squares
const squares = document.querySelector('.squares');

for(let i = 0; i <= 340; i++) {
  squares.insertAdjacentHTML('beforeend', '<div class=\'square\'></div>')
}