/**
 * Julius Caesar protected his confidential information by encrypting it using a cipher. 
 * Caesar's cipher shifts each letter by a number of letters. 
 * If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
 * In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
 * 
 * Write a function that takes in a string and an integer that performs a Caesar Cipher encryption
 * ----------------------------------------------------------------------------------------------------------------
 */
//------------------------------Instructor Solution--------------------------------------------

//------------------------GENNERATE OBJECT WITH LETTERS FOR KEYS AND NUMBERS FOR VALUES---------------
// "use-strict";
// const prompt = require('prompt-sync')({sigint: true});

// let key = {};
// let keySize = Object.keys(key);
// // let lenGth = 26

// let i=0;
// while(keySize < 26){
//     let input = prompt("Enter Letter of The Alphabet Here: ");
//     i++;
//     key[input] = parseInt(i);
//     console.log(key);
// }
//------------------------------------------------------------------------------------------------------

function ceaserCipher(inputString, inputNumber){ 

    let rawAlphabet = `abcdefghijklmnopqrstuvwxyz`;
    let alphabet = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26

    };

    let currentEncryptedCharacter = null;
    let encryptedCharacterIndex = null;
    let currentCharacter = null;
    let encryptedString = '';

    for(let currentInputStringIndex = 0; currentInputStringIndex < inputString.length; currentInputStringIndex++){
        currentCharacter = inputString.charAt(currentInputStringIndex);
        currentCharacter = currentCharacter.toLowerCase();//If there are upper case letters in the string
        encryptedCharacterIndex = (alphabet[currentCharacter] + inputNumber)%25;
        currentEncryptedCharacter = rawAlphabet.charAt(encryptedCharacterIndex);
        encryptedString += currentEncryptedCharacter;
    }
    console.log(encryptedString);
}

ceaserCipher("Gabriel",4);


