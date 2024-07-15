function containsUI(str) {
    return str.includes("UI");
}

let str1 = "React - UI Developer";
let str2 = "UI Developer";
let str3 = "Front end and Back end technologies";

console.log(`Does the string "${str1}" contain "UI"? ${containsUI(str1)}`);
console.log(`Does the string "${str2}" contain "UI"? ${containsUI(str2)}`);
console.log(`Does the string "${str3}" contain "UI"? ${containsUI(str3)}`);
