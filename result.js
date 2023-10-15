document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the stored result from session storage
    const storedResult = sessionStorage.getItem('apiResult');

    if (storedResult) {
        // Display the result on the second page
        const resultElement = document.getElementById('api-result');
        resultElement.textContent = storedResult;
    }
});