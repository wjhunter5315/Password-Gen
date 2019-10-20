console.log(window);
var password = "";
var charOptions = [
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", ",", ".", "/", ";", "'", "[", "]", "<", ">", "?", ":", "{", "}"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
]
function makePass(password) {
    var passLength = prompt("Between 8 - 128, how long would you like your password?");
    console.log(passLength);
    
    var specChar = confirm("Use special characters (*@#%!) ?");
    console.log(specChar);

    var caseUpper = confirm("Use Upper-case letters?");
    console.log(caseUpper);

    var caseLower = confirm("Use Lower-case letters?");
    console.log(caseLower);
    
    for(var i = 0; i < passLength; i++){
        password += passLength.charAt(Math.floor(Math.random() * passLength.length));
        
        if (specChar === true && caseUpper === true && caseLower === true) {
            var randomNumber1 = Math.floor(Math.random() * charOptions.length);
            var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
            var randomEl = charOptions[randomNumber1][randomNumber2];
            console.log(randomNumber1);
            console.log(randomNumber2);
            console.log(randomEl);
        }
       
        else if (specChar === false && caseUpper === true && caseLower === true) {
            var newArray = [0,2,3];
            var randomNumber1 = newArray[Math.floor(Math.random() * newArray.length)];
            var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
            var randomEl = charOptions[randomNumber1][randomNumber2];
            console.log(randomNumber1);
            console.log(randomEl);
        }

        else if (specChar === false && caseUpper === false && caseLower === true) {
            var newArray = [0,3];
            var randomNumber1 = newArray[Math.floor(Math.random() * newArray.length)];
            var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
            var randomEl = charOptions[randomNumber1][randomNumber2];
            console.log(randomNumber1);
            console.log(randomEl);
        }

        else if (specChar === false && caseUpper === true && caseLower === false) {
            var newArray = [0,2];
            var randomNumber1 = newArray[Math.floor(Math.random() * newArray.length)];
            var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
            var randomEl = charOptions[randomNumber1][randomNumber2];
            console.log(randomNumber1);
            console.log(randomEl);
        }

        else if (specChar === true && caseUpper === true && caseLower === false) {
            var newArray = [0,1,2];
            var randomNumber1 = newArray[Math.floor(Math.random() * newArray.length)];
            var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
            var randomEl = charOptions[randomNumber1][randomNumber2];
            console.log(randomNumber1);
            console.log(randomEl);
        }

        else {
            var newArray = [0];
            var randomNumber1 = Math.floor(Math.random() * newArray.length);
            var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
            var randomEl = charOptions[randomNumber1][randomNumber2];
            console.log(randomNumber1);
            console.log(randomEl);
        }
    }
}
console.log(password);



makePass();

//getSpec();
//getUcase();
//getLcase();
//console.log(window);
//console.log(lengthEl);


//var randomNumber1 = Math.floor(Math.random() * charOptions.length);
//var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
//console.log(randomNumber1);
//console.log(randomNumber2);
//console.log(charOptions[randomNumber1][randomNumber2]);