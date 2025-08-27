const roll_button = document.getElementById("roll_button");
let random = 0;
roll_button.onclick = function () {
    random = Math.floor(Math.random()*10)+1;
    document.getElementById("randno").textContent = random;
}