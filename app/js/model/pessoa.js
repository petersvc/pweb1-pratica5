class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getDataNascimento() {
        return this.dataNascimento;
    }
    setDataNascimento(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
