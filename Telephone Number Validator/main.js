function telephoneCheck(str) {

    let regex1 = /^(1?\s?)(\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})/g;
    let regex2 = /^(1?\s?)\((\d{3})\)(-|\s)?(\d{3})(-|\s)?(\d{4})/g;

    console.log(str.match(regex1))
    if (str.match(regex1) !== null) {
        if (str.match(regex1)[0] === str) return true;
    }

    console.log(str.match(regex2))
    if (str.match(regex2) !== null) {
        if (str.match(regex2)[0] === str) return true;
    }

    return false;
}