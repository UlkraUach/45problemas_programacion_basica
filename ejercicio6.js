const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Inserte número: `, inp => {
    action(inp);
    readline.close()
})

function action(numero){
    if (numero < 1)
        return;

    for (let i = 1; i <= numero; ++i)
        console.log(i);
}