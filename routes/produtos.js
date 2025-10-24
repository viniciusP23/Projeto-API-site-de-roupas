import express from "express"
import {criarProduto, listarProdutos, listarProdutoID, atualizarProduto, deletarProduto} from "../controllers/produtosControllers.js"

const router =  express.Router()

router.post("/", criarProduto)
router.get("/", listarProdutos)
router.get("/:id", listarProdutoID)
router.put("/:id", atualizarProduto)
router.delete("/:id", deletarProduto)

export default router