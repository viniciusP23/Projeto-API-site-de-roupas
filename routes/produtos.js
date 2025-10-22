import express from "express"
import {criarProduto, listarProdutos, listarProdutoID, atualizarProduto, deletarProduto} from "../controllers/produtosControllers.js"

const router =  express.Router()

router.post("/", criarProduto)
router.get("/", listarProdutos)
router.get("/:id", listarProdutoID)
router.put("/", atualizarProduto)
router.delete("/", deletarProduto)

export default router