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
console.log(getWordByLetter(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

//BONUS
/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */
const names2 = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
/**
 * Description
 * @param {array} array
 * @param {string} letter
 * @returns {array}
 */


function getWordByLetter2(array, letter) {

   const result = [];
   for (let i = 0; i < array.length; i++) {
        let curItem = array[i];
        if (letter === curItem[0]) {
            result.push(curItem);
        }
   }
   return result;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getWordByLetter2(names2, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]