let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

// PESSOA, PESSOA FISICA e PESSOA JURIDICA

// Criar objetos Pessoa, PessoaFisica e PessoaJuridica
const pessoa1 = new Pessoa("João", 30, new Date("1992-01-15"));
const pessoaFisica1 = new PessoaFisica("Maria", 25, new Date("1997-05-20"), "123.456.789-00");
const pessoaJuridica1 = new PessoaJuridica("Empresa XYZ", 10, new Date("2012-08-10"), "12.345.678/0001-00");

// Imprimir atributos
console.log("Pessoa:");
console.log("Nome:", pessoa1.getNome());
console.log("Idade:", pessoa1.getIdade());
console.log("Data de Nascimento:", pessoa1.getDataNascimento());

console.log("\nPessoa Física:");
console.log("Nome:", pessoaFisica1.getNome());
console.log("Idade:", pessoaFisica1.getIdade());
console.log("Data de Nascimento:", pessoaFisica1.getDataNascimento());
console.log("CPF:", pessoaFisica1.getCpf());

console.log("\nPessoa Jurídica:");
console.log("Nome:", pessoaJuridica1.getNome());
console.log("Idade:", pessoaJuridica1.getIdade());
console.log("Data de Nascimento:", pessoaJuridica1.getDataNascimento());
console.log("CNPJ:", pessoaJuridica1.getCnpj());