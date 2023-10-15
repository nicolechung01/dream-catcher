

document.addEventListener('DOMContentLoaded', function () {
    // Select the button element
    const apiButton = document.getElementById('interpret');

    // Add a click event listener to the button
    apiButton.addEventListener('click', makeApiRequest);
});

async function makeApiRequest() {

    // Get the content from the textarea
    const inputElement = document.getElementById('user-input');
    const input = inputElement.value;

    // Define the URL and request options
    const url = 'https://chatgpt-api6.p.rapidapi.com/standard-gpt';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '1aeb0132f1msh318716079ec4ee2p160069jsn91ef9808b8c5',
            'X-RapidAPI-Host': 'chatgpt-api6.p.rapidapi.com'
        },
        body: JSON.stringify({
            conversation: [
                {
                    role: 'user',
                    content: input
                }
            ]
        })
    };

    try {
        const response = await fetch(url, options);

        if (response.ok) {
            const result = await response.text();
            console.log(result);


            sessionStorage.setItem('apiResult', result);

            // Navigate to the second page
            window.location.href = 'result.html';

        } else {
            console.error('API request failed with status:', response.status);
        }
    } catch (error) {
        console.error(error);
    }
}