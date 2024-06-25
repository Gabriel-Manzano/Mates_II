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
        validarEntrada(funcion);

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

// Función para validar la entrada
function validarEntrada(funcion) {
    if (!/^[0-9+\-*/^() \t.a-zA-Z{}]+$/.test(funcion)) {
        throw new Error('Entrada no válida. Asegúrese de que la función contenga solo números y operadores matemáticos.');
    }
}

// Simulación mejorada de la transformada de Laplace
function laplaceTransformSim(expr, t, s) {
    try {
        if (expr.isConstantNode) {
            return `\\frac{${expr.value}}{${s}}`;
        } else if (expr.isSymbolNode && expr.name === 't') {
            return `\\frac{1}{${s}^2}`;
        } else if (expr.isOperatorNode && expr.op === '^' && expr.args[0].name === 't') {
            const exponent = expr.args[1].evaluate();
            if (Number.isInteger(exponent) && exponent >= 0) {
                return `\\frac{${math.factorial(exponent)}}{${s}^${exponent + 1}}`;
            }
        } else if (expr.isFunctionNode) {
            const innerExpr = expr.args[0];
            if (innerExpr.isOperatorNode && innerExpr.op === '*' && Number.isFinite(innerExpr.args[0].evaluate()) && innerExpr.args[1].name === 't') {
                const k = innerExpr.args[0].evaluate();
                switch (expr.fn.name) {
                    case 'sin':
                        return `\\frac{${k}}{${s}^2 + ${k**2}}`;
                    case 'sinh':
                        return `\\frac{${k}}{${s}^2 - ${k**2}}`;
                    default:
                        throw new Error(`Función ${expr.fn.name} no soportada para la transformada de Laplace.`);
                }
            }
        } else if (expr.isOperatorNode && expr.op === '*') {
            const leftExpr = expr.args[0];
            const rightExpr = expr.args[1];
            if (leftExpr.isFunctionNode && leftExpr.fn.name === 'exp') {
                const a = leftExpr.args[0].evaluate();
                if (rightExpr.isFunctionNode && rightExpr.fn.name === 'cosh') {
                    const k = rightExpr.args[0].args[0].evaluate();
                    return `\\frac{${s}}{${s}^2 - ${k**2}} \\cdot e^{- ${a} t}`;
                } else if (rightExpr.isFunctionNode && rightExpr.fn.name === 'sinh') {
                    const k = rightExpr.args[0].args[0].evaluate();
                    return `\\frac{${k}}{${s}^2 - ${k**2}} \\cdot e^{- ${a} t}`;
                }
            }
        } else if (expr.isOperatorNode && expr.op === '/') {
            const numerator = expr.args[0];
            const denominator = expr.args[1].evaluate();
            if (numerator.isOperatorNode && numerator.op === '-' && numerator.args.length === 2) {
                const exp1 = numerator.args[0];
                const exp2 = numerator.args[1];
                if (exp1.isFunctionNode && exp1.fn.name === 'exp' && exp2.isFunctionNode && exp2.fn.name === 'exp') {
                    const a = exp1.args[0].evaluate();
                    const b = exp2.args[0].evaluate();
                    if (denominator === a - b) {
                        return `\\frac{e^{- ${a} t} - e^{- ${b} t}}{${a - b}}`;
                    }
                }
            }
        }
    
        throw new Error('Función no soportada. Intente con sin(kt), sinh(kt), e^{at}cosh(kt), t^n, o (e^{at} - e^{bt})/(a-b)');
    } catch (error) {
        throw new Error('Datos incorrectos o función no soportada.');
    }
}
