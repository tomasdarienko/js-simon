
// crea un array di 5 numeri diversi che farai vedere a video per 30sec
function genera_numeri() {

     let array = []
     let i = 0;
     while (array.length < 5) {
          i++
          let x = Math.floor((Math.random() * 10 + 1));
          if (!array.includes(x)) {
               array.push(x)
          }
     }

     return array
}

let array_pc = genera_numeri()
console.log(array_pc)
document.getElementById('array').innerHTML = array_pc


// faccio sparire l array_pc
setTimeout(function () {
     document.getElementById('array').style.display = "none";
}, 3000);




setTimeout(function () {  
     let i = 0;
     while (i < 5) {
          i++
          let numeri = prompt('insersci numero')
          array_utente.push(numeri)
     }
     
     document.getElementById('n_utente').innerHTML = "i numeri da te inseriti sono" + " " + array_utente
     
}, 3050);
let array_utente = []
console.log(array_utente)





for (let i = 0; i < array_pc.length; i++) {
     
     if (array_pc.some( i => array_utente.includes(i) )) {
           console.log("ti sei loggato")
     }
     else {
           console.log("non ti sei loggato")
     }
 
}

// array_pc.some(i=> array_utente.includes(i))
