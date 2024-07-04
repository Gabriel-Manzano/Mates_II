function crearInputFuncion(funcion) {
    var inputContainer = document.getElementById("inputContainer");
    var inputs = '';
    switch (funcion) {
        case '1':
            inputs = '<button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'1\')">Calcular</button>';
            break;
        case 't':
            inputs = '<button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'t\')">Calcular</button>';
            break;
        case 't^2':
            inputs = '<button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'t^2\')">Calcular</button>';
            break;
        case 't^n':
            inputs = '<label for="valorN">Ingrese el valor de n:</label><input type="number" id="valorN" name="valorN" class="form-control" required oninput="actualizarVistaPrevia(\'t^n\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'t^n\')">Calcular</button>';
            break;
        case 'e^{at}':
            inputs = '<label for="valorA">Ingrese el valor de a:</label><input type="number" id="valorA" name="valorA" class="form-control" required oninput="actualizarVistaPrevia(\'e^{at}\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'e^{at}\')">Calcular</button>';
            break;
        case '\\cos(bt)':
        case '\\sin(bt)':
        case '\\sinh(bt)':
        case '\\cosh(bt)':
            inputs = '<label for="valorB">Ingrese el valor de b:</label><input type="number" id="valorB" name="valorB" class="form-control" required oninput="actualizarVistaPrevia(\'' + funcion + '\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'' + funcion + '\')">Calcular</button>';
            break;
        case 'e^{at} \\cos(bt)':
        case 'e^{at} \\sin(bt)':
            inputs = '<label for="valorA">Ingrese el valor de a:</label><input type="number" id="valorA" name="valorA" class="form-control" required oninput="actualizarVistaPrevia(\'' + funcion + '\')"><label for="valorB">Ingrese el valor de b:</label><input type="number" id="valorB" name="valorB" class="form-control" required oninput="actualizarVistaPrevia(\'' + funcion + '\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'' + funcion + '\')">Calcular</button>';
            break;
        case '\\delta(t - a)':
        case 'u(t - a)':
            inputs = '<label for="valorA">Ingrese el valor de a:</label><input type="number" id="valorA" name="valorA" class="form-control" required oninput="actualizarVistaPrevia(\'' + funcion + '\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'' + funcion + '\')">Calcular</button>';
            break;
        case '\\frac{1}{t}':
            inputs = '<button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'\\frac{1}{t}\')">Calcular</button>';
            break;
        case 't e^{at}':
            inputs = '<label for="valorA">Ingrese el valor de a:</label><input type="number" id="valorA" name="valorA" class="form-control" required oninput="actualizarVistaPrevia(\'t e^{at}\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'t e^{at}\')">Calcular</button>';
            break;
        case 't^n e^{at}':
            inputs = '<label for="valorN">Ingrese el valor de n:</label><input type="number" id="valorN" name="valorN" class="form-control" required oninput="actualizarVistaPrevia(\'t^n e^{at}\')"><label for="valorA">Ingrese el valor de a:</label><input type="number" id="valorA" name="valorA" class="form-control" required oninput="actualizarVistaPrevia(\'t^n e^{at}\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'t^n e^{at}\')">Calcular</button>';
            break;
        case 'sinh(at) \\cosh(bt)':
        case 'cosh(at) \\sinh(bt)':
            inputs = '<label for="valorA">Ingrese el valor de a:</label><input type="number" id="valorA" name="valorA" class="form-control" required oninput="actualizarVistaPrevia(\'' + funcion + '\')"><label for="valorB">Ingrese el valor de b:</label><input type="number" id="valorB" name="valorB" class="form-control" required oninput="actualizarVistaPrevia(\'' + funcion + '\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'' + funcion + '\')">Calcular</button>';
            break;
        case '\\int_{0}^{t} f(\\tau) d\\tau':
            inputs = '<label for="funcionF">Ingrese la función F(t):</label><input type="text" id="funcionF" name="funcionF" class="form-control" required oninput="actualizarVistaPrevia(\'\\int_{0}^{t} f(\\tau) d\\tau\')"><label for="valorT">Ingrese el valor de t:</label><input type="number" id="valorT" name="valorT" class="form-control" required oninput="actualizarVistaPrevia(\'\\int_{0}^{t} f(\\tau) d\\tau\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'\\int_{0}^{t} f(\\tau) d\\tau\')">Calcular</button>';
            break;
        case 'f\'(t)':
        case 'f\'\'(t)':
            inputs = '<label for="funcionF">Ingrese la función F(t):</label><input type="text" id="funcionF" name="funcionF" class="form-control" required oninput="actualizarVistaPrevia(\'' + funcion + '\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'' + funcion + '\')">Calcular</button>';
            break;
        case 'e^{bt} t^n':
            inputs = '<label for="valorB">Ingrese el valor de b:</label><input type="number" id="valorB" name="valorB" class="form-control" required oninput="actualizarVistaPrevia(\'e^{bt} t^n\')"><label for="valorN">Ingrese el valor de n:</label><input type="number" id="valorN" name="valorN" class="form-control" required oninput="actualizarVistaPrevia(\'e^{bt} t^n\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'e^{bt} t^n\')">Calcular</button>';
            break;
        case 't \\sin(at)':
        case 't \\cos(at)':
            inputs = '<label for="valorA">Ingrese el valor de a:</label><input type="number" id="valorA" name="valorA" class="form-control" required oninput="actualizarVistaPrevia(\'' + funcion + '\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'' + funcion + '\')">Calcular</button>';
            break;
        case '\\sin(at + b)':
        case '\\cos(at + b)':
            inputs = '<label for="valorA">Ingrese el valor de a:</label><input type="number" id="valorA" name="valorA" class="form-control" required oninput="actualizarVistaPrevia(\'' + funcion + '\')"><label for="valorB">Ingrese el valor de b:</label><input type="number" id="valorB" name="valorB" class="form-control" required oninput="actualizarVistaPrevia(\'' + funcion + '\')"><button type="button" class="btn btn-primary mt-2" onclick="calcularFuncion(\'' + funcion + '\')">Calcular</button>';
            break;
    }
    inputContainer.innerHTML = inputs;
    document.getElementById("resultado").innerHTML = '';
    actualizarVistaPrevia(funcion);
}
//---------------------------------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*ACTUALIZACION DE LAS VISTAS EN LOS DIV FORMULA */
function actualizarVistaPrevia(funcion) {
    var vistaPrevia = document.getElementById("vistaPrevia");
    var valorA = document.getElementById("valorA") ? document.getElementById("valorA").value : "";
    var valorB = document.getElementById("valorB") ? document.getElementById("valorB").value : "";
    var valorN = document.getElementById("valorN") ? document.getElementById("valorN").value : "";
    var funcionF = document.getElementById("funcionF") ? document.getElementById("funcionF").value : "";
    var valorT = document.getElementById("valorT") ? document.getElementById("valorT").value : "";

    if (funcion === 't^n') {
        vistaPrevia.innerHTML = '\\( t^{' + valorN + '} \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( t^n \\)';
    } else if (funcion === 'e^{at}') {
        vistaPrevia.innerHTML = '\\( e^{' + valorA + 't} \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( e^{at} \\)';
    } else if (funcion === '\\cos(bt)') {
        vistaPrevia.innerHTML = '\\( \\cos(' + valorB + 't) \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( \\cos(bt) \\)';
    } else if (funcion === '\\sin(bt)') {
        vistaPrevia.innerHTML = '\\( \\sin(' + valorB + 't) \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( \\sin(bt) \\)';
    } else if (funcion === '\\sinh(bt)') {
        vistaPrevia.innerHTML = '\\( \\sinh(' + valorB + 't) \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( \\sinh(bt) \\)';
    } else if (funcion === '\\cosh(bt)') {
        vistaPrevia.innerHTML = '\\( \\cosh(' + valorB + 't) \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( \\cosh(bt) \\)';
    } else if (funcion === 'e^{at} \\cos(bt)') {
        vistaPrevia.innerHTML = '\\( e^{' + valorA + 't} \\cos(' + valorB + 't) \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( e^{at} \\cos(bt) \\)';
    } else if (funcion === 'e^{at} \\sin(bt)') {
        vistaPrevia.innerHTML = '\\( e^{' + valorA + 't} \\sin(' + valorB + 't) \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( e^{' + valorA + 't} \\sin(' + valorB + 't) \\)';
    } else if (funcion === '\\delta(t - a)') {
        vistaPrevia.innerHTML = '\\( \\delta(t - ' + valorA + ') \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( \\delta(t - ' + valorA + ') \\)';
    } else if (funcion === 'u(t - a)') {
        vistaPrevia.innerHTML = '\\( u(t - ' + valorA + ') \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( u(t - ' + valorA + ') \\)';
    } else if (funcion === '1') {
        vistaPrevia.innerHTML = '\\( 1 \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( 1 \\)';
    } else if (funcion === 't') {
        vistaPrevia.innerHTML = '\\( t \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( t \\)';
    } else if (funcion === 't^2') {
        vistaPrevia.innerHTML = '\\( t^2 \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( t^2 \\)';
    } else if (funcion === '\\frac{1}{t}') {
        vistaPrevia.innerHTML = '\\( \\frac{1}{t} \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( \\frac{1}{t} \\)';
    } else if (funcion === 't e^{at}') {
        vistaPrevia.innerHTML = '\\( t e^{at} \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( t e^{' + valorN + 't} \\)';
    } else if (funcion === 't^n e^{at}') {
        vistaPrevia.innerHTML = '\\( t^{' + valorN + '} e^{' + valorA + 't} \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( t^n e^{at} \\)';
    } else if (funcion === 'sinh(at) \\cosh(bt)') {
        vistaPrevia.innerHTML = '\\( \\sinh(' + valorA + 't) \\cosh(' + valorB + 't) \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( \\sinh(at) \\cosh(bt) \\)';
    } else if (funcion === 'cosh(at) \\sinh(bt)') {
        vistaPrevia.innerHTML = '\\( \\cosh(' + valorA + 't) \\sinh(' + valorB + 't) \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( \\cosh(at) \\sinh(bt) \\)';
    } else if (funcion === '\\int_{0}^{t} f(\\tau) d\\tau') {
        vistaPrevia.innerHTML = '\\( \\int_{0}^{' + valorT + '} ' + funcionF + ' d\\tau \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( \\int_{0}^{t} f(\\tau) d\\tau \\)';
    } else if (funcion === 'f\'(t)') {
        vistaPrevia.innerHTML = '\\( f\'(t) \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( f\'(t) \\)';
    } else if (funcion === 'f\'\'(t)') {
        vistaPrevia.innerHTML = '\\( f\'\'(t) \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( f\'\'(t) \\)';
    } else if (funcion === 'e^{bt} t^n') {
        vistaPrevia.innerHTML = '\\( e^{' + valorB + 't} t^{' + valorN + '} \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( e^{bt} t^n \\)';
    } else if (funcion === 't \\sin(at)') {
        vistaPrevia.innerHTML = '\\( t \\sin(' + valorA + 't) \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( t \\sin(at) \\)';
    } else if (funcion === 't \\cos(at)') {
        vistaPrevia.innerHTML = '\\( t \\cos(' + valorA + 't) \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( t \\cos(at) \\)';
    } else if (funcion === '\\sin(at + b)') {
        vistaPrevia.innerHTML = '\\( \\sin(' + valorA + 't + ' + valorB + ') \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( \\sin(at + b) \\)';
    } else if (funcion === '\\cos(at + b)') {
        vistaPrevia.innerHTML = '\\( \\cos(' + valorA + 't + ' + valorB + ') \\)';
        document.getElementById("formulaOriginal").innerHTML = '\\( \\cos(at + b) \\)';
    }

    MathJax.typeset();
}
//---------------------------------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*CALCULO DE LAS INTEGRALES EN EL DIV DE RESULTADO */
function calcularFuncion(funcion) {
    var resultado = '';
    var valorA = document.getElementById("valorA") ? document.getElementById("valorA").value : "";
    var valorB = document.getElementById("valorB") ? document.getElementById("valorB").value : "";
    var valorN = document.getElementById("valorN") ? document.getElementById("valorN").value : "";
    

    switch (funcion) {
        case '1':
            resultado = '\\( \\frac{1}{s} \\)';
            break;
        case 't':
            resultado = '\\( \\frac{1}{s^2} \\)';
            break;
        case 't^2':
            resultado = '\\( \\frac{2}{s^3} \\)';
            break;
        case 't^n':
            factorialN = 1;
        
        
            for (let i = 1; i <= valorN; i++) {
                factorialN *= i;
            }
            
            resultado = '\\( \\frac{' + factorialN + '}{s^{' + (parseInt(valorN) + 1) + '}} \\)';
            break;
        case 'e^{at}':
            resultado = '\\( \\frac{1}{s - ' + valorA + '} \\)';
            break;
        case 'cos(bt)':
            resultado = '\\( \\frac{s}{s^2 + ' + valorB**2 + '} \\)';
            break;
        case 'sin(bt)':
            resultado = '\\( \\frac{' + valorB + '}{s^2 + ' + valorB**2 + '} \\)';
            break;
        case 'sinh(bt)':
            resultado = '\\( \\frac{' + valorB + '}{s^2 - ' + valorB**2 + '} \\)';
            break;
        case 'cosh(bt)':
            resultado = '\\( \\frac{s}{s^2 - ' + valorB**2 + '} \\)';
            break;
        case 'e^{at} cos(bt)':
            resultado = '\\( \\frac{s - ' + valorA + '}{(s - ' + valorA + ')^2 + ' + valorB**2 + '} \\)';
            break;
        case 'e^{at} sin(bt)':
            resultado = '\\( \\frac{' + valorB + '}{(s - ' + valorA + ')^2 + ' + valorB**2 + '} \\)';
            break;
        case 'delta(t - a)':
            resultado = '\\( e^{-' + valorA + 's} \\)';
            break;
        case 'u(t - a)':
            resultado = '\\( \\frac{e^{-' + valorA + 's}}{s} \\)';
            break;
        case 'frac{1}{t}':
            resultado = '\\( \\ln(s) \\)';
            break;
        case 't e^{at}':
            resultado = '\\( \\frac{1}{(s - ' + valorA + ')^2} \\)';
            break;
        case 't^n e^{at}':
             factorialN = 1;
        
        
            for (let i = 1; i <= valorN; i++) {
                factorialN *= i;
            }

            resultado = '\\( \\frac{' + factorialN + '}{(s - ' + valorA + ')^{' + (parseInt(valorN) + 1) + '}} \\)';
            break;
        case 'sinh(at) cosh(bt)':
            resultado = '\\( \\frac{' + valorA + '}{s^2 - ' + valorA**2     + '} \\)';
            break;
        case 'cosh(at) sinh(bt)':
            resultado = '\\( \\frac{s}{s^2 - ' + valorA**2 + '} \\)';
            break;
        case '\\int_{0}^{t} f(\\tau) d\\tau': //!!NO FUNCIONA
            resultado = '\\( \\frac{F(s)}{s} \\)';
            break;
        case 'f\'(t)'://!!NO FUNCIONA
            resultado = '\\( sF(s) - f(0) \\)';
            break;
        case 'f\'\'(t)'://!!NO FUNCIONA
            resultado = '\\( s^2F(s) - sf(0) - f\'(0) \\)';
            break;
        case 'e^{bt} t^n':

        factorialN = 1;
        
        
        for (let i = 1; i <= valorN; i++) {
            factorialN *= i;
        }



            resultado = '\\( \\frac{' + factorialN + '}{(s - ' + valorB + ')^{' + (parseInt(valorN) + 1) + '}} \\)';
            break;
        case 't sin(at)':
            resultado = '\\( \\frac{' + 2*valorA + 's}{(s^2 + ' + valorA**2 + ')^2} \\)';
            break;
        case 't cos(at)':
            resultado = '\\( \\frac{s^2 - ' + valorA**2 + '}{(s^2 + ' + valorA**2    + ')^2} \\)';
            break;
        case 'sin(at + b)':
            resultado = '\\( \\frac{' + valorA + ' \\cos(' + valorB + ') + s \\sin(' + valorB + ')}{s^2 + ' + valorA**2 + '} \\)';
            break;
        case 'cos(at + b)':
             
            resultado = '\\( \\frac{s \\cos(' + valorB + ') - ' + valorB + ' \\sin(' + valorB + ')}{s^2 + ' + valorA**2 + '} \\)';
            break;
    }
    document.getElementById("resultado").innerHTML = resultado;
    MathJax.typeset();
}