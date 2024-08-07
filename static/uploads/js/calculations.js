// static/js/calculations.js
function performCalculations() {
    const inputElement = document.getElementById('input-value');
    const resultElement = document.getElementById('calculation-result');

    function calculate() {
        const inputValue = parseFloat(inputElement.value);
        if (isNaN(inputValue)) {
            resultElement.textContent = 'Please enter a valid number.';
            return;
        }

        // Example calculation
        const result = inputValue * 2; // Replace with your actual calculation
        resultElement.textContent = `Result: ${result}`;
    }

    // Attach event listeners
    inputElement.addEventListener('input', calculate);
    document.getElementById('calculate-button').addEventListener('click', calculate);
}

window.onload = performCalculations;
