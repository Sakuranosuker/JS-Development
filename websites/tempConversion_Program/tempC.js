// Temp conversion --

const textbox = document.getElementById("textbox");
const fahrenheit = document.getElementById("fahrenheit");
const celcius = document.getElementById("celcius");
const results = document.getElementById("results");

let temp;
// conversion
function convert(){
    if(fahrenheit.checked){
        temp = Number(textbox.value);
        let result = (9/5)*temp+32;
        results.textContent = `Fahrenheit temp: ${result}°F`;
    }
    else if(celcius.checked){
        temp = Number(textbox.value);
        let result = (temp-32)*(5/9);
        results.textContent = `Celcius temp: ${result}°C`;
    }
    else
        results.textContent = `Please Select a Unit`;
}