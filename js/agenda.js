document.addEventListener("DOMContentLoaded", function() {
    // Función para manejar el evento submit del formulario
    const form = document.getElementById("miFormulario");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Obtener datos del formulario
        const formData = {
            fecha: document.getElementById("fecha").value,
            hora: document.getElementById("hora").value,
            cancha: document.getElementById("cancha").value
        };

        // Ejemplo de solicitud fetch a una API
        fetch('http://localhost:8000/api/reservas/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            // Aquí puedes manejar la respuesta del servidor, redireccionar, mostrar mensajes, etc.
            window.location.href = 'pago.html'; // Ejemplo de redirección a otra página
        })
        .catch(error => {
            console.error('Error:', error);
            // Manejar errores aquí, mostrar mensajes al usuario, etc.
        });
    });
});