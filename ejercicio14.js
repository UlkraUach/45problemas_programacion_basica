const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var contador = 0;
var array = new Array(5);

var recursiveAsyncReadLine = function () {
    readline.question("Insertar número: "
        , function (line) {
            array[contador] = line;
            ++contador;
            if (contador == 5){
                final_actions();
                return readline.close();
            } 

    recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine(); 

function final_actions(){
    array.sort();
    console.log("Pequeño: " + array[0]);
    console.log("Grande: " + array[4]);
}