let forms = document.querySelectorAll('.conversion');
forms.forEach((form) => (form.style.display = 'none'));

let categorySelect = document.getElementById('conversion-Category');

categorySelect.addEventListener("change", function() {
    let userInput = catergorySelect.value;
    
    forms.forEach((form) => (form.style.display = 'none'));

    document.getElementById(userInput).style.display = 'block';
});