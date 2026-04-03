// Interface Livro
interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

// Objeto do tipo Livro
let livro: Livro = {
  titulo: 'O Código Perdido',
  autor: 'João Silva',
  anoPublicacao: 2020
};

// Função que exibe as informações do livro
function exibirLivro(livro: Livro): void {
  console.log(`Título: ${livro.titulo}`);
  console.log(`Autor: ${livro.autor}`);
  console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

// Chamando a função
exibirLivro(livro);