// Printing in JS -- console.log('Hello to Javascript');                
// Sending an alert window to the user -- window.alert(`Namaste to JS`); 

// Changing the text content of text element.
// document.getElementById("UserH1").textContent = 'Hello'; 
// For including string anywhere can use single quotes, double quotes or backticks. But backticks are the best to use, gives no problems.
// document.getElementById("myPara") .textContent = 'I like pizza';

// CTRL + K and CTRL + I for hoving action in vs code.
// SHIFT + ALT+ N for running code.

// let x; // declaration
// x = 123; // assignment 
// console.log(x)
// console.log(`You are ${x} years old`)
// console.log(typeof x)

// let food = "Burger" // Strings
// console.log(`Your favourite food is ${food}`)
// let flag = false // Boolean

// let fullName = "Ronit Dey"
// let rollno = "2205236"

// document.getElementById("P1").textContent = `Your name is ${fullName}`;
// document.getElementById("P2").textContent = `Your roll no is ${rollno}`;

// taking User Input -->
// let username = window.prompt("Enter the username?");
// document.getElementById("P1").textContent = `Your name is ${username}`;

// document.getElementById("UserSubmit").onclick = function(){
//     username = document.getElementById("UserInput").value;
//     console.log(username);
//     document.getElementById("UserH1").textContent = `Hello ${username}`;
// }

//Typrconversion --
// let age = window.prompt("Enter Age:");
// age = Number(age); // converting the age to number.
// age +=2;
// console.log(age); // Does string concatenation -- adds 2 to end of string input.

// let x = "Pizza";
// let y = "Pizza";
// let z = "Pizza";

// x = String(x);
// y = Number(y);
// z = Boolean(z); // Gives true if theres any value given

// console.log(x);
// console.log(y);
// console.log(z);

//CONST --
// const pi = 3.14159;
// let radius =  window.prompt(`Enter the radius:`);
// radius = Number(radius);
// let circum = 2*pi*radius;
// console.log(circum)

document.getElementById("radH1").textContent = "Circumference";
document.getElementById("radiusSubmit").onclick = function(){
    const pi = 3.14159;
    radius = document.getElementById("radiusInput").value;
    radius = Number(radius);
    circumference  = 2*pi*radius;
    document.getElementById("radiusShow").textContent = `Circumference found is: ${circumference}`;
}

//MATH OPERATIONS --

// let x = 3.21;
// let y = 2;
// let z = Math.trunc(x);
// console.log(z);
// console.log(Math.pow(x,y));
// console.log(Math.sqrt(x));
// let a = 10;
// console.log(Math.log(a));
// console.log(Math.max(x,y,z))

// let randno = Math.random() * 6;
// console.log(randno)

// const min = 50;
// const max = 100;
// let random = Math.floor(Math.random() * (max-min)) + min;
// console.log(random);

// IF - Statements --
let age = 25;
if(age>18)
    console.log(`You can enter the site`);
else
    console.log(`You cannot enter the site`); 