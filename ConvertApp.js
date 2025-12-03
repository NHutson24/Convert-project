let forms = document.querySelectorAll('.conversion');
forms.forEach((form) => (form.style.display = 'none'));

let categorySelect = document.getElementById('conversion-Category');

categorySelect.addEventListener("change", function() {
    let userInput = categorySelect.value;
    
    forms.forEach((form) => (form.style.display = 'none'));

    document.getElementById(userInput).style.display = 'block';
});

// Using optional chaining to safely add event listeners
document.getElementById("distanceConvertBtn")?.addEventListener("click", disfFn);
document.getElementById("temperatureConvertBtn")?.addEventListener("click", tempFn);
document.getElementById("currencyConvertBtn")?.addEventListener("click", currencyFn);


function disfFn(){
    let value = parseFloat(document.getElementById("distanceInput").value);
    let fromUnit = document.getElementById("fromDistanceUnit").value;
    let toUnit = document.getElementById("toDistanceUnit").value;

    let result = 0;

    if(fromUnit === "miles" && toUnit === "kilometers"){
        result = (value) * 1.60934;
    }
    else if(fromUnit === "kilometers" && toUnit === "miles"){
        result = (value) * 0.621371;
    }

    document.getElementById("distanceResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

function tempFn(){
    let value = parseFloat(document.getElementById("temperatureInput").value);
    let fromUnit = document.getElementById("fromTemperatureUnit").value;
    let toUnit = document.getElementById("toTemperatureUnit").value;
    
    let result = 0;

    if(fromUnit === "celsius" && toUnit === "fahrenheit"){
        result = (value * 9/5) + 32;
    }
    else if(fromUnit === "fahrenheit" && toUnit === "celsius"){
        result = (value - 32) * 5/9;
    }
    
    document.getElementById("temperatureResult").textContent = `Result: ${result.toFixed(2)} °${toUnit === "celsius" ? "C" : "F"}`;
}

function currencyFn(){
    let value = parseFloat(document.getElementById("currencyInput").value);
    let fromUnit = document.getElementById("fromCurrencyUnit").value;
    let toUnit = document.getElementById("toCurrencyUnit").value;

    let result = 0;

    const rates = {
        "USD": { "TTD": 6.8 },
        "TTD": { "USD": 0.147 }
    };


    /*Currency conversion, if the fromUnit
    and toUnit are different, it looks up  coversion value
    in rates[fromUnit][toUnit] and multiplies it by the input value,
    then stores it in result.
    
    Else if currency are the same then result = value. */

    if(fromUnit !== toUnit){
        result = value * rates[fromUnit][toUnit];
    } else {
        result = value;
    }

    document.getElementById("currencyResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}