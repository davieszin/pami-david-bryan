// Função que retorna uma string
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}

console.log(saudacao('Leandro'));

// Interface para objeto Usuario
interface Usuario {
  nome: string;
  idade: number;
  email?: string; // opcional
}

// Função que exibe dados do usuário
function exibirUsuario(usuario: Usuario): void {
  console.log(`Nome: ${usuario.nome}`);
  console.log(`Idade: ${usuario.idade}`);
}

exibirUsuario({ nome: 'Marcos', idade: 22 });

// Função que percorre um array (parâmetro tipado)
function listarNomes(nomes: string[]): void {
  nomes.forEach((nome) => console.log(nome));
}

listarNomes(['Ana', 'Bruno', 'Carlos']);