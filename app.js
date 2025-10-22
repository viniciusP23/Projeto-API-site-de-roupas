import express from "express"
import cors from "cors"
import usuariosRoutes from "./routes/usuarios.js"
import produtosRouter from "./routes/produtos.js"


const app = express()
app.use(express.json())
app.use(cors())

app.use("/usuarios", usuariosRoutes)
app.use("/produtos", produtosRouter)



export default app