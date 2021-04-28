const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var contador = 0;

var recursiveAsyncReadLine = function () {
    readline.question("Inserta una frase (/end para salir): "
        , function (line) {
            switch (line){
                case "/end":
                    console.log("Total: " + contador);
                    return readline.close();
                default:
                    ++contador;
            }
    recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine(); 