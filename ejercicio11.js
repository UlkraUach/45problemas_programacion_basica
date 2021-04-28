const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question("Inserte número: ", inp => {
    action(inp);
    readline.close()
})

function action(numero){
    let contador = 0;
    for (let i = 3; i <= numero; i += 3, ++contador)
        console.log(i);
    console.log("Conteos: " + contador);
}