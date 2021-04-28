const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var contador = 0;
var array = new Array(2);

var recursiveAsyncReadLine = function () {
    readline.question("Insertar número: "
        , function (line) {
            array[contador] = parseInt(line);
            ++contador;
            if (contador == 2){
                final_actions();
                return readline.close();
            } 

    recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine(); 

function final_actions(){
    array.sort();
    let pares = 0;
    let impares = 0;

    for (let i = array[0] + 1; i < array[1]; ++i){
        console.log(i);
        if (i % 2 == 0)
            ++pares;
        else
            impares += i;
    }

    console.log("Número de pares: " + pares);
    console.log("Suma impares: " + impares);
}