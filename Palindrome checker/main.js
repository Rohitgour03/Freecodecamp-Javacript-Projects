// Palindrome Checker
function palindrome(str) {
    // Regular Expression for non alpha-numeric characters
    let regex = /[^A-Za-z0-9]/g;
    let pureStr = str.toLowerCase();

    // Removing all non alpha-numeric characters
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(regex)) {
            pureStr = pureStr.replace(regex, '');
        }
    }
    console.log(pureStr);

    // following 2 pointer approach, comparing first and last character, second and second-last and so on.
    let startIndex = 0,
        endIndex = pureStr.length - 1;

    // flag variable to check, if we got any nonequality.
    let flagCheck = true;

    // looping through the pure String, free from any non alpha-numeric characters and each character is lowercased.
    while (startIndex <= endIndex) {
        if (pureStr[startIndex] !== pureStr[endIndex]) {
            flagCheck = false;
        }
        startIndex++;
        endIndex--;
    }

    // checking the flag value, if true then its a palindrome
    if (flagCheck) {
        console.log(true);
        return true
    }
    console.log(false);
    return false;
}

palindrome("A man, a plan, a canal. Panama");