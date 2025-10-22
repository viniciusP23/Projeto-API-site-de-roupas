import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const criarProduto = async (req, res) => {
    try {
        const {nome, preco, imagem, categoria} = req.body
        const createProduct = await prisma.produtos.create({
            data: {nome, preco: parseFloat(preco),  imagem, categoria}
        })
        res.status(201).json(createProduct)

    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao criar Produto"})
    }
}


export const listarProdutos = async (req, res) => {
    try {
        const listProduct = await prisma.produtos.findMany()
        res.json(listProduct)

    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao listar Produtos"})
    }
}

export const listarProdutoID = async (req, res) => {
    try {
        const id = req.params.id
        const listProductId = await prisma.produtos.findUnique({where: {id}})
        res.status(201).json(listProductId)

    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao lista Produto pelo ID."})
    }
}

export const atualizarProduto = async (req, res) => {
    try {
        const id = req.params.id
        const {nome, preco, imagem, categoria} = req.body
        const uptadeProduct = await prisma.produtos.update({
            where: {id},
            data: {nome, preco: parseFloat(preco), imagem, categoria}
        })
        res.status(201).json(uptadeProduct)

    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao atualizar Produto."})
    }
}

export const deletarProduto = async (req, res) => {
    try {
        const id = req.params.id
        const deleteProduct = await prisma.produtos.delete({where: {id}})
        res.status(201).json(deleteProduct)

    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao deletar Produto."})
    }

}