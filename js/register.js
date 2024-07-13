document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const rut = document.getElementById("rut").value;
        const edad = document.getElementById("edad").value;
        const carrera = document.getElementById("carrera").value;
        const email = document.getElementById("email").value;
        const duoc = document.getElementById("duoc").value;
        const password = document.getElementById("password").value;
        const confirm_password = document.getElementById("confirm_password").value;

        if (password !== confirm_password) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const user = {
            nombre,
            apellidos,
            rut,
            edad,
            carrera,
            email,
            duoc,
            password,
            confirm_password
        };

        fetch('http://localhost:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(data.error || 'Registro fallido');
                });
            }
            return response.json();
        })
        .then(data => {
            alert('Registro exitoso');
            // Almacena el token en localStorage
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            window.location.href = 'login.html';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al registrar el usuario');
        });
    });
});