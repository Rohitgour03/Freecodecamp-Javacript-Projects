function rot13(str) {
    let newStr = "";
    // Regular Expression for checking characters between A and Z
    let letterRegex = /[A-Z]/;

    // Looping through the given string
    for (let i = 0; i < str.length; i++) {
        // Condition to check if it is a character between A and Z
        if (str[i].match(letterRegex)) {
            // Getting the UTF-16 code of corresponding character
            let charCode = str[i].charCodeAt();

            // condition to check if it is in range of A-Z
            if (charCode + 13 <= 90) {
                charCode += 13;
            } else {
                charCode = charCode + 13 - 26;
            }

            // Getting the corresponding character from the its UTF-16 code
            newStr += String.fromCharCode(charCode);
        }
        // If it is other than A-Z, simply add that in new String
        else {
            newStr += str[i];
        }
    }

    console.log(newStr)
    return newStr;
}