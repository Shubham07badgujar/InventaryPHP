const scriptURL = 'https://script.google.com/macros/s/AKfycbxkgWotCMyvIKoT9aGtPCndZdHtHrq8i972t9CKAVjO6xC7T0I/exec'
        const form = document.forms['google-sheet']
    
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})
    


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Product/Item Delete Section
    const invoiceNumber = document.getElementById('invoiceNumber').value;
    const invoiceDate = document.getElementById('invoiceDate').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const quantity = document.getElementById('quantity').value;
    const totalAmount = document.getElementById('totalAmount').value;
    const invoicePDF = document.getElementById('invoicePDF').value;
    const supplierName = document.getElementById('supplierName').value;
    const vendorMobile = document.getElementById('vendorMobile').value;
    const vendorEmail = document.getElementById('vendorEmail').value;
    const receivedBy = document.getElementById('receivedBy').value;
    const receivedMobile = document.getElementById('receivedMobile').value;
    const currentlyInPossession = document.getElementById('currentlyInPossession').value;
    const currentMobile = document.getElementById('currentMobile').value;

    // Simple validation
    if (name && email && phone && address && subject && message && invoiceNumber && invoiceDate && itemPrice && quantity && totalAmount && invoicePDF && supplierName && vendorMobile && vendorEmail && receivedBy && receivedMobile && currentlyInPossession && currentMobile) {
        document.getElementById('formMessage').textContent = 'Thank you for your submission!';
        document.getElementById('contactForm').reset(); // Reset the form
    } else {
        document.getElementById('formMessage').textContent = 'Please fill in all fields.';
    }
});
