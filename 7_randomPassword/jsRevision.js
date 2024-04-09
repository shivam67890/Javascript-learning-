function rndpassword(length, includeUppercase, includeLowercase, includeSymbols, includeNumber) {
    const Lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const Uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "123456890";
    const symbolchars = "!@#$%^&*()_+-=";
    let allowedchars = "";
    let password = "";
    allowedchars += includeUppercase ? Uppercasechars : "";  //terary operator
    allowedchars += includeLowercase ? Lowercasechars : ""; 
    allowedchars += includeNumber ? numberchars : "";
    allowedchars += includeSymbols ? symbolchars : "";
    for (let i = 0; i < length; i++) {
        let rnd = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[rnd];
    }
    return password;
}
const length = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeSymbols = true;
const includeNumber = true;
const pass = rndpassword(length, includeUppercase, includeLowercase, includeSymbols, includeNumber);
console.log(`generated password ${pass}`);

