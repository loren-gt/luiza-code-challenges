const calculaIMC = (obj) => {
  let calculo = obj.peso / (obj.altura ** 2)
  calculo = Math.round(calculo * 100)/100
  console.log(calculo)
  return calculo
}

const calculaAnoDeNascimento = (obj) => {
  const anoAtual = new Date().getFullYear()
  const anoNascimento = anoAtual - obj.idade
  console.log(anoNascimento)
  return anoNascimento
}

const pessoa = {
  A: {
    nome: "Lady Gaga",
    peso: 52,
    altura: 1.55,
    idade: 35,
    imc: (obj) => calculaIMC(obj=pessoa.A),
    anoNascimento: (obj) => calculaAnoDeNascimento(obj=pessoa.A)
  },
  B: {
    nome: "Dua Lipa",
    peso: 58,
    altura: 1.73,
    idade: 25,
    imc: (obj) => calculaIMC(obj=pessoa.B),
    anoNascimento: (obj) => calculaAnoDeNascimento(obj=pessoa.B)
  }
}

pessoa.A.imc()
pessoa.A.anoNascimento()
pessoa.B.imc()
pessoa.B.anoNascimento()
