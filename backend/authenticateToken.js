const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];  // Bearer Token

  if (token == null) {
    return res.sendStatus(401); // Non autorisé si le token est absent
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Accès refusé si le token est invalide
    }

    req.user = user; // Stocker les informations de l'utilisateur dans l'objet requête
    next(); // Passer au middleware/route suivant
  });
};

module.exports = authenticateToken;
