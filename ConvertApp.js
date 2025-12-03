let forms = document.querySelectorAll('.conversion');
forms.forEach((form) => (form.style.display = 'none'));

let categorySelect = document.getElementById('conversion-Category');

categorySelect.addEventListener("change", function() {
    let userInput = catergorySelect.value;
    
    forms.forEach((form) => (form.style.display = 'none'));

    document.getElementById(userInput).style.display = 'block';
});

document.getElementById("distanceConvertBtn").addEventListener("click", disfFn);
document.getElementById("temperatureConvertBtn").addEventListener("click", tempFn);
document.getElementById("currencyCOnvertBtn").addEventListener("click", currencyFn);


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