import express from "express"
import {criarUsuario, listarUsuario, listarUsuarioID, atualizarUsuario, deletarUsuario} from "../controllers/usuariosControllers.js"

const router = express.Router()

router.post("/", criarUsuario)
router.get("/", listarUsuario)
router.get("/:id", listarUsuarioID)
router.put("/:id", atualizarUsuario)
router.delete("/:id", deletarUsuario)

export default router