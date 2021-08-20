class pessoa {
  constructor({ ...objKeys }) {
    const { nome, idade, altura, peso } = objKeys;
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }

  get resultado() {
    return this.resposta()
  }

  imc() {
    let calculo = this.peso / (this.altura ** 2)
    calculo = Math.round(calculo * 100)/100
    return calculo
  }

  anoNascimento() {
    const anoAtual = new Date().getFullYear()
    const anoNascimento = anoAtual - this.idade
    return anoNascimento
  }

  resposta() {
    return {
      nome: this.nome,
      peso: this.peso,
      altura: this.altura,
      idade: this.idade,
      imc: this.imc(),
      anoNascimento: this.anoNascimento(), 
    }
  }
}

const ladyGaga = new pessoa({
  nome: "Lady Gaga",
  idade: 35,
  altura: 1.55,
  peso: 52,
})

const duaLipa = new pessoa({
  nome: "Dua Lipa",
  idade: 25,
  altura: 1.73,
  peso: 58,
})

console.log(ladyGaga.resultado, duaLipa.resultado)
