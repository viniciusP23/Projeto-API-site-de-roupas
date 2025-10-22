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