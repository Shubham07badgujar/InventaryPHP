// // script.js

// const scriptURL = 'https://script.google.com/macros/s/AKfycbwNNHf-HHeC3_pBQ3oYX5O8Gww7uA1iwKt3unE0hboHA0MNG98IYdIqCcLbbIvgb017ng/exec'
// const form = document.forms['google-sheet']

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
//     .catch(error => console.error('Error!', error.message))
// })



// document.getElementById('deleteForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Gather form data
//     const formData = new FormData(this);
//     let message = "Form submitted successfully!";

//     // Display the success message
//     document.getElementById('formMessage').textContent = message;

//     // Animate the form container
//     const formContainer = document.querySelector('.form-container');
//     formContainer.style.transform = 'scale(1.05)'; // Scale up
//     setTimeout(() => {
//         formContainer.style.transform = 'scale(1)'; // Scale back to original
//     }, 300); // Duration for scaling effect

//     // Optionally, you could clear the form after submission
//     this.reset();
// });


// Replace with your Google Apps Script URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbwNNHf-HHeC3_pBQ3oYX5O8Gww7uA1iwKt3unE0hboHA0MNG98IYdIqCcLbbIvgb017ng/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent default form submission

    // Send form data to Google Apps Script
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Thanks for contacting us! We will get back to you soon.");
            form.reset(); // Clear the form after submission
        })
        .catch(error => console.error('Error!', error.message));
});

// Handling a separate delete form submission
document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Display a success message
    let message = "Form submitted successfully!";
    document.getElementById('formMessage').textContent = message;

    // Animate the form container
    const formContainer = document.querySelector('.form-container');
    formContainer.style.transform = 'scale(1.05)'; // Scale up
    setTimeout(() => {
        formContainer.style.transform = 'scale(1)'; // Scale back to original
    }, 300); // Duration for scaling effect

    // Optionally, clear the delete form after submission
    this.reset();
});
