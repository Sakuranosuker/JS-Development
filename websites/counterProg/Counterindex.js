// Counter Prog --
const incbtn = document.getElementById("increase");
const decbtn = document.getElementById("decrease");
const resbtn = document.getElementById("reset");
const countLabel = document.getElementById("countLabel");

let count = 0;
incbtn.onclick = function(){
    count++;
    document.getElementById("countLabel").textContent = count;
}
decbtn.onclick = function(){
    count--;
    document.getElementById("countLabel").textContent = count;
}
resbtn.onclick = function(){
    count = 0;
    document.getElementById("countLabel").textContent = count;
}
