/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
const word = 'javascript';

// Dichiara la funzione qui.
/**
 * Description
 * @param {string} string
 * @returns {string}
 */

const getVowels = string => {
    const vowels = ["a", "e", "i", "o", "u"];
    const foundVowels = string.split('').filter(letter => vowels.includes(letter));
    return `${foundVowels.length} (${foundVowels.join(", ")})`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

//BONUS
/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
const word2 = 'javascript';

// Dichiara la funzione qui.
/**
 * Description
 * @param {string} string
 * @returns {string}
 */

function getVowels2(string) {
    const vowels2 = ["a", "e", "i", "o", "u"];
    const foundVowels = string.split('').filter(function(letter) {
        return vowels2.includes(letter);
    });
    return `${foundVowels.length} (${foundVowels.join(", ")})`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getVowels2(word2));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)