var pares = 0;
var impares = 0;

for (let i = 0; i <= 100; ++i){
    console.log(i);
    if (i % 2 == 0)
        pares += i;
    else
        impares += i;
}

console.log("total pares: " + pares);
console.log("total impares: " + impares);