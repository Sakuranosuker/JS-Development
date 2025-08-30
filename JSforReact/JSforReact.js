function doSomething(){
    // normal JS
}

// Arrow functions --
const doSomething = () => {
    // as used most in react.
}
// For exporting we use -->
export const doSomething = () => {}

// Anonymous functions --
<button onClick={() => {     // Anonymous function used on button click.
    console.log(`Hello`);
    }}
></button>

// Ternary Operators --
// React allows to write Javascript directly in html (advanced form of html -- jsx) thus its very helpful.

// Thus for wrting conditionals directly in react ternary operators are very useful --
let age = 10;
age > 10 ? console.log("Pedro") : console.log("Jack"); // full if-else logic.

age > 10 && "Pedro"; // -- if age>10 sets name as Pedro.
age > 10 || "Pedro"; // does the opposite of above. -- if age not > 10 then sets name as Pedro.(else part only)

// OBJECTS -- Most Important for React.

const person = {
    name: "Pedro";
    age: 20;
    isMarried = false;
}
// Normal accessing object elements.
const name = person.name;
const ages = person.age;

// Destructuring objects --
const {myname,myage,married} = person;
// Takes values from person and assign them to the const values.  
console.log(myname);

// Object creation trick --
const mynames = "Ronit";
const myages = 22;

const personnel ={
    mynames,
    myages,
};
// Helps in object creation from already available const variables.

const person2 = {...person, name:"Jack",age:22}; // Spread takes the original object and then customizes the name and age from it.

const names = ["Pedro" , "Ronit" , "Tinor"];
let names2 = [...names , "Ronit"];
console.log(names2);

// Fundamental functions of JS Arrays --
let fruits = ["mango","apple","cucumber","peach","mango","mango"];
// Map -- takes each elkement from an array or list and then helps in performing operations on them.
fruits = fruits.map((fruit) => {
    return fruit+"69";
})
console.log(fruits)

// Usage --
let familynames = ["ronit" , "raul" , "sunit" , "rupa"];
familynames.map((name) => {
    return <h1>{name}</h1>    // returns a H1 header with every name from the list.
})

// Filter -- helps in filtering contents of an array or list based on certain criterias.
let fruitnames = ["mango","apple","cucumber","peach","mango","mango"];
fruitnames = fruitnames.filter((fruit) => {
    return fruit !== "mango";
})
console.log(fruitnames);


// Very useful for fetching data from APIs.
Async , Await , Fetch -->

// DOM - Document Object Model -->

// Optional Chaining -->
// A lot of times we may be fetching and dealing with data and it may lead to breaking React.
// If the data or field is not present.

const fetchData = async(animalName)=> {

    const data = await fetch(`myapi.com/search/${animalName}`); // Searching for animals in the api.
    const hello = data.person?.name; // Helps in checking if the person variable is created with name attribute before fetching.
    
}


