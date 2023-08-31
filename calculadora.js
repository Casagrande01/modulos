var somar = require("./modulos/somar");
var media = require("./modulos/media");
var multiplicar = require("./modulos/multi");
var subtrair = require("./modulos/sub");
var mensagem = require("./modulos/nathylinda");

console.log("A soma de x mais y é: " + somar(45,30));
console.log("A média de x e y é:" + media(12,18));
console.log("A multiplicação de x e y é:" + multiplicar(47,25));
console.log("A subtração de x e y é:" + subtrair(87,34));
console.log(mensagem("Náthany"));