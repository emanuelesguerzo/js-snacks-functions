/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
/**
 * Description
 * @param {array} array
 * @returns {array}
 */

const getInitials = (array) => array.map(firstLetter => firstLetter[0]);

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]