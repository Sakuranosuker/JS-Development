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
// let checkbox = document.getElementById("mycheckbox");
// let visa = document.getElementById("visa");
// let mastercard = document.getElementById("mastercard");
// let paypal = document.getElementById("paypal");

// let submit = document.getElementById("mysubmit");
// let operator = document.getElementById("operator-viewing");
// let payment = document.getElementById("payment-status");
// const check = document.getElementById("check");

// submit.onclick = function () {
//     if(checkbox.checked){
//         check.textContent = `You have checked the required button`;
//     }
//     else{
//         check.textContent = `You havent checked the button`;
//         payment.textContent = `Cannot proceed with payment`;
//         return;
//     }

//     if(visa.checked){
//         operator.textContent = `You have chosen VISA`;
//         payment.textContent = `Safe to proceed`;
//     }
//     else if (mastercard.checked){
//         operator.textContent = `You have chosen Mastercard`;
//         payment.textContent = `Safe to proceed`;
//     }
//     else if(paypal.checked){
//         operator.textContent = `You have chosen Paypal`
//         payment.textContent = `Safe to proceed`;
//     }
//     else{
//         operator.textContent = `You must select a payment type`;
//         payment.textContent = `Cannot procee with payment`;
//     }
// }

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
// function add(a,b){
//     let sum = a+b;
//     return sum;
// }
// console.log(add(20,69));

// Spread and Rest Parameters
// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result+=number;
//     }
//     console.log(`Resultant Sum is: ${result}`);
// }

// sum(1,2,3,4,5,6);

// Random Password generator.

// const passwordLength = 10;
// const includeLower = false;
// const includeUpper = false;
// const includeNumbers = true;
// const includeSymbols = false;

// function generatePassword(length,includelower,includeupper,includenumbers,includesymbols){
//     const lowerCase = "abcdefghijklmnopqrstuvwzyz";
//     const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "1234567890";
//     const symbols = "!@#$%^&*()_+-=<>,./?`~{}[]|:;";

//     let password = "";
//     let allowedChars = "";

//     allowedChars += includelower ? lowerCase : "";
//     allowedChars += includeupper ? upperCase : "";
//     allowedChars += includenumbers ? numbers : "";
//     allowedChars += includesymbols ? symbols : "";

//     console.log(`Allowed Characters: ${allowedChars}`);

//     if(length<=5)
//     {
//         return `Password Length must be atleast 5`;
//     }
//     if(allowedChars.length === 0){
//         return `At least 1 set of characters need to be selected.`;
//     }

//     for(let i=0;i<length;i++){
//         const randomIndex = Math.floor(Math.random()*allowedChars.length);
//         password += allowedChars.charAt(randomIndex);
//     }
//     return password;
// }

// const password = generatePassword(passwordLength,
//                                     includeLower,
//                                     includeUpper,
//                                     includeNumbers,
//                                     includeSymbols);
// console.log(`Password:${password}`);

// Callbacks in JS -
// hello(leave);
// goodbye();

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }
// function leave(){
//     console.log("Leave!");
// }
// function goodbye(){
//     console.log("Goodbye!");
// }

// Example 2
// sum(displayConsole, 12, 15);

// function sum(callback , x , y){
//     let result = x+y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

// forEach() method in JS -- element index and array are provided
// let numbers = [1,2,3,4,5,6];
// function display(element){
//     console.log(element);
// }

// function double(element, index, array){
//     array[index] = element*2;
// }

// numbers.forEach(double);
// numbers.forEach(display);

// map() method in JS --

// Example 1
// let numbers = [1,2,3,4,5,6];
// const newnums = numbers.map(cubes);

// console.log(newnums);

// function square(element){
//     return Math.pow(element,2);
// }

// function cubes(element){
//     return Math.pow(element,3);
// }

// Example 2
// const dates = ["2024-12-01","2022-3-19","18-10-22"];

//  function dateChange(element){
//     const parts = element.split("-");  // splits into array of 3 indexes 0,1,2 based on position dividev by '-'.
//     return `${parts[2]}-${parts[1]}-${parts[0]}`;
//  }

// const formattedDates = dates.map(dateChange);
// console.log(formattedDates);

// let numbers = [1,2,3,4,5,6];
// let evenNums = numbers.filter(isEven);

// function isEven(element){
//     return element % 2 === 0;
// }
// console.log(evenNums);

// const ages = [22,12,33,52,17,18,99]
// const adults = ages.filter(isAdult);
// console.log(adults);

// function isAdult(element){
//     return element>18;
// }

// const prices = [5,30,10,25,66];
// const total = prices.reduce(add);
// console.log(total);

// function add(accumulator , element){
//     return accumulator + element; // accumulator works as the previous element and element works as the next element.
//     // In the next iteration the new value returned from the previous iteration beocmes the value of the accumulator.
// }

// Functions in JS --

// setTimeout(function( ){
//  	console.log("Hello");
//  } , 3000);

// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map(function(element){
// 	return Math.pow(element,2);
// });
// console.log(squares);

// Arrow functions --

// function hello(){
//     console.log("Hello!");    // normal function
// }

// const hello = (name) => {console.log(`Hello! ${name}`)};    // arrow one liner function.
// hello("Ronit");

// let numbers = [1,2,3,4,5,6,7];
// let squares = numbers.map((element) => {return Math.pow(element,2)});
// console.log(squares);

// Objects in JS --

// const person = {
// 	name : "Ronit",
// 	favfood : "Pizza",
// 	sayHello : function(){console.log(`Hi I am ${this.name}`)} // this is used to reference to the current object
// }
// person.sayHello();

// Constructors in JS --

// function Car(make, model, year, colour){
// 	this.make = make;
// 	this.model = model;
// 	this.year = year;
// 	this.colour =colour;
// }

// const Car1 = new Car("Honda", "Civic", "2016", "Red");
// console.log(Car1.make);
// console.log(Car1.model);
// console.log(Car1.year);
// console.log(Car1.colour);

// Classes in JS --
// class Product {
// 	constructor(name, price){
// 		this.name = name;
// 		this.price = price;
// 	}
// 	displayProduct( ){
// 		console.log(`Procudt: ${this.name}`);
//         console.log(`Price: $${this.price}`);
// 	}
//     calculateTotal(salestax){
//         return this.price + (this.price * (salestax/100));
//     }
// }

// const tax = 18;
// const product = new Product("Haldi" , 13.77);
// product.displayProduct();
// totalPrice = product.calculateTotal(tax);
// console.log(`Total Price after Tax: $${totalPrice}`);

// Inheritance --
// class Animal {
// 	alive = true;
// 	sleep(){
// 		console.log(`This ${this.name} is sleeping`);
// 	}
// }
// class Rabbit extends Animal{
// 	name = "Rabbit";
// }

// const rabbit = new Rabbit();

// // rabbit.alive = false;
// console.log(rabbit.alive);
// rabbit.sleep();

// Getters and Setters --
// class Rectangle{
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth>0)
//             this._width = newWidth;
//         else
//             console.error("Width must be positive integer");
//     }
//     set height(newHeight){
//         if(newHeight>0)
//             this._height = newHeight;
//         else
//             console.error("Height must be positive integer");
//     }

//     get width(){
//         return this._width.toFixed(1);
//     }
//     get height(){
//         return this._height.toFixed(1);
//     }
//     get area(){
//         return (this._width * this._height);
//     }

// }

// const rectangle = new Rectangle(13 , 44);
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);    // Although not a property but still can be called like one bcz of the getter.

// Nested Objects --

// class Person{
//     constructor(name,age,...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Ronit",22,"37 NS Road","Kolkata","India");
//  console.log(person1.address.street);

// Array of Objects --
// const fruits = [{name: "apple", color:"red", calories:95},
// 					  {name: "orange", color:"orange", calories:105},
// 					  {name: "watermelon", color:"green", calories:95},
// 					  {name: "pineapple", color:"yellow", calories:130}];

// console.log(fruits[1].calories);

// Sorting -- .sort()

// let fruits = ["Apple", "Orange", "Guava","Coconut"];
// fruits.sort()
// console.log(fruits);

// CLOSURES --

// Normal function statement. Everytime the function is called the count variable gets reset to 1.
// function increment(){
//     let count = 0;
//     count++;
//     console.log(`Count is : ${count}`);
// }

// increment();
// increment();
// increment();

// Using closures --

// function createincrement(){
//     let count = 0;

//     function increase(){
//         count ++;
//         console.log(`Count Increased by 1 : ${count}`);
//     }
//     return (increase); // -- > Here the function returns kind of a object of the function.
//     //  The mother function increment() acts as kind of a class in this scenario.
// }

// const counter = createincrement(); // means the createincrement returns the function increase, thus counter variable is itself the increase function now.
// for(let i=0;i<20;i++){
//     counter(); // Thus for using the increase function we can just call the counter() variable with () brackets.
// }

// Or while returning from the mother function we use the { } -- curly braces and return the function name.
// Then the outer function acts like a class and we can use the inner fucntions like methods of the class.

// function createincrement(){
//     let count = 0;

//     function increase(){
//         count ++;
//         console.log(`Count Increased by 1 : ${count}`);
//     }

//     function getCount(){
//         return count;
//     }
//     return {increase,getCount};
// }

// const counter = createincrement();
// counter.increase();
// counter.getCount();

// SET-TIME-OUT --
// setTimeout(() => {
//     window.alert(`HELLOOOO`);
//    console.log(`Say Hello`);
// }, 5000);

// Asynchronous function --

// function func1(callback){
//     setTimeout(() => {console.log(`Function 1`), callback()}, 3000); // originally function 1 was supposed to be executed after 3000 seconds and in that way other statements were executed before it.
//   // But after using callback, the function 1 runs first and then the other functions run. Thus this is a example of waiting in case of asynchronous code.
// }

// function func2(){
//     console.log(`Function 2`);
//     console.log(`Function 3`);
//     console.log(`Function 4`);
// }

// func1(func2);

// Error handling --
// try{
//     console.log(`Hello`);
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("Finally Block executed always");
// }
// console.log(`Reached end of line`);

// DOM --
// console.dir(document);
// document.title = "My Webby";

// let username = "Ronit";
// document.getElementById("Hemlo").textContent += username === "" ? "Guest" : username;

// Adding and Removing HTML elements --
// const newH1 = document.createElement("h1");
// newH1.textContent = "I Like Pizza";
// newH1.id = "MyH1";
// newH1.style.color = "red";
// newH1.style.textAlign="center";
// document.body.prepend(newH1);
// Append -- adds to the end of the body/parent. Prepend -- adds to the starting of the body/parent.

// document.getElementById("box1").append(newH1)

// let mybox = document.getElementById("box1");
// mybox.onclick = function(){
//     mybox.textContent = `Aww you clicked me 😍`;
//     mybox.style.fontSize = "2rem";
// }

// can also be done using eventlisteners --

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Aww you touched me 😍";
// }
// mybox.addEventListener("click", changeColor);  // Passing the event and callback , can also pass an anonymous function or arrow function.

// mybox.addEventListener("mouseover", event => {
//     event.target.textContent = "Dont You do It 😤";
//     event.target.style.backgroundColor = "red";
// });

// mybox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "white";
//     event.target.textContent = "Ooouufff Relief 😰";
// });

// Moving image --

// const mybox = document.getElementById("box1");
// const movement = 10;
// let x=0;
// let y=0;

// document.addEventListener("keydown", event => {
//     console.log(event);
//     if(event.key.startsWith("Arrow")){
//         switch(event.key){
//             case "ArrowUp":
//                 y -= movement;
//                 break;
//             case "ArrowDown":
//                 y += movement;
//                 break;
//             case "ArrowLeft":
//                 x -= movement;
//                 break;
//             case "ArrowRight":
//                 x += movement;
//                 break;
//         }
//         mybox.style.top = `${y}px`;
//         mybox.style.left = `${x}px`;
//     }
//     else{
//         mybox.textContent="Wrong Key Pressed";
//     }
// });

// document.addEventListener("keydown", event =>{
//     mybox.textContent = "Yeee 😰";
//     mybox.style.backgroundColor = "tomato";
// })
// document.addEventListener("keyup", event =>{
//     mybox.textContent = "Click Me 😎";
//     mybox.style.backgroundColor = "lightgreen";
// })

//Showing and Hiding HTML elements --

// document.getElementById("button").addEventListener("click", event => {
//     if(document.getElementById("box1").style.display === "none"){
//         document.getElementById("box1").style.display = "block";
//         document.getElementById("button").textContent = "Hide";
//     }
//     else{
//         document.getElementById("box1").style.display = "none";
//         document.getElementById("button").textContent = "Show";
//     }
// });

// Callback Hell --

// function task1(callback){
//     setTimeout(() =>{
//         console.log("Task 1 is complete");
//         callback();
//     }, 3000);
// }
// function task2(callback){
//     setTimeout(() =>{
//         console.log("Task 2 is complete");
//         callback();
//     }, 2000);
// }
// function task3(callback){
//     setTimeout(() =>{
//         console.log("Task 3 is complete");
//         callback();
//     }, 1000);
// }
// function task4(callback){
//     setTimeout(() =>{
//         console.log("Task 4 is complete");
//         callback();
//     }, 500);
// }

// task1();
// task2();
// task3();
// task4();
// setTimeout(() => console.log("All Tasks Are Complete") , 3500);

// nesting Callbacks -- Callback Hell !!
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => console.log("All tasks completed"));
//         });
//     });
// });

// function WalkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const walkedDog = true;
//       if (walkedDog) {
//         resolve("You walk the Dog 🐕"); // resolve message given after the promise is resolved.
//       } else {
//         reject("You didnt walk the Dog 🐕"); // shows this message if the work is not done.
//       }
//     }, 3500);
//   });
// }
// function CleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cleanedKitchen = true;
//       if (cleanedKitchen) {
//         resolve("You clean the Kitchen 🔪"); // resolve message given after the promise is resolved.
//       } else {
//         reject("You didnt clean the Kitchen 🔪"); // shows this message if the work is not done.
//       }
//     }, 2500);
//   });
// }
// function TakeoutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const takenTrashOut = true;
//       if (takenTrashOut) {
//         resolve("You take out the Trash 🗑️"); // resolve message given after the promise is resolved.
//       } else {
//         reject("You didnt take out the Trash 🗑️"); // shows this message if the work is not done.
//       }
//     }, 1500);
//   });
// }

// Without promises we have to use callbacks for calling all the methods and may lead to callback hell.

// Thus we use Promises and we can call all the functions using Method Chaining.

// WalkDog()
//   .then((value) => {
//     console.log(value);
//     return CleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return TakeoutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("All Chores Completed");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Async / Await in JS --  gives us a

// async function doChores() {
//   try {
//     const walkDogResult = await WalkDog();
//     console.log(walkDogResult);

//     const cleanKitchenResult = await CleanKitchen();
//     console.log(cleanKitchenResult);

//     const takeOutTrashResult = await TakeoutTrash();
//     console.log(takeOutTrashResult);

//     console.log("You have completed the work!");
//   } catch (error) {
//     console.error(error);
//   }
// }

// doChores();

// JSON --

// const names = `[{
//     "name":"Ronit",
//     "age": 30,
//     "isEmployed": true,
//     "hobby": ["painting","swimming","designing"]
// },
// {
//     "name":"Fabio",
//     "age": 88,
//     "isEmployed": true
// }]`
// const jsonString = JSON.parse(names);    // after paring becomes a JS array.
// console.log(names);

// fetch("person.json")
//       .then(response => response.json())
//       .then(value => console.log(value))
//       .catch(error => console.log(error));

async function fetchData(){

    const pokemonName = document.getElementById("pokeInput").value.toLowerCase();
    

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data);

        const pokeImg = data.sprites.front_default;
        const imgElement = document.getElementById("pokeImg");

        imgElement.src = pokeImg;
        imgElement.style.display = "block";
}