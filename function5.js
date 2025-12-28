function encryptMessage(input) {
    console.log("Original: " + input);

    let step1 = normalizeReverseKeyGen(input); // Funktion 1
    let step2 = blockShuffleAndCaesar(step1);  // Funktion 2
    let step3 = addSalt(step2);                // Funktion 3
    let result = finalMaskAndOutput(step3);    // Funktion 4

    return result;
}