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
        const latexOutput = laplaceTransform;
        document.getElementById('resultado').innerHTML = 'Transformada de Laplace: $$' + latexOutput + '$$';
        MathJax.typeset();
    } catch (error) {
        document.getElementById('resultado').innerText = 'Error: ' + error.message;
    }
}

// Simulación mejorada de la transformada de Laplace
function laplaceTransformSim(expr, t, s) {
    if (expr.isConstantNode) {
        return `\\frac{1}{${s}}`;
    } else if (expr.isSymbolNode && expr.name === 't') {
        return `\\frac{1}{${s}^2}`;
    } else if (expr.isOperatorNode && expr.op === '^' && expr.args[0].name === 't') {
        const exponent = expr.args[1].evaluate();
        if (Number.isInteger(exponent)) {
            return `\\frac{${math.factorial(exponent)}}{${s}^${exponent + 1}}`;
        }
    } else if (expr.isFunctionNode && expr.fn.name === 'exp' && expr.args[0].isUnaryMinusNode) {
        const innerExpr = expr.args[0].args[0];
        if (innerExpr.isSymbolNode && innerExpr.name === 't') {
            return `\\frac{1}{${s} + 1}`;
        }
    } else if (expr.isFunctionNode && expr.fn.name === 'cos') {
        const innerExpr = expr.args[0];
        if (innerExpr.isSymbolNode && innerExpr.name === 't') {
            return `\\frac{${s}}{{${s}}^2 + 1}`;
        }
    } else if (expr.isFunctionNode && expr.fn.name === 'sin') {
        const innerExpr = expr.args[0];
        if (innerExpr.isSymbolNode && innerExpr.name === 't') {
            return `\\frac{1}{{${s}}^2 + 1}`;
        }
    } else if (expr.isFunctionNode && expr.fn.name === 'cosh') {
        const innerExpr = expr.args[0];
        if (innerExpr.isSymbolNode && innerExpr.name === 't') {
            return `\\frac{${s}}{{${s}}^2 - 1}`;
        }
    } else if (expr.isFunctionNode && expr.fn.name === 'sinh') {
        const innerExpr = expr.args[0];
        if (innerExpr.isSymbolNode && innerExpr.name === 't') {
            return `\\frac{1}{{${s}}^2 - 1}`;
        }
    }

    throw new Error('Función no soportada. Intente con 1, t, t^n, exp(-t), cos(t), sin(t), cosh(t), sinh(t)');
}
