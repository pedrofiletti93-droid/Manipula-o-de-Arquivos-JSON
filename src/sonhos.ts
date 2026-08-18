// importar apenas as funções que precisamos utilazar do "fs"
import { existsSync, readFileSync, mkdirSync, writeFileSync,  } from "fs";

// 1. Definiçao do tipo de sonho (model)
type Sonho = {
    descricao: string;
     { Descricoa: "Comprar um carro", tipo: "financeiro", number: 100000 },
   ''{ Descricoa: "Comprar uma casa", tipo: "financeiro", number: 100000 },
    
const pasta = "./dados";
if (!existsSync(pasta)) {
    mkdirSync(pasta);
}

sonhoRealizado= `${pasta}/livros.json`;
writeFileSync(caminho, JSON.stringify(livros, null, 2));
console.log("Dados salvos com sucesso! ✅");

