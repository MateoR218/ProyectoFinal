document.getElementById("btnEnviar").addEventListener("click", function() {
  alert("Mensaje enviado");
});

// Función para mostrar la alerta
function mostrarAlerta() {
  alert("No disponible actualmente");
}

// Asignar la función a los botones
document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar todos los botones con la clase
  const botones = document.querySelectorAll(".btn-primary");

  // Añadir el evento "click" a cada botón
  botones.forEach(function(boton) {
      boton.addEventListener("click", function(event) {
          event.preventDefault(); // Evitar el comportamiento por defecto (navegación)
          mostrarAlerta(); // Mostrar la alerta
      });
  });
});