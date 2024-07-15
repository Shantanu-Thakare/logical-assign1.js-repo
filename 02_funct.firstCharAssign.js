function getlastCharacter(str){
    return str.charAt(str.length - 1);
}

let str1 = " Hey, My friend, Programming language";
let str2 = "I am learning logical Programming";
let str3 = "Angular";

console.log(`Last character of string "${str1}" is: ${getlastCharacter(str1)}`);
console.log(`Last character of string "${str2}" is: ${getlastCharacter(str2)}`);
console.log(`Last character of string "${str3}" is: ${getlastCharacter(str3)}`);
