var nome = prompt("Seu Nome:"); 
    
var numero1 = parseFloat(prompt("Digite primeiro numero:"));
var numero2 = parseFloat(prompt("Digite segundo numero:"));

    // Calcula a média aritmética
    var soma = (numero1 + numero2);
    var sub = (numero1 - numero2);
    var mult = (numero1 * numero2);
    var div = (numero1 / numero2);
    var resto = (numero1 % numero2);

    // Exibe o resultado
    alert(`\nsoma:${soma} \nsubtração:${sub} \nmultiplicação:${mult} \ndivisão:${div} \nresto:${resto}`);