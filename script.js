const toggleButton = document.getElementById('toggle-button');
const body = document.body;

function toggleButtonclick() {
    body.classList.toggle('night-mode');

    if (body.classList.contains('night-mode')) {
        toggleButton.textContent = 'Day';
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        toggleButton.style.backgroundColor = 'white'
        toggleButton.style.color = 'black'
    } else {
        toggleButton.textContent = 'Night';
        body.style.backgroundColor = ''
        body.style.color = ''
        toggleButton.style.backgroundColor = ''
        toggleButton.style.color = ''

    }
};