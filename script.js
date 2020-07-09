// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


// creo un array vuoto e genero 5 numeri random da inserire nell'array
// Un alert espone 5 numeri casuali (univoci).
var arrayNum = [];

while (arrayNum.length < 5) {
var numCasuali = getRandom(1, 100);
  if (cercaNumero(arrayNum, numCasuali) == false) {
    arrayNum.push(numCasuali);
  }

}
console.log('array numeri casuali', arrayNum);


var alert = alert(arrayNum);
// Poi parte un timer di 30 secondi.
setTimeout(promptUtente, 30000);

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati




// FUNZIONI
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

// funzione per verificare se un numero è già presente nell'array
function cercaNumero(array, num) {
  var j = 0;
  while (j < array.length) {
    if (num == array[j]) {
      return true;
    }
    j++;
  }
  return false;
}

//funzione setTimeout
//chiedo all'utente un prompt per 5 volte e inserisco i numeri che mi da in un array, dopodichè faccio un controllo per verificare quanti e quali numeri corrispondono con quelli generati casualmente dal softwere, quindi inserisco i numeri uguali in un ulteriore array.
function promptUtente() {
  var arrayUtente = [];
  for (var i = 0; i < 5; i++) {
  var rispUtente = parseInt(prompt('Inserisci i numeri visti'));
  arrayUtente.push(rispUtente);
  }
  console.log('array numeri utente', arrayUtente);
  var arrayTrovati = [];
  for (var k = 0; k < arrayUtente.length; k++) {
    if (cercaNumero(arrayNum, arrayUtente[k]) == true) {
      arrayTrovati.push(arrayUtente[k]);
    }
  }
  console.log('Hai indovinato', arrayTrovati.length, 'numeri', 'i numeri sono', arrayTrovati);
}
