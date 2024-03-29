import express from "express";
import fs from "fs/promises";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Rota para obter a lista de produtos
app.get("/produtos", async (req, res) => {
  try {
    // Leia os dados do arquivo produtos.json
    const produtosData = await fs.readFile("./products.json", "utf-8");
    const produtos = JSON.parse(produtosData);

    // Envie a lista de produtos como resposta
    res.json(produtos);
  } catch (error) {
    console.error("Erro ao ler o arquivo de produtos:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
