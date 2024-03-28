
// const PasswordBox = document.getElementById("Password")
// const lenght = 12;

// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const number = "0123456789";
// const symbol = "!@#$%^&*()_-+=<>?/\|";

// const allChars = upperCase + lowerCase + number + symbol;

// function createPassword(){
//     let Password = "";
//     Password += upperCase[Math.floor(Math.random() * upperCase.length)];
//     Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//     Password += number[Math.floor(Math.random() * number.length)];
//     Password += symbol[Math.floor(Math.random() * symbol.length)];
 
//     while(lenght > Password.length){
//         Password += allChars[Math.floor(Math.random() * allChars.length)]
//     }
//     PasswordBox.value = Password;
// }

// function copy(){
//     PasswordBox.select();
//     document.execCommand('copy')
// }

const passwordBox = document.getElementById('password')
let length = 20;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '~!@#$%^&*()_+=-{}[]<>/?\|';

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;
}

function copy(){
    passwordBox.select();
    document.execCommand('copy');
}