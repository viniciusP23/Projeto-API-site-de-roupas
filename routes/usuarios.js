import express from "express"
import {criarUsuario, listarUsuario, listarUsuarioID, atualizarUsuario, deletarUsuario} from "../controllers/usuariosControllers.js"

const router = express.Router()

router.post("/", criarUsuario)
router.get("/", listarUsuario)
router.get("/:id", listarUsuarioID)
router.put("/", atualizarUsuario)
router.delete("/", deletarUsuario)

export default router