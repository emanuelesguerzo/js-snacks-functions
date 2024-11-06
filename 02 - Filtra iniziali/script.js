/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
/**
 * Description
 * @param {array} array
 * @param {string} letter
 * @returns {array}
 */

const getWordByLetter = (array, letter) => array.filter(word => word[0] === letter);

// Invoca la funzione qui e stampa il risultato in console
console.log(typeof(getWordByLetter(names, "A")));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]