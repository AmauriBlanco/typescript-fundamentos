/* let nome: string;
let idade: number;
let maiorIdade: boolean;

nome = 'treinaweb'
idade = 144

let a = 5;
let b = 8

function somar(a: number, b: number) {
    return a + b;
}

somar(a,b);
console.log(somar(a,b));

if (idade <= 18) {
    console.log(`O(a) ${nome} é menor de idade`)
}else {
    console.log(`O(a) ${nome} é maior de idade`);
}
 */
/* 
let a: number[] = [1,2,3];




console.log(a); */

/* type tipoArray = (number | 'TreinaWeb')[];

type Animal = {
    nome: string;
    idade: number;
}

let cachorro : Animal;

cachorro = {
    nome: 'casolo',
    idade: 5
}
console.log(cachorro) */

enum ProdutoStatus {
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3,
}

function checarProdutoStatus(status: number) {
    switch (status) {
      case ProdutoStatus.Ativo:
        console.log("produto disponível");
        break;
      case ProdutoStatus.Inativo:
        console.log("Produto não encontrado");
        break;
      case ProdutoStatus.Indisponivel:
        console.log("Produto aguardando estoque");
        break;
    }
}

checarProdutoStatus(ProdutoStatus.Ativo);