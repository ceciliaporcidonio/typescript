// Função de multiplicação
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Função de saudação
function saudacao(nome: string): string {
    return "Olá " + nome;
}

// Testando as funções
const resultadoMultiplicacao = multiplicar(3, 4);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

const mensagemSaudacao = saudacao("Carlos");
console.log(mensagemSaudacao);
