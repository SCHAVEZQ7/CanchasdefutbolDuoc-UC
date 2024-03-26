<?php
session_start();

// Verifica si se enviaron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica si se ingresó un correo electrónico
    if (isset($_POST["email"])) {
        // Aquí debes implementar la lógica para generar y enviar un código de verificación al correo electrónico proporcionado

        // Por simplicidad, generaremos un código aleatorio de 6 dígitos
        $codigo_verificacion = rand(100000, 999999);

        // Guarda el código de verificación en la sesión
        $_SESSION["codigo_verificacion"] = $codigo_verificacion;

        // Aquí deberías enviar el código de verificación por correo electrónico al usuario
        
        // Redirige al usuario a ingresar el código de verificación
        header("Location: ingresar_codigo.php");
        exit;
    }
}
?>
