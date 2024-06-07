// 1
let result = 5 + 5 + '5';
console.log("тип змінної: " + typeof result);

// 2
const email = "maria21.1vanowa@gmail.com";
const emailIncludes = email.includes("@");
const emailLength = email.length;

console.log(email)
console.log("наявність @: " + emailIncludes);
console.log("кількість символів: " + emailLength);

// 3
let firstWord = "My";
let secondWord = "name";
let thirdWord = "is";

let fullName = firstWord + " " + secondWord + " " + thirdWord + " Viktor";

console.log(fullName);

// 4
const userName = "Ірина";
const payment = 569;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);

