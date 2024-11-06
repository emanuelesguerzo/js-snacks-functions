/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */
const name = 'Mario';

// Dichiara la funzione qui.
/**
 * Description
 * @param {string} name
 * @returns {string}
 */

const greeting = name => `ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console
console.log(greeting("Mario"));

//Risultato atteso se si passa 'Mario': // ciao Mario

//BONUS 
/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */
const name2 = 'Mario';

// Dichiara la funzione qui.
/**
 * Description
 * @param {string} name
 * @returns {string}
 */

function greeting2(name) {
    const greet = "ciao " + name;
    return greet;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(greeting2("Mario"));

//Risultato atteso se si passa 'Mario': // ciao Mario