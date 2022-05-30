const { Router } = require("express");
const { envioExamen, datosGlobales, preguntas, login } = require('./controllers')

const router = Router();

router.post("/envio-examen", envioExamen);
router.get("/api-datos-globales", datosGlobales);
router.get("/api-preguntas", preguntas);
router.post("/login", login);

module.exports = router;