class PessoaJuridica extends Pessoa {
    private readonly cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string) {
        super(nome + " - Jurídica", idade, dataNascimento);
        this.cnpj = cnpj;
    }

    getCnpj(): string {
        return this.cnpj;
    }
}