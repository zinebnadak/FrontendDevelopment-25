function addSalt(data) {
    let text = data.text;
    let key = data.key;

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let saltChar = alphabet[key % 26];


    let salt = saltChar.repeat(key);

    return {
        text: salt + text + salt,
        key: key
    };
}