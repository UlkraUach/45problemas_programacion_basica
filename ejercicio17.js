var contador = 0;
var suma = 0;

const numero_inicial = 10;
const numero_final = 21;

var inicio = (numero_inicial % 2 == 0) ? numero_inicial + 2 : numero_inicial + 1;

for (let i = inicio; i < numero_final; ++contador, suma += i, i += 2){
    console.log(i);
}