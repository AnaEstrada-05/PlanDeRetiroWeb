const express = require("express");
const bodyParser = require("body-parser");
const { google } = require("googleapis");

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Endpoint para manejar la suscripción
app.post("/subscribe", async (req, res) => {
  const email = req.body.email; // Obtener el correo electrónico desde la solicitud

  // Lógica para actualizar la hoja de Google aquí (usa googleapis)

  // Enviar respuesta al cliente
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
