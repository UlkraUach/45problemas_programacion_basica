
var contador = 0;

for (let i = 1; i <= 100; ++i){
    if (i % 3 == 0 || i % 2 == 0){
        console.log(i);
        ++contador;
    }
}

console.log("conteo: " + contador);