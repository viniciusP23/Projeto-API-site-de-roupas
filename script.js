const BASE_URL = "http://localhost:3000/usuarios"

// Cadastro

const cadastroForm = document.getElementById("cadastroForm")
if(cadastroForm) {
    cadastroForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const senha = document.getElementById("senha").value

        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, email, senha})
        })
        const data = await res.json()
        document.getElementById("msg").innerText = "Usuário criado com sucesso"

        setTimeout(() => {
            window.location.href = "login.html"
        }, 1000)
    })
}

// Login

const loginForm = document.getElementById("loginForm")
if(loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const email = document.getElementById("emailLogin").value
        const senha = document.getElementById("senhaLogin").value

        const res = await fetch(BASE_URL)
        const usuarios = await res.json()
        const user = usuarios.find(u => u.email === email && u.senha === senha)

        const msgLogin = document.getElementById("msgLogin")
        if(user) {
            msgLogin.innerText = `Bem-vindo, ${user.name}`
        }else {
            msgLogin.innerText = `email ou Senha incorretos`
        }
    })
}

// Mostrar produtos na página

const PRODUTOS_URL = "http://localhost:3000/produtos"
const container = document.getElementById("produtosContainer")
if(container) {
    async function carregarProduto() {
        const res = await fetch(PRODUTOS_URL)
        const produtos = await res.json()

        container.innerHTML = ""
        
        produtos.forEach(product => {
            const card = document.createElement("div")
            card.classList.add("card")

            const img = document.createElement("img")
            img.src = product.imagem || "https://via.placeholder.com/200"

            const descricoes = document.createElement("div")
            descricoes.classList.add("descricoes")

            const nome = document.createElement("h3")
            nome.textContent = product.nome

            const categoria = document.createElement("p")
            categoria.textContent = product.categoria

            const preco = document.createElement("p")
            preco.innerHTML = `<strong>${product.preco}</strong>`

            const avaliacao = document.createElement("p")
            avaliacao.textContent = product.avaliacao

            if(product.nome === "Tênis vermelho") {
                nome.style.color = "#c74444ff"
                
            }

            descricoes.append(nome, categoria, preco, avaliacao)
            card.append(img, descricoes)
            container.append(card)
        });
        
    }

    carregarProduto()
}

//  produtos.forEach(product => {
//             container.innerHTML += `
//                 <div class="card">
//                     <img src=${product.imagem || `'https://via.placeholder.com/200'`}/>
                    
//                     <div class="descricoes">
//                         <h3>${product.nome}</h3>
//                         <p>${product.categoria}</p>
//                         <p><strong>${product.preco}</strong></p>
//                         <p>${product.avaliacao}</p>
//                     </div>
//                 </div>
//             `
//         });