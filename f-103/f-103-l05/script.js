const btnRed = document.querySelector('#red');
const images = document.querySelector('.string + div');
const win = document.querySelector('#win');
const redString = document.querySelector('#redStringID');
const btnBlue = document.querySelector('#blue');
const lost  = document.querySelector('#blueStringID');

btnRed.addEventListener('click', () => {
    images.classList.add('matrix');
    win.classList.add('redCom');
    win.classList.add('redString')
})
btnBlue.addEventListener('click', () => {
    images.classList.add('world')
    lost.classList.add('redCom');
    lost.classList.add('redString')
})