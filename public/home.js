let blackButton = document.getElementById('black');
let purpleButton = document.getElementById('purple');
let redButton = document.getElementById('red');
let standardButton = document.getElementById('standard');
let sendBtn = document.getElementById("btn");
let textArea = document.getElementById("text-area");

blackButton.addEventListener('click', changeBgToBlack);
purpleButton.addEventListener('click', changeBgToPurple);
redButton.addEventListener('click', changeBgToRed);
standardButton.addEventListener('click', changeBgToStandard);

document.body.style.background = 'rgb(45, 45, 73)';

function changeBgToBlack() {
    document.body.style.background = 'black';
    textArea.style.borderColor = "lime";
    textArea.style.outlineColor = "lime";

    sendBtn.style.borderColor = "lime";
}
function changeBgToPurple() {
    document.body.style.background = '#9146FF';
    textArea.style.borderColor = "white";
    textArea.style.outlineColor = "white";

    sendBtn.style.borderColor = "white";
}
function changeBgToRed() {
    document.body.style.background = 'red';
}
function changeBgToStandard() {
    document.body.style.background = 'rgb(45, 45, 73)';
    textArea.style.borderColor = "#9146FF";
    textArea.style.outlineColor = "#9146FF";

    sendBtn.style.borderColor = "#9146FF";
}