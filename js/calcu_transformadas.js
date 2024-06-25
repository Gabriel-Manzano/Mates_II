// calcu_transformadas.js

function insertarTexto(texto) {
    const inputFuncion = document.getElementById('funcion');
    const posicionCursor = inputFuncion.selectionStart;
    const textoAnterior = inputFuncion.value.substring(0, posicionCursor);
    const textoPosterior = inputFuncion.value.substring(posicionCursor);
    inputFuncion.value = textoAnterior + texto + textoPosterior;
}

function actualizarVistaPrevia() {
    const funcion = document.getElementById('funcion').value;
    const vistaPrevia = document.getElementById('vistaPrevia');
    vistaPrevia.innerHTML = 'Vista previa: $$' + funcion + '$$';
    MathJax.typeset();
}

function calcularLaplace() {
    const funcion = document.getElementById('funcion').value;
    try {
        // Convertir la entrada en una expresión matemática usando math.js
        const expr = math.parse(funcion);
        const t = math.parse('t');
        const s = math.parse('s');
        
        // Calcular la transformada de Laplace (esta es una simulación ya que no existe en math.js)
        const laplaceTransform = laplaceTransformSim(expr, t, s);
        
        // Generar LaTeX
        const latexOutput = laplaceTransform.replace(/\//g, '\\frac{').replace(/s\-/g, 's} - ').replace(/s\+/g, 's} + ');
        document.getElementById('resultado').innerHTML = 'Transformada de Laplace: $$' + latexOutput + '$$';
        MathJax.typeset();
    } catch (error) {
        document.getElementById('resultado').innerText = 'Error: ' + error.message;
    }
}

// Simulación mejorada de la transformada de Laplace
function laplaceTransformSim(expr, t, s) {
    if (expr.isConstantNode) {
        return `\\frac{${expr.value}}{${s}}`;
    } else if (expr.isSymbolNode && expr.name === 't') {
        return `\\frac{1}{${s}^2}`;
    } else if (expr.isOperatorNode && expr.op === '^' && expr.args[0].name === 't') {
        const exponent = expr.args[1].evaluate();
        if (Number.isInteger(exponent)) {
            return `\\frac{${math.factorial(exponent)}}{${s}^${exponent + 1}}`;
        }
    } else if (expr.isFunctionNode && (expr.fn.name === 'exp' || expr.fn.name === 'cos' || expr.fn.name === 'sin' || expr.fn.name === 'cosh' || expr.fn.name === 'sinh')) {
        const innerExpr = expr.args[0];
        if (innerExpr.isOperatorNode && innerExpr.op === '*' && Number.isInteger(innerExpr.args[0].value) && innerExpr.args[1].name === 't') {
            const a = innerExpr.args[0].value;
            switch (expr.fn.name) {
                case 'exp':
                    return `\\frac{1}{${s} - ${a}}`;
                case 'cos':
                    return `\\frac{${s}}{${s}^2 + ${a**2}}`;
                case 'sin':
                    return `\\frac{${a}}{${s}^2 + ${a**2}}`;
                case 'cosh':
                    return `\\frac{${s}}{${s}^2 - ${a**2}}`;
                case 'sinh':
                    return `\\frac{${a}}{${s}^2 - ${a**2}}`;
                default:
                    throw new Error(`Función ${expr.fn.name} no soportada para la transformada de Laplace.`);
            }
        }
    }

    throw new Error('Función no soportada. Intente con 1, t, t^n, exp(-t), cos(t), sin(t), cosh(t), sinh(t)');
}
