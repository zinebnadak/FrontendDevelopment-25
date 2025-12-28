function finalMaskAndOutput(data) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let finalKeyChar = alphabet[data.key % 26];

    // Slå ihop allt till en slutgiltig sträng
    return data.text + finalKeyChar;
}