const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question("Inserte acaracter: ", inp => {
    action(inp);
    readline.close()
})

//No entiendo el ejercicio

function action(ch){
    switch (ch) {
        case "N": case "S":
            console.log("Te lo permito");
            break;
        default:
            console.log("No te lo permito");
    }
}