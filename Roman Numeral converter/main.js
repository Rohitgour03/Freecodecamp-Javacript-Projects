let specialNum = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
}


let keys = Object.keys(specialNum);
keys = keys.map(key => parseInt(key))
console.log(keys);

function convertToRoman(num) {

    let roman = "";

    let lowerLimit, upperLimit;
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] - num >= 0) {
            upperLimit = keys[i];
            break;
        }
    }
    lowerLimit = keys[keys.indexOf(upperLimit) - 1];
    console.log(lowerLimit, upperLimit)

    if (upperLimit - num >= keys[keys.indexOf(lowerLimit) - 1]) {
        console.log("Go with the lowerLimit");

        while (num > 0) {
            while (num >= lowerLimit) {
                roman += specialNum[lowerLimit];
                num -= lowerLimit;
            }
            console.log(roman);
            if (keys.includes(num)) {
                roman += specialNum[num];
                return roman;
            } else {
                roman += convertToRoman(num);
            }
            lowerLimit = keys[keys.indexOf(lowerLimit) - 1];
        }
    } else {
        console.log("Go with the upperLimit");
    }

    return roman;
}