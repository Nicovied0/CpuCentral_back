const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Obtener todos los USUARIOS
router.get("/", async (req, res) => {
  try {
    const todos = await User.find();
    console.log("Se llamó a la ruta /USERS");
    res.json(todos);
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id; 
    const user = await Users.findById(userId); D
    console.log("Se llamó a la ruta /USERS/" + userId);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error al obtener el usuario", error);
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
});




module.exports = router;