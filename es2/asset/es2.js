// Snack2
// Fai inserire un numero, che chiameremo N, all’utente. 
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
// Ogni volta che ne crei uno, stampalo.

let N = parseInt(prompt("inserisci un numero"));


let i = 0;

while (i < N) {
  
  let array1 = [];
   
  for (let l = 0 ; l < 10 ; l++ ){
   
    let random = Math.floor(Math.random() * 100) + 1;
    array1.push(random);
  }

  console.log(array1);
   i++
}
