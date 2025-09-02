const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// "Banco de dados" fake
const usuarios = [
  { usuario: "admin", senha: "1234" },
  { usuario: "arthur", senha: "ableble23" }
];

// Rota de login
app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;

  // Se não mandou usuário ou senha → requisição inválida
  if (!usuario || !senha) {
    return res.status(400).json({ 
      success: false, 
      message: "Requisição inválida: usuário e senha são obrigatórios." 
    });
  }

  // Se não encontrou usuário válido → erro 400 (credenciais incorretas)
  const user = usuarios.find(
    (u) => u.usuario === usuario && u.senha === senha
  );

  if (!user) {
    return res.status(400).json({ 
      success: false, 
      message: "Usuário ou senha inválidos." 
    });
  }

  // Se deu certo → 200 OK
  return res.json({ success: true, message: "Login bem-sucedido!" });
});

// Subindo o servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
