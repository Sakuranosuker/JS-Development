let fruitnames = ["mango","apple","cucumber","peach","mango","mango"];
fruitnames = fruitnames.filter((fruit) => {
    return fruit !== "mango";
})
console.log(fruitnames);