import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// criar Usuario
export const criarUsuario = async (req, res) => {
    try {
        const {name, email, senha} = req.body
        const createUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            senha: senha
        }
    })
    res.status(201).json(createUser)

    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao criar Usuário."})
    }
}


// listar Usuarios
export const listarUsuario = async (req, res) => {
    try {
        const listUsers = await prisma.user.findMany()
        res.status(200).send(listUsers)

    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao listar Usuários."})
    }
}


// listar Usuarios por ID
export const listarUsuarioID = async (req, res) => {
    try {
        const id = req.params.id
        const listUsersID = await prisma.user.findUnique({where: {id}})
        res.status(200).send(listUsersID)

    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao listar Usuário pelo ID."})
    }
}


// atualizar Usuario
export const atualizarUsuario = async (req, res) => {
    try {
        const id = req.params.id
        const {name, email, senha} = req.body
        const uptadeUser = await prisma.user.update({
            where: {id},
            data: {
                name,
                email,
                senha
            }
        })
        res.status(200).json(uptadeUser)

    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao atualizar Usuário."})
    }
}


// deletar Usuario
export const deletarUsuario = async (req, res) => {
    try {
        const id = req.params.id
        const deleteUser = await prisma.user.delete({where: {id}})
        res.status(200).json(deleteUser)

    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao deletar Usuário."})
    }
}

