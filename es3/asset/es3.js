// Snack3
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// let n = [];

// let sum = 0;

// let i = 1

// while (i < 5) {
    
//     sum += n[i];
//     document.getElementById("stamp").innerHTML = `${sum}`
//     i = i + 2
// }



let arrayNum = [];
let somma = 0;
let i = 0

while (i < 5) {

    arrayNum[i] = parseInt(prompt("inserisci un numero"));

    console.log(arrayNum);
    
    somma += arrayNum[i];
    
    i++
   

        


}

console.log(somma);

document.getElementById("stamp").innerHTML = `${somma}`;