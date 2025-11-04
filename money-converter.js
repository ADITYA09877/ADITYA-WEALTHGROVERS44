const exchangeRates = {
    'INR': { 'USD': 0.012, 'EUR': 0.011, 'GBP': 0.0095, 'AUD': 0.018, 'CAD': 0.016, 'SGD': 0.016, 'JPY': 1.75, 'AED': 0.044 },
    'USD': { 'INR': 83.5, 'EUR': 0.92, 'GBP': 0.79, 'AUD': 1.5, 'CAD': 1.35, 'SGD': 1.35, 'JPY': 145, 'AED': 3.67 },
    'EUR': { 'INR': 91, 'USD': 1.09, 'GBP': 0.86, 'AUD': 1.63, 'CAD': 1.47, 'SGD': 1.47, 'JPY': 157, 'AED': 4 },
    'GBP': { 'INR': 105, 'USD': 1.27, 'EUR': 1.16, 'AUD': 1.9, 'CAD': 1.71, 'SGD': 1.71, 'JPY': 182, 'AED': 4.66 },
    'AUD': { 'INR': 55.5, 'USD': 0.67, 'EUR': 0.61, 'GBP': 0.53, 'CAD': 0.9, 'SGD': 0.9, 'JPY': 96, 'AED': 2.46 },
    'CAD': { 'INR': 61.5, 'USD': 0.74, 'EUR': 0.68, 'GBP': 0.59, 'AUD': 1.11, 'SGD': 1, 'JPY': 107, 'AED': 2.72 },
    'SGD': { 'INR': 62.5, 'USD': 0.75, 'EUR': 0.69, 'GBP': 0.59, 'AUD': 1.12, 'CAD': 1, 'JPY': 107, 'AED': 2.75 },
    'JPY': { 'INR': 0.58, 'USD': 0.0069, 'EUR': 0.0064, 'GBP': 0.0055, 'AUD': 0.01, 'CAD': 0.0093, 'SGD': 0.0093, 'AED': 0.025 },
    'AED': { 'INR': 22.7, 'USD': 0.27, 'EUR': 0.25, 'GBP': 0.21, 'AUD': 0.41, 'CAD': 0.37, 'SGD': 0.36, 'JPY': 39.5 }
};

let conversionHistory = [];

async function performConversion() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount-input').value);
    const errorMessage = document.getElementById('error-message');
    const loadingSpinner = document.getElementById('loading-spinner');
    const resultSection = document.getElementById('result-section');

    errorMessage.classList.remove('show');
    errorMessage.textContent = '';

    if (!amount || amount <= 0) {
        showError('Please enter a valid amount');
        return;
    }

    if (fromCurrency === toCurrency) {
        showError('Please select different currencies');
        return;
    }

    loadingSpinner.classList.add('show');
    resultSection.classList.remove('show');

    try {
        const rate = await getExchangeRate(fromCurrency, toCurrency);

        if (rate) {
            const result = (amount * rate).toFixed(2);
            displayResult(amount, fromCurrency, result, toCurrency, rate);

            conversionHistory.push({
                from: fromCurrency,
                to: toCurrency,
                amount: amount,
                result: result,
                rate: rate,
                timestamp: new Date()
            });
        } else {
            showError('Could not fetch exchange rate. Please try again.');
        }
    } catch (error) {
        console.error('Conversion error:', error);
        showError('An error occurred during conversion. Please try again.');
    } finally {
        loadingSpinner.classList.remove('show');
    }
}

async function getExchangeRate(from, to) {
    try {
        if (from === 'INR' && exchangeRates[from][to]) {
            return exchangeRates[from][to];
        } else if (exchangeRates[from] && exchangeRates[from][to]) {
            return exchangeRates[from][to];
        }

        const apiKey = 'fca_live_SAMPLE_KEY';
        const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${from}&currencies=${to}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data && data.data[to]) {
                exchangeRates[from] = exchangeRates[from] || {};
                exchangeRates[from][to] = data.data[to];
                return data.data[to];
            }
        }

        if (exchangeRates[from] && exchangeRates[from][to]) {
            return exchangeRates[from][to];
        }

        return null;
    } catch (error) {
        console.warn('API call failed, using fallback rates:', error);
        if (exchangeRates[from] && exchangeRates[from][to]) {
            return exchangeRates[from][to];
        }
        return null;
    }
}

function displayResult(amount, fromCurrency, result, toCurrency, rate) {
    const resultValue = document.getElementById('result-value');
    const exchangeRateDisplay = document.getElementById('exchange-rate');
    const resultInput = document.getElementById('result-input');
    const resultSection = document.getElementById('result-section');

    resultValue.textContent = `${result} ${toCurrency}`;
    exchangeRateDisplay.textContent = `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
    resultInput.value = result;

    resultSection.classList.add('show');
}

function swapCurrencies() {
    const fromSelect = document.getElementById('from-currency');
    const toSelect = document.getElementById('to-currency');
    const fromValue = fromSelect.value;
    const toValue = toSelect.value;

    fromSelect.value = toValue;
    toSelect.value = fromValue;

    const resultInput = document.getElementById('result-input');
    const amountInput = document.getElementById('amount-input');

    if (resultInput.value) {
        amountInput.value = resultInput.value;
    }

    const resultSection = document.getElementById('result-section');
    resultSection.classList.remove('show');
}

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.classList.add('show');

    setTimeout(() => {
        errorMessage.classList.remove('show');
    }, 5000);
}

document.getElementById('amount-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performConversion();
    }
});

document.getElementById('amount-input').addEventListener('input', function() {
    document.getElementById('result-input').value = '';
    document.getElementById('result-section').classList.remove('show');
});

document.getElementById('from-currency').addEventListener('change', function() {
    document.getElementById('result-input').value = '';
    document.getElementById('result-section').classList.remove('show');
});

document.getElementById('to-currency').addEventListener('change', function() {
    document.getElementById('result-input').value = '';
    document.getElementById('result-section').classList.remove('show');
});

window.addEventListener('load', function() {
    document.getElementById('amount-input').value = '1000';
});
