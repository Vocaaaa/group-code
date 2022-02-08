let blackButton = document.getElementById('black');
let purpleButton = document.getElementById('purple');
let redButton = document.getElementById('red');
let standardButton = document.getElementById('standard');

blackButton.addEventListener('click', changeBgToBlack);
purpleButton.addEventListener('click', changeBgToPurple);
redButton.addEventListener('click', changeBgToRed);
standardButton.addEventListener('click', changeBgToStandard);

document.body.style.background = 'rgb(45, 45, 73)';

function changeBgToBlack() {
    document.body.style.background = 'black';
}
function changeBgToPurple() {
    document.body.style.background = '#9146FF';
}
function changeBgToRed() {
    document.body.style.background = 'red';
}
function changeBgToStandard() {
    document.body.style.background = 'rgb(45, 45, 73)';
}