// Declaração de variáveis
let nome: string = 'João';
let idade: number = 25;
let estaAtivo: boolean = true;

// Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['Ana', 'Bruno', 'Carlos'];
let misto: (string | number)[] = ['Ana', 25, 'Carlos', 30];

// Tuplas
let pessoa: [string, number] = ['Maria', 30];

// Union Types
let id: number | string = 123;
id = 'ABC123';

// Interfaces — definem a estrutura de objetos
interface Usuario {
  nome: string;
  idade: number;
  email?: string; // opcional
}

// Utilização da interface
let novoUsuario: Usuario = {
  nome: 'Amanda',
  idade: 18
};