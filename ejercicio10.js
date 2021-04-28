const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question("Inserte número: ", inp => {
    action(inp);
    readline.close()
})

function action(numero){
    if (numero % 2 == 0)
        console.log("Número par");
    else
        console.log("Número inpar");
}