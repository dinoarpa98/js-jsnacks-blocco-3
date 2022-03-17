let n = [];

let somma = 0;

do {
    
    let insert = parseInt(prompt("inserisci un numero"));
    n.push(insert);
    somma += insert;

} while ( somma < 50 ) {
   
    
}

document.getElementById("stamp").innerHTML = (somma);