// Array com 5 cidades
let cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador'];

// Função que recebe o array e imprime cada cidade
function listarCidades(cidades: string[]): void {
  cidades.forEach((cidade) => {
    console.log(cidade);
  });
}

// Chamando a função
listarCidades(cidades);