class PessoaFisica extends Pessoa {
    private readonly cpf: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(nome + " - Física", idade, dataNascimento);
        this.cpf = cpf;
    }

    getCpf(): string {
        return this.cpf;
    }
}