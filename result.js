const responseString = sessionStorage.getItem('apiResponse');
if (responseString) {
    const resultElement = document.getElementById('api-result');
    resultElement.textContent = responseString;
} else {
    // Handle the case where the response is not found in session storage
    console.error('API response not found in session storage.');
}
