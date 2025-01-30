const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
        return res
        .status(401)
        .set("WWW-Authenticate", "Bearer")
        .json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Acceso denegado" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: "Token inválido" });
    }
};
