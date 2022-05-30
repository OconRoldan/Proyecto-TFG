async function getDatosGlobales() {
    await fetch('http://localhost:4000/api-datos-globales', {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then(response => response.text())
        .then(json => {
            var resultado = JSON.parse(json);
            //Generales:
            document.getElementById("inputNumParticipantes").textContent += resultado["numParticipantes"];
            document.getElementById("inputNotaMedia").textContent += Math.round(resultado["notaMedia"] * 100) / 100;
        })
}

async function getPreguntas() {
    await fetch('http://localhost:4000/api-preguntas', {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then(response => response.text())
        .then(json => {
            var resultado = JSON.parse(json);
            //Primera:
            document.getElementById("textoBien1").textContent += resultado["textoBien1"];
            document.getElementById("textoMal1").textContent += resultado["textoMal1"];
            document.getElementById("textoBlanco1").textContent += resultado["textoBlanco1"];
            //Segunda:
            document.getElementById("textoBien2").textContent += resultado["textoBien2"];
            document.getElementById("textoMal2").textContent += resultado["textoMal2"];
            document.getElementById("textoBlanco2").textContent += resultado["textoBlanco2"];
            //Tercera:
            document.getElementById("textoBien3").textContent += resultado["textoBien3"];
            document.getElementById("textoMal3").textContent += resultado["textoMal3"];
            document.getElementById("textoBlanco3").textContent += resultado["textoBlanco3"];
            //Cuarta:
            document.getElementById("textoBien4").textContent += resultado["textoBien4"];
            document.getElementById("textoMal4").textContent += resultado["textoMal4"];
            document.getElementById("textoBlanco4").textContent += resultado["textoBlanco4"];
            //Quinta:
            document.getElementById("textoBien5").textContent += resultado["textoBien5"];
            document.getElementById("textoMal5").textContent += resultado["textoMal5"];
            document.getElementById("textoBlanco5").textContent += resultado["textoBlanco5"];
            //Sexta:
            document.getElementById("textoBien6").textContent += resultado["textoBien6"];
            document.getElementById("textoMal6").textContent += resultado["textoMal6"];
            document.getElementById("textoBlanco6").textContent += resultado["textoBlanco6"];
            //Septima:
            document.getElementById("textoBien7").textContent += resultado["textoBien7"];
            document.getElementById("textoMal7").textContent += resultado["textoMal7"];
            document.getElementById("textoBlanco7").textContent += resultado["textoBlanco7"];
            //Octava:
            document.getElementById("textoBien8").textContent += resultado["textoBien8"];
            document.getElementById("textoMal8").textContent += resultado["textoMal8"];
            document.getElementById("textoBlanco8").textContent += resultado["textoBlanco8"];
            //novena:
            document.getElementById("textoBien9").textContent += resultado["textoBien9"];
            document.getElementById("textoMal9").textContent += resultado["textoMal9"];
            document.getElementById("textoBlanco9").textContent += resultado["textoBlanco9"];
            //Decima:
            document.getElementById("textoBien10").textContent += resultado["textoBien10"];
            document.getElementById("textoMal10").textContent += resultado["textoMal10"];
            document.getElementById("textoBlanco10").textContent += resultado["textoBlanco10"];






        })
}

getDatosGlobales();
getPreguntas();