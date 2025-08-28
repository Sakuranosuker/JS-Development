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

// document.getElementById("radH1").textContent = "Circumference";
// document.getElementById("radiusSubmit").onclick = function(){
//     const pi = 3.14159;
//     radius = document.getElementById("radiusInput").value;
//     radius = Number(radius);
//     circumference  = 2*pi*radius;
//     document.getElementById("radiusShow").textContent = `Circumference found is: ${circumference}`;
// }

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
// let age = 25;
// if(age>18)
//     console.log(`You can enter the site`);
// else
//     console.log(`You cannot enter the site`); 


// Checkbox tutorial -- 
let checkbox = document.getElementById("mycheckbox");
let visa = document.getElementById("visa");
let mastercard = document.getElementById("mastercard");
let paypal = document.getElementById("paypal");

let submit = document.getElementById("mysubmit");
let operator = document.getElementById("operator-viewing");
let payment = document.getElementById("payment-status");
const check = document.getElementById("check");


submit.onclick = function () {
    if(checkbox.checked){
        check.textContent = `You have checked the required button`;
    }
    else{
        check.textContent = `You havent checked the button`;
        payment.textContent = `Cannot proceed with payment`;
        return;
    }

    if(visa.checked){
        operator.textContent = `You have chosen VISA`;
        payment.textContent = `Safe to proceed`;
    }
    else if (mastercard.checked){
        operator.textContent = `You have chosen Mastercard`;
        payment.textContent = `Safe to proceed`;
    }
    else if(paypal.checked){
        operator.textContent = `You have chosen Paypal`
        payment.textContent = `Safe to proceed`;
    }
    else{
        operator.textContent = `You must select a payment type`;
        payment.textContent = `Cannot procee with payment`;
    }
}

// Ternary operator -
// let age = 19;
// console.log(age>18 ? (age>21 ? `Adult` : `Teen`) : `Minor`);


//  String operations -
// let username = "10Ronit";
// if(username.startsWith(` `)){
//     console.log(`Your username cannot start with a whitespace`);
// }
// else{
// let i=0;
// for (i = 0; i < 10; i++){
//     if(username.startsWith(i.toString()))
//     {
//         console.log(`Your username cannot start with a number`);
//         break;
//     }
// }
// }

// let fullname = "RONIT DEY"
// let firstname = fullname.slice(0,5);
// console.log(firstname);

// let email = "ronitdey@gmail.com";
// console.log(`The username is : ${email.slice(0, email.indexOf("@"))}`);
// console.log(`The extension is: ${email.slice(email.indexOf("@")+1)}`); // all after the index of "@" in the string.


// Method calling --
// let username = "  roNItdeY  ";
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(username.charAt(0)+1).toLowerCase();
// console.log(username);


// Loops --
// let loggedin = false;
// let username;
// let password;

// while(!loggedin){
//     username = window.prompt(`Enter your username:`);
//     password = window.prompt(`Enter your paswsword:`);

//     if(username == "Ronit" && password == "ronitdey1122"){
//         loggedin = true;
//         console.log("LOGGED IN SUCCESSFULLY");
//     }
//     else{
//         console.log(`Wrong credentials try again`);
//     }
// }

// Functions --
function add(a,b){
    let sum = a+b;
    return sum;
}
console.log(add(20,69));