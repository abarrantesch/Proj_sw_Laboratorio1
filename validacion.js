document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        document.getElementById('name-error').innerText = '';
        document.getElementById('email-error').innerText = '';
        document.getElementById('phone-error').innerText = '';

        if (name === "") {
            isValid = false;
            document.getElementById('name-error').innerText = "El nombre es obligatorio.";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            isValid = false;
            document.getElementById('email-error').innerText = "El correo electrónico es obligatorio.";
        } else if (!emailPattern.test(email)) {
            isValid = false;
            document.getElementById('email-error').innerText = "El correo electrónico no es válido.";
        }

        const phonePattern = /^[0-7]{8}$/;
        if (phone === "") {
            isValid = false;
            document.getElementById('phone-error').innerText = "El número de teléfono es obligatorio.";
        } else if (!phonePattern.test(phone)) {
            isValid = false;
            document.getElementById('phone-error').innerText = "El número de teléfono debe contener 8 dígitos.";
        }

        if (!isValid) {
            event.preventDefault(); 
        }
    });
});
