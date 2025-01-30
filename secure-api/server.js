const express = require("express");
const https = require("https");
const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const authRoutes = require("./src/Routes/auth");
const privateRoutes = require("./src/Routes/private");

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware de seguridad
app.use(helmet());
app.use(cors());
app.use(express.json()); // Para leer JSON en requests
app.use("/auth", authRoutes);
app.use("/private", privateRoutes);

// Configurar HTTPS con el certificado SSL
const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.crt"),
};

// Conectar a MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Conectado a MongoDB"))
    .catch((err) => console.error("❌ Error de conexión:", err));

// Ruta básica
app.get("/", (req, res) => {
    res.send("API Segura con Express y MongoDB 🚀");
});

// Levantar servidor HTTPS
https.createServer(options, app).listen(443, () => {
    console.log(`🔒 Servidor HTTPS corriendo en https://localhost:443`); //agregue la ruta para mas facilidad
});

