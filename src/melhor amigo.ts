// importar apenas as funções que precisamos utilazar do "fs"
import { existsSync, readFileSync, mkdirSync, writeFileSync, } from "fs";

// 1. Definiçao do tipo do Dado (model)
type Livro = {
    Titulo: string;
    autor: string;
    ano: number;
    lido: boolean;

};

