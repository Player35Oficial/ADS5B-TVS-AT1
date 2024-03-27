const dadosEstudante = require("./dadosEstudante");

describe("Teste da função recebeDados", () => {
  test('Verifica se a função processa corretamente o nome "Yuri Guilherme Santana de Sá" e o RA "181439"', () => {
    const nome = "Yuri Guilherme Santana de Sá";
    const RA = "181439";
    const esperado = `Dados recebidos - Nome: ${nome}, RA: ${RA}`;

    expect(dadosEstudante(nome, RA)).toBe(esperado);
  });
});
