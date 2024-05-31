// Function to encrypt a message using Caesar's Cipher
function caesarEncrypt(plaintext, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let encrypted = '';

    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        if (alphabet.includes(char.toLowerCase())) {
            const isUpperCase = char === char.toUpperCase();
            let shiftedIndex = (alphabet.indexOf(char.toLowerCase()) + shift) % 26;
            let encryptedChar = alphabet[shiftedIndex];
            if (isUpperCase) {
                encryptedChar = encryptedChar.toUpperCase();
            }
            encrypted += encryptedChar;
        } else {
            encrypted += char;
        }
    }

    // Insert a random letter after every two letters
    const result = [];
    for (let i = 0; i < encrypted.length; i++) {
        result.push(encrypted[i]);
        if ((i + 1) % 2 === 0) {
            const randomLetter = alphabet[Math.floor(Math.random() * 26)];
            result.push(randomLetter);
        }
    }

    return result.join('');
}

// Function to decrypt a message encrypted with Caesar's Cipher
function caesarDecrypt(encrypted, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let filteredEncrypted = '';

    // Remove the random letters inserted after every two letters
    for (let i = 0; i < encrypted.length; i++) {
        if ((i + 1) % 3 !== 0) {
            filteredEncrypted += encrypted[i];
        }
    }

    let decrypted = '';
    for (let i = 0; i < filteredEncrypted.length; i++) {
        const char = filteredEncrypted[i];
        if (alphabet.includes(char.toLowerCase())) {
            const isUpperCase = char === char.toUpperCase();
            let shiftedIndex = (alphabet.indexOf(char.toLowerCase()) - shift + 26) % 26;
            let decryptedChar = alphabet[shiftedIndex];
            if (isUpperCase) {
                decryptedChar = decryptedChar.toUpperCase();
            }
            decrypted += decryptedChar;
        } else {
            decrypted += char;
        }
    }

    return decrypted;
}

// Example usage
const plaintext = 'HelloWorld';
const shift = 3;
const encryptedMessage = caesarEncrypt(plaintext, shift);