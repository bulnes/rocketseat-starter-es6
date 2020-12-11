const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(u => u.idade);

console.log(idades);

const funcionarios = usuarios.filter(u => u.empresa === 'Rocketseat' && u.idade > 18);

console.log(funcionarios);

const google = usuarios.find(u => u.empresa === 'Google');

console.log(google);

const colaboradores = usuarios.map(u => ({ ...u, idade: u.idade * 2 })).filter(u => u.idade < 50);

console.log(colaboradores);
