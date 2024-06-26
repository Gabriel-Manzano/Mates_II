function calculateTemperature(T_a, C, k, t) {
    const C_1 = C - T_a;
    return T_a + C_1 * Math.exp(-k * t);
}

function showOptionFields() {
    const option = document.getElementById("option").value;
    document.getElementById("specific-minute").style.display = "none";
    document.getElementById("interval").style.display = "none";
    document.getElementById("comma-separated").style.display = "none";
    
    if (option === "1") {
        document.getElementById("specific-minute").style.display = "block";
    } else if (option === "2") {
        document.getElementById("interval").style.display = "block";
    } else if (option === "3") {
        document.getElementById("comma-separated").style.display = "block";
    }
}

function calculate() {
    const T_a = parseFloat(document.getElementById("T_a").value);
    const C = parseFloat(document.getElementById("C").value);
    const k = parseFloat(document.getElementById("k").value);
    const option = document.getElementById("option").value;
    
    let results = [];
    
    if (option === "1") {
        const t = parseFloat(document.getElementById("minute").value);
        results = [{ time: t, temperature: calculateTemperature(T_a, C, k, t) }];
    } else if (option === "2") {
        const start = parseFloat(document.getElementById("start").value);
        const end = parseFloat(document.getElementById("end").value);
        const step = parseFloat(document.getElementById("step").value);
        for (let t = start; t <= end; t += step) {
            results.push({ time: t, temperature: calculateTemperature(T_a, C, k, t) });
        }
    } else if (option === "3") {
        const times = document.getElementById("times").value.split(',').map(time => parseFloat(time.trim()));
        for (const t of times) {
            results.push({ time: t, temperature: calculateTemperature(T_a, C, k, t) });
        }
    } else {
        alert("Opción no válida. Por favor, seleccione 1, 2 o 3.");
        return;
    }
    
    showResults(results);
}

function showResults(results) {
    const resultsDiv = document.getElementById("results");
    const resultsTableBody = document.getElementById("results-table").getElementsByTagName("tbody")[0];
    
    resultsTableBody.innerHTML = "";
    
    results.forEach(result => {
        const row = resultsTableBody.insertRow();
        const cellTime = row.insertCell(0);
        const cellTemperature = row.insertCell(1);
        cellTime.textContent = result.time;
        cellTemperature.textContent = result.temperature.toFixed(4);
    });
    
    resultsDiv.style.display = "block";
}

function plotResults() {
    const resultsTableBody = document.getElementById("results-table").getElementsByTagName("tbody")[0];
    const rows = resultsTableBody.getElementsByTagName("tr");
    
    const times = [];
    const temperatures = [];
    
    for (const row of rows) {
        const cells = row.getElementsByTagName("td");
        times.push(parseFloat(cells[0].textContent));
        temperatures.push(parseFloat(cells[1].textContent));
    }
    
    const ctx = document.getElementById("temperatureChart").getContext("2d");
    document.getElementById("temperatureChart").style.display = "block";
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: 'Temperatura (T(t))',
                data: temperatures,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tiempo (minutos)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Temperatura (T(t))'
                    }
                }
            }
        }
    });
}
