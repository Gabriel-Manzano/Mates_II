// botones.js

// Función para insertar texto en el campo de entrada 'funcion'
function insertarTexto(texto) {
    const funcionInput = document.getElementById('funcion');
    // Guardar la posición del cursor antes de insertar el texto
    const startPos = funcionInput.selectionStart;
    const endPos = funcionInput.selectionEnd;
    // Insertar el texto en la posición del cursor
    funcionInput.value = funcionInput.value.substring(0, startPos) +
                         texto +
                         funcionInput.value.substring(endPos, funcionInput.value.length);
    // Mover el cursor a la posición después del texto insertado
    funcionInput.selectionStart = startPos + texto.length;
    funcionInput.selectionEnd = startPos + texto.length;
    // Actualizar la vista previa
    actualizarVistaPrevia();
}
