class Pessoa {
    private nome: string;
    private idade: number;
    private dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: Date) {
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getIdade(): number {
        return this.idade;
    }

    setIdade(idade: number): void {
        this.idade = idade;
    }

    getDataNascimento(): Date {
        return this.dataNascimento;
    }

    setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }
}