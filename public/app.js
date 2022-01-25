let button = document.getElementById("btn");
let emppos = document.getElementById("emppos");

button.addEventListener("click", animateImage);

function animateImage() {
    emppos.classList.toggle("animate");
}