function jogar(usuarioEscolha) {
    const escolhasValidas = ["pedra", "papel", "tesoura"];
    const escolhaComputador = escolhasValidas[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (!escolhasValidas.includes(usuarioEscolha)) {
        resultado = "\nEscolha inválida. Por favor, escolha pedra, papel ou tesoura.";
    } else if (usuarioEscolha === escolhaComputador) {
        resultado = "\nEmpate Ambos escolheram " + usuarioEscolha;
    } else if (
        (usuarioEscolha === "pedra" && escolhaComputador === "tesoura") ||
        (usuarioEscolha === "tesoura" && escolhaComputador === "papel") ||
        (usuarioEscolha === "papel" && escolhaComputador === "pedra")
    ) {
        resultado = "\nYOU WIN " + usuarioEscolha + " vence " + escolhaComputador;
    } else {
        resultado = "\nCPU WINS " + escolhaComputador + " vence " + usuarioEscolha;
    }

    document.getElementById("resultado").innerText = resultado;
}