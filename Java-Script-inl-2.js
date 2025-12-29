// The purpose of this project is, within the framework of the Front-End Development course, to develop a new, updated version of the Tricell Encryption Algorithm (version 2.0) from the previous course, Intro to IT, using JavaScript.
// The assignment involved constructing a more complex encryption algorithm consisting of at least three interconnected functions in series.
// Each function was to handle specific input and return a value to the next step in the chain.
// The following report documents the technical solution, source code, as well as an analysis of the results and the division of work within the group.

// Funktion 1
function normalizeReverseKeyGen(input) {
    let text = input.toLowerCase();

    text = text.replace(/å/g, "a")
               .replace(/ä/g, "a")
               .replace(/ö/g, "o");

    text = text.replace(/[^a-z]/g, "");

    let reversed = text.split("").reverse().join("");

    let lastChar = reversed.charCodeAt(reversed.length - 1);
    let key = (lastChar - 96) % 26;
    if (key < 3) key += 3;

    return {
        text: reversed,
        key: key
    };
}



// Funktion 2
// Funktion 2
function blockShuffleAndCaesar(data) {
    let text = data.text;
    let key = data.key;
    let result = "";

    let blocks = [];
    for (let i = 0; i < text.length; i += 3) {
        blocks.push(text.substr(i, 3));
    }

    let shuffledText = "";

    for (let b = 0; b < blocks.length; b++) {
        let block = blocks[b];
        let rotation = (key + b) % block.length;
        let rotated = block.slice(rotation) + block.slice(0, rotation);
        shuffledText += rotated;
    }

    for (let i = 0; i < shuffledText.length; i++) {
        let charCode = shuffledText.charCodeAt(i) - 97;
        let shift = (key + i) % 26;
        let newChar = (charCode + shift) % 26;
        result += String.fromCharCode(newChar + 97);
    }

    return {
        text: result,
        key: key
    };
}



// Funktion 3
function addSalt(data) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let saltChar = alphabet[data.key % 26];
    let salt = saltChar.repeat(data.key);

    return {
        text: salt + data.text + salt,
        key: data.key
    };
}



//Funktion 4
function finalMaskAndOutput(data) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let finalKeyChar = alphabet[data.key % 26];
    return data.text + finalKeyChar;
}


//Funktion 5 (Huvudfunktion (Kopplar samman allt))
function encryptMessage(input) {
    let step1 = normalizeReverseKeyGen(input);
    let step2 = blockShuffleAndCaesar(step1);
    let step3 = addSalt(step2);
    let result = finalMaskAndOutput(step3);
    return result;
}


// Körning
console.log("TEST START");
let encrypted = encryptMessage("Frusenbilruta");
console.log("Krypterat:", encrypted);








