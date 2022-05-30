const res = require('express/lib/response');
const { pool } = require('./db');

function envioExamen(request, response) {
    var r = request.body
    var puntuacion = 0;
    var pRes = [];

    if (r["1p"] == "c") {
        puntuacion++;
        pRes[1] = 1;
    } else if (r["1p"] == "a" || r["1p"] == "b") {
        pRes[1] = 0;
    } else {
        pRes[1] = -1;
    }

    if (r["2p"] == "c") {
        puntuacion++;
        pRes[2] = 1;
    } else if (r["2p"] == "a" || r["2p"] == "b") {
        pRes[2] = 0;
    } else {
        pRes[2] = -1;
    }

    if (r["3p"] == "a") {
        puntuacion++;
        pRes[3] = 1;
    } else if (r["3p"] == "c" || r["3p"] == "b") {
        pRes[3] = 0;
    } else {
        pRes[3] = -1;
    }

    if (r["4p"] == "c") {
        puntuacion++;
        pRes[4] = 1;
    } else if (r["4p"] == "a" || r["4p"] == "b") {
        pRes[4] = 0;
    } else {
        pRes[4] = -1;
    }

    if (r["5p"] == "c") {
        puntuacion++;
        pRes[5] = 1;
    } else if (r["5p"] == "a" || r["5p"] == "b") {
        pRes[5] = 0;
    } else {
        pRes[5] = -1;
    }


    if (r["6p"] == "b") {
        puntuacion++;
        pRes[6] = 1;
    } else if (r["6p"] == "c" || r["6p"] == "a") {
        pRes[6] = 0;
    } else {
        pRes[6] = -1;
    }

    if (r["7p"] == "b") {
        puntuacion++;
        pRes[7] = 1;
    } else if (r["7p"] == "c" || r["7p"] == "a") {
        pRes[7] = 0;
    } else {
        pRes[7] = -1;
    }

    if (r["8p"] == "c") {
        puntuacion++;
        pRes[8] = 1;
    } else if (r["8p"] == "a" || r["8p"] == "b") {
        pRes[8] = 0;
    } else {
        pRes[8] = -1;
    }

    if (r["9p"] == "c") {
        puntuacion++;
        pRes[9] = 1;
    } else if (r["9p"] == "a" || r["9p"] == "b") {
        pRes[9] = 0;
    } else {
        pRes[9] = -1;
    }

    if (r["10p"] == "b") {
        puntuacion++;
        pRes[10] = 1;
    } else if (r["10p"] == "c" || r["10p"] == "a") {
        pRes[10] = 0;
    } else {
        pRes[10] = -1;
    }

    var textoQuery = `INSERT INTO resultadotest(nombre, apellidos, municipio, p1, p2, p3 ,p4, p5, p6, p7, p8, p9, p10, notafinal, p1res, p2res, p3res, p4res, p5res, p6res, p7res, p8res, p9res, p10res ) VALUES('${r.nombre}', '${r.apellidos}', '${r.municipio}', '${r["1p"]}', '${r["2p"]}', '${r["3p"]}', '${r["4p"]}', '${r["5p"]}', '${r["6p"]}', '${r["7p"]}', '${r["8p"]}', '${r["9p"]}', '${r["10p"]}', ${puntuacion} , ${pRes[1]} , ${pRes[2]} , ${pRes[3]}, ${pRes[4]}, ${pRes[5]}, ${pRes[6]}, ${pRes[7]}, ${pRes[8]}, ${pRes[9]}, ${pRes[10]})`;
    pool.query(textoQuery, (err, res) => {
        if (err) {
            console.log('ERROR: ' + err);
        } else {
            console.log("RESULTADO GUARDADO EN LA BBDD");
        }
    });
    return response.redirect('http://127.0.0.1:5500/public/pages/respuesta.html')
}


function datosGlobales(request, response) {
    var consultasGlobales = {};
    var textoConsultasGlobales = `SELECT COUNT(*) FROM resultadotest; 
                                    SELECT AVG("notafinal") FROM resultadotest;`;
    pool.query(textoConsultasGlobales, (err, res) => {
        if (err) {
            console.log('ERROR: ' + err);
        } else {
            consultasGlobales["numParticipantes"] = parseInt(res[0].rows[0].count);
            consultasGlobales["notaMedia"] = parseFloat(res[1].rows[0].avg);
            console.log("MOSTRANDO DATOS GLOBALES");
            return response.status(200).send(consultasGlobales);
        }
    });
}

function preguntas(request, response) {
    var consultasPreguntas = {};
    var textoConsultasPreguntas = `SELECT COUNT(*) FROM resultadotest WHERE p1res=1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p1res=0;
                                    SELECT COUNT(*) FROM resultadotest WHERE p1res=-1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p2res=1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p2res=0;
                                    SELECT COUNT(*) FROM resultadotest WHERE p2res=-1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p3res=1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p3res=0;
                                    SELECT COUNT(*) FROM resultadotest WHERE p3res=-1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p4res=1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p4res=0;
                                    SELECT COUNT(*) FROM resultadotest WHERE p4res=-1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p5res=1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p5res=0;
                                    SELECT COUNT(*) FROM resultadotest WHERE p5res=-1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p6res=1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p6res=0;
                                    SELECT COUNT(*) FROM resultadotest WHERE p6res=-1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p7res=1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p7res=0;
                                    SELECT COUNT(*) FROM resultadotest WHERE p7res=-1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p8res=1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p8res=0;
                                    SELECT COUNT(*) FROM resultadotest WHERE p8res=-1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p9res=1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p9res=0;
                                    SELECT COUNT(*) FROM resultadotest WHERE p9res=-1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p10res=1;
                                    SELECT COUNT(*) FROM resultadotest WHERE p10res=0;
                                    SELECT COUNT(*) FROM resultadotest WHERE p10res=-1;`;
    pool.query(textoConsultasPreguntas, (err, res) => {
        if (err) {
            console.log('ERROR: ' + err);
        } else {
            consultasPreguntas["textoBien1"] = parseInt(res[0].rows[0].count);
            consultasPreguntas["textoMal1"] = parseInt(res[1].rows[0].count);
            consultasPreguntas["textoBlanco1"] = parseInt(res[2].rows[0].count);
            consultasPreguntas["textoBien2"] = parseInt(res[3].rows[0].count);
            consultasPreguntas["textoMal2"] = parseInt(res[4].rows[0].count);
            consultasPreguntas["textoBlanco2"] = parseInt(res[5].rows[0].count);
            consultasPreguntas["textoBien3"] = parseInt(res[6].rows[0].count);
            consultasPreguntas["textoMal3"] = parseInt(res[7].rows[0].count);
            consultasPreguntas["textoBlanco3"] = parseInt(res[8].rows[0].count);
            consultasPreguntas["textoBien4"] = parseInt(res[9].rows[0].count);
            consultasPreguntas["textoMal4"] = parseInt(res[10].rows[0].count);
            consultasPreguntas["textoBlanco4"] = parseInt(res[11].rows[0].count);
            consultasPreguntas["textoBien5"] = parseInt(res[12].rows[0].count);
            consultasPreguntas["textoMal5"] = parseInt(res[13].rows[0].count);
            consultasPreguntas["textoBlanco5"] = parseInt(res[14].rows[0].count);
            consultasPreguntas["textoBien6"] = parseInt(res[15].rows[0].count);
            consultasPreguntas["textoMal6"] = parseInt(res[16].rows[0].count);
            consultasPreguntas["textoBlanco6"] = parseInt(res[17].rows[0].count);
            consultasPreguntas["textoBien7"] = parseInt(res[18].rows[0].count);
            consultasPreguntas["textoMal7"] = parseInt(res[19].rows[0].count);
            consultasPreguntas["textoBlanco7"] = parseInt(res[20].rows[0].count);
            consultasPreguntas["textoBien8"] = parseInt(res[21].rows[0].count);
            consultasPreguntas["textoMal8"] = parseInt(res[22].rows[0].count);
            consultasPreguntas["textoBlanco8"] = parseInt(res[23].rows[0].count);
            consultasPreguntas["textoBien9"] = parseInt(res[24].rows[0].count);
            consultasPreguntas["textoMal9"] = parseInt(res[25].rows[0].count);
            consultasPreguntas["textoBlanco9"] = parseInt(res[26].rows[0].count);
            consultasPreguntas["textoBien10"] = parseInt(res[27].rows[0].count);
            consultasPreguntas["textoMal10"] = parseInt(res[28].rows[0].count);
            consultasPreguntas["textoBlanco10"] = parseInt(res[29].rows[0].count);
            console.log("MOSTRANDO DATOS DE PREGUNTAS");
            return response.status(200).send(consultasPreguntas);
        }
    });
}

function login(request, response) {
    var textoConsultaLogin = `SELECT password FROM usuarios WHERE usuario='${request.body.usuario}'`;
    var respuesta = {};
    pool.query(textoConsultaLogin, (err, res) => {
        if (err) {
            console.log('ERROR: ' + err);
            respuesta["STATUS"] = "ERR";
            return response.send(respuesta);
        } else {
            if(res.rows.length == 0) {
                respuesta["STATUS"] = "NE";
                return response.send(respuesta);
            } else {
                if (res.rows[0].password === request.body.password) {
                    if(request.body.usuario === "ADMIN") {
                        respuesta["STATUS"] = "ADMIN";
                        respuesta["LINK"] = "./consultas.html";
                        return response.send(respuesta);
                    } else {
                        respuesta["STATUS"] = "OK";
                        respuesta["LINK"] = "../index.html";
                        return response.send(respuesta);
                    }
                } else {
                    respuesta["STATUS"] = "NO";
                    return response.send(respuesta);
                }
            }
            
        }
    })
}

module.exports = { envioExamen, datosGlobales, preguntas, login };