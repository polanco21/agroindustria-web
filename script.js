// Interactividad del formulario
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
    document.getElementById('contact-form').reset();
});
