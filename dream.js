var text;
function getText() {
    text = document.getElementById("user-input").value;
}
document.addEventListener('DOMContentLoaded', function () {
    // Select the button and response container
    const sendButton = document.getElementById('interpret');
    const responseContainer = document.getElementById('api-result');
    getText();
    // Add a click event listener to the button
    sendButton.addEventListener('click', function () {
        const data = JSON.stringify({
            conversation: [
                {
                    role: 'user',
                    content: text
                }
            ]
        });

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener('readystatechange', function () {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    const responseText = xhr.responseText;
                    sessionStorage.setItem('apiResponse', responseText);
                } else {
                    console.error('Request failed with status:', xhr.status);
                }
            }
        });

        xhr.open('POST', 'https://chatgpt-api6.p.rapidapi.com/standard-gpt');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.setRequestHeader('X-RapidAPI-Key', '1aeb0132f1msh318716079ec4ee2p160069jsn91ef9808b8c5');
        xhr.setRequestHeader('X-RapidAPI-Host', 'chatgpt-api6.p.rapidapi.com');

        xhr.send(data);
    });
});
