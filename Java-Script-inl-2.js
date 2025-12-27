// The purpose of this project is, within the framework of the Front-End Development course, to develop a new, updated version of the Tricell Encryption Algorithm (version 2.0) from the previous course, Intro to IT, using JavaScript.
// The assignment involved constructing a more complex encryption algorithm consisting of at least three interconnected functions in series.
// Each function was to handle specific input and return a value to the next step in the chain.
// The following report documents the technical solution, source code, as well as an analysis of the results and the division of work within the group.

//Funktion 1
function normalizeReverseKeyGen(input) {
    // 1. lowercase
    let text = input.toLowerCase();


    // 2. ersätt svenska tecken
    text = text.replace(/å/g, "a")
               .replace(/ä/g, "a")
               .replace(/ö/g, "o");


    // 3. ta bort allt utom a–z
    text = text.replace(/[^a-z]/g, "");


    // 4. spegelvänd
    let reversed = text.split("").reverse().join("");


    // 5. beräkna nyckel från sista bokstaven
    let lastChar = reversed.charCodeAt(reversed.length - 1);
    let key = (lastChar - 96) % 26;
    if (key < 3) key += 3; // säkerställ rimligt skift


   return {
        text: reversed,
        key: key };


// Funktion 2
function blockShuffleAndCaesar(data) {
    let text = data.text;
    let key = data.key;
    let result = "";


    // --- Block Shuffle (block om 3) ---
    let blocks = [];
    for (let i = 0; i < text.length; i += 3) {
        blocks.push(text.substr(i, 3));
    }


    let shuffledText = "";


    for (let b = 0; b < blocks.length; b++) {
        let block = blocks[b];
        let rotation = (key + b) % block.length;


        // rotera blocket
        let rotated =
            block.slice(rotation) + block.slice(0, rotation);


        shuffledText += rotated;
    }


    // --- Dynamic Caesar ---

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


//Funktion 3
function addSalt(data) {
    let text = data.text;
    let key = data.key;

    // Vi använder bokstaven på plats 'key' i alfabetet som salt-tecken
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let saltChar = alphabet[key % 26];

    // Skapa en salt-sträng med längd 'key'
    let salt = saltChar.repeat(key);

    return {
        text: salt + text + salt,
        key: key
    };
}


//Funktion 4
function finalMaskAndOutput(data) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let finalKeyChar = alphabet[data.key % 26];

    // Slå ihop allt till en slutgiltig sträng
    return data.text + finalKeyChar;
}

//Funktion 5 (Huvudfunktion (Kopplar samman allt))
function encryptMessage(input) {
    console.log("Original: " + input);

    let step1 = normalizeReverseKeyGen(input); // Funktion 1
    let step2 = blockShuffleAndCaesar(step1);  // Funktion 2
    let step3 = addSalt(step2);                // Funktion 3
    let result = finalMaskAndOutput(step3);    // Funktion 4

    return result;
}

// Körning
let encrypted = encryptMessage("Frusenbilruta");
console.log("Krypterat: " + encrypted);




//  Instruktioner till gruppen Djinn

Projekt: De-kryptera Popokirimu Message

För att dekryptera vårt meddelande behöver ni följa vår algoritm baklänges. Vi använder ett utökat alfabet som inkluderar siffror och specialtecken.

Vårt alfabet (85 tecken): ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^*()_+[]{}|;:,.<>?

Grafiskt flödesschema för dekryptering
Steg-för-steg instruktioner:
Hitta Nyckeln: Det allra sista tecknet i det mottagna meddelandet är er nyckel (y). Ta bort detta tecken och konvertera det till ett siffervärde baserat på dess plats i alfabetet (a=1, b=2 osv).

Ta bort Salt: Räkna ut värdet n från nyckeln. Ta bort n antal tecken från början och n antal tecken från slutet av strängen.

Reverse Dynamic Caesar: För varje bokstav på position i, skifta den bakåt med (nyckel + i).

Reverse Block Shuffle: Dela upp texten i block om 3. Rotera varje block bakåt med (nyckel + blockIndex).

Återställ text: Spegelvänd strängen en sista gång för att få fram det ursprungliga (normaliserade) meddelandet.

Verktygstips för Cryptii: Om ni använder Cryptii, ställ in "Alphabet" till vår specialsträng ovan. Kom ihåg att vår algoritm använder en dynamisk förskjutning, så en vanlig Vigenère kan kräva att ni matchar nyckeln CRYPTOWARDEN om ni implementerar det steget i er de-krypterare.













