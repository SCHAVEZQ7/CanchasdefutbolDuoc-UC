document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Obtener datos del formulario
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Crear objeto para el inicio de sesión
        const loginData = {
            username: email, // Usar 'username' en lugar de 'email'
            password: password
        };

        // Enviar solicitud POST al backend
        fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(data.detail || 'Inicio de sesión fallido');
                });
            }
            return response.json();
        })
        .then(data => {
            // Almacenar los tokens en localStorage
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            alert('Inicio de sesión exitoso');
            window.location.href = 'Agenda.html'; // Redirigir a la página de la agenda
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al iniciar sesión: ' + error.message);
        });
    });
});