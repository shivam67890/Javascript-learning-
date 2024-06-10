function generatePassword(passwordlength, includeLowercase, includeUppercase, includeNumber, includeSymbols) {
    const Lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const Uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "123456890";
    const symbolchars = "!@#$%^&*()_+-=";


    let allowedchars = "";
    let password = "";
    allowedchars += includeLowercase ? Lowercasechars : "";//if(includeLowercase){
    allowedchars += includeUppercase ? Uppercasechars : "";//allowedchars+=Lowercasechars;
    allowedchars += includeSymbols ? symbolchars : "";      //}
    allowedchars += includeNumber ? numberchars : "";         //else{}
    if (passwordlength <= 0) {
        return `(password length must be 1)`;
    }
    if (allowedchars.length === 0) {
        return `(atleast select 1)`;
    }
    for (let i = 0; i < passwordlength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }
    return password;
}

const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;

const abx = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumber,
    includeSymbols,
)

console.log(`generated password  ${abx}`);





