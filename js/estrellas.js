document.addEventListener('DOMContentLoaded', function() {
    const container = document.body;
    const numLetters = 50; // Número de letras aleatorias

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const letterArray = letters.split('');

    // Crear un SVG absoluto para contener las letras y líneas
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', window.innerWidth);
    svg.setAttribute('height', window.innerHeight);
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.pointerEvents = 'none'; // Evitar que el SVG capture eventos de ratón

    // Arreglo para almacenar las posiciones iniciales de las líneas
    const linePositions = [];

    // Crear líneas aleatorias entre letras
    for (let i = 0; i < numLetters; i++) {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const endX = Math.random() * window.innerWidth;
        const endY = Math.random() * window.innerHeight;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute('x1', startX);
        line.setAttribute('y1', startY);
        line.setAttribute('x2', endX);
        line.setAttribute('y2', endY);
        line.setAttribute('stroke', 'rgba(255, 255, 255, 0.3)'); // Color de la línea con transparencia
        svg.appendChild(line);

        // Guardar las posiciones iniciales de las líneas
        linePositions.push({
            startX,
            startY,
            endX,
            endY
        });
    }

    // Crear letras aleatorias con movimiento
    const lettersElements = [];
    for (let i = 0; i < numLetters; i++) {
        const letter = document.createElementNS("http://www.w3.org/2000/svg", "text");
        letter.textContent = letterArray[Math.floor(Math.random() * letterArray.length)];
        letter.setAttribute('x', Math.random() * window.innerWidth);
        letter.setAttribute('y', Math.random() * window.innerHeight);
        letter.setAttribute('fill', '#fff');
        letter.style.fontSize = `${Math.random() * 2 + 1}em`; // Tamaño de letra aleatorio
        letter.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`; // Animación de movimiento

        svg.appendChild(letter);
        lettersElements.push(letter);
    }

    container.appendChild(svg);

    // Función para actualizar las posiciones de las líneas conforme las letras se mueven
    function updateLines() {
        for (let i = 0; i < numLetters; i++) {
            const letterPos = lettersElements[i].getBoundingClientRect();
            const line = svg.children[i]; // Obtener la línea correspondiente
            line.setAttribute('x1', linePositions[i].startX);
            line.setAttribute('y1', linePositions[i].startY);
            line.setAttribute('x2', letterPos.x + letterPos.width / 2);
            line.setAttribute('y2', letterPos.y + letterPos.height / 2);
        }
    }

    // Actualizar posiciones iniciales de las letras y líneas al inicio
    updateLines();

    // Actualizar líneas periódicamente mientras las letras se mueven
    setInterval(updateLines, 100); // Ajusta el intervalo según sea necesario
});
