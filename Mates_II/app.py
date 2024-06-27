from flask import Flask, render_template, request, jsonify
import sympy as sp

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/enfriamiento')
def enfriamiento():
    return render_template('EnfriamientoDeN.html')

@app.route('/transformadas')
def transformadas():
    return render_template('Transformadas.html')

@app.route('/calcular', methods=['POST'])
def calcular():
    try:
        data = request.json
        funcion = data['funcion']
        t = sp.symbols('t')
        f_t = sp.sympify(funcion)
        s = sp.symbols('s')
        F_s = sp.laplace_transform(f_t, t, s, noconds=True)
        latex_result = sp.latex(F_s)
        return jsonify({'result': latex_result})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
