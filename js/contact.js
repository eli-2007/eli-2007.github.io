const nameBox = document.getElementById('name');
const emailBox = document.getElementById('email');
const messageBox = document.getElementById('message');
const submitButton = document.getElementById('submit');

function submitForm() {
    const name = nameBox.value;
    const email = emailBox.value;
    const message = messageBox.value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields');
        return;
    }    
}