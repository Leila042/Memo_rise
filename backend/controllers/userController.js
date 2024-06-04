const userService = require('../services/userService');

exports.register = async (req, res) => {
  try {
    await userService.register(req.body);
    res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de l'inscription de l'utilisateur." });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    res.json({ message: "Connexion réussie.", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la connexion." });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await userService.getProfile(req.params.userId);
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la récupération du profil." });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await userService.getOrders(req.params.userId);
    res.json({ orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la récupération des commandes." });
  }
};