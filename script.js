// include api for currency
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// selecting the html elements
let conversionInput = document.getElementById('conversionInput');
let firstSelect = document.getElementById('firstSelect');
let secondSelect = document.getElementById('secondSelect');
const btn = document.querySelector('.convert-btn');
let finalValue = document.querySelector('.converted-value');
let finalAmount = document.querySelector('#converted-amount');

finalAmount.style.display = 'none';

btn.addEventListener('click', () => {
    if(!conversionInput.value) alert('Please, provide the value for conversion');

    else if(conversionInput.value <= 0) alert('Please, provide a positive value');

    else {
        getResult();
        finalAmount.style.display = 'block';
    }
});

function getResult() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResult);    
};

function displayResult(currency) {
    let fromRate = currency.rates[firstSelect.value];
    let toRate = currency.rates[secondSelect.value];
    finalValue.innerHTML = ((toRate / fromRate) * conversionInput.value).toFixed(2);
}
    


function reset() {
    conversionInput.value = '';
    finalAmount.style.display = 'none';
}