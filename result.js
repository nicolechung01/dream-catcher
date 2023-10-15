const result = sessionStorage.getItem('apiResponse');
if (result) {
    const resultElement = document.getElementById('api-result');
    resultElement.textContent = result;
} else {
    // Handle the case where the response is not found in session storage
    console.error('API response not found in session storage.');
}
