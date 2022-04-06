/**
 * Julius Caesar protected his confidential information by encrypting it using a cipher. 
 * Caesar's cipher shifts each letter by a number of letters. 
 * If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
 * In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
 * 
 * Write a function that takes in a string and an integer that performs a Caesar Cipher encryption
 * ----------------------------------------------------------------------------------------------------------------
 */

//1. create the alphabet:
// let alphabet = `abcdefghijklmnopqrstuvwxyz`.split(``);
let alphabet = `abcdefghijklmnopqrstuvwxyz`;

// console.log(alphabet); //TEST: Successful
//2. Create function that takes in string and Integer 
function ceaserCipher(message){
    //3. for (each letter in the string)
    let unEncrypted = [];
    let enCrypted = [];
    let key = [];
    var matchFound

    for (x in message){
        unEncrypted.push(message[x]);
    }
    // console.log(unEncrypted); //TEST 2: Successful

    for(y in alphabet){
        key.push(alphabet[y]);
    }
    // console.log(key); //TEST 3: Successful

    //4. if (the letter in the string equals a letter in the alphabet)
    for(let x=0; x<key.length; x++){
        matchFound = false;
        for(let y=0; unEncrypted.length; y++){
            if(key[x]==unEncrypted[y]){
                matchFound = true;
            }
            
        }
        if (matchFound){
            enCrypted.push(unEncrypted[y]);           
        }
    }
    console.log(enCrypted);


 

    //5. Shift the position of the letter in the alphabet 

    //6. return the letter
}
ceaserCipher("TESTING");
