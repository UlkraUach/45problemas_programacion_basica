const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question("Inserte número: ", inp => {
    action(inp);
    readline.close()
})

function action(numero){
    if (numero >= 0)
        console.log("El número es positivo");
    else
        console.log("El número es negativo");
}