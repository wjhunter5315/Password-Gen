console.log(window);
var password = [];
var passEl = [];
var passString = [];

var charOptions = [
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", ",", ".", "/", ";", "'", "[", "]", "<", ">", "?", ":", "{", "}"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
]
document.getElementById("generate").addEventListener("click", makePass);
    function makePass() {
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
                
                passEl.push(randomEl);
                console.log(passEl.join(""));
                
            }
           
            else if (specChar === false && caseUpper === true && caseLower === true) {
                var newArray = [0,2,3];
                var randomNumber1 = newArray[Math.floor(Math.random() * newArray.length)];
                var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
                var randomEl = charOptions[randomNumber1][randomNumber2];
                console.log(randomNumber1);
                console.log(randomEl);
                passEl.push(randomEl);
                console.log(passEl);
            }
    
            else if (specChar === false && caseUpper === false && caseLower === true) {
                var newArray = [0,3];
                var randomNumber1 = newArray[Math.floor(Math.random() * newArray.length)];
                var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
                var randomEl = charOptions[randomNumber1][randomNumber2];
                console.log(randomNumber1);
                console.log(randomEl);
                passEl.push(randomEl);
                console.log(passEl);
            }
    
            else if (specChar === false && caseUpper === true && caseLower === false) {
                var newArray = [0,2];
                var randomNumber1 = newArray[Math.floor(Math.random() * newArray.length)];
                var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
                var randomEl = charOptions[randomNumber1][randomNumber2];
                console.log(randomNumber1);
                console.log(randomEl);
                passEl.push(randomEl);
                console.log(passEl);
            }
    
            else if (specChar === true && caseUpper === true && caseLower === false) {
                var newArray = [0,1,2];
                var randomNumber1 = newArray[Math.floor(Math.random() * newArray.length)];
                var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
                var randomEl = charOptions[randomNumber1][randomNumber2];
                console.log(randomNumber1);
                console.log(randomEl);
                passEl.push(randomEl);
                console.log(passEl);
            }
            else if (specChar === true && caseUpper === false && caseLower === false) {
                var newArray = [0,1];
                var randomNumber1 = newArray[Math.floor(Math.random() * newArray.length)];
                var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
                var randomEl = charOptions[randomNumber1][randomNumber2];
                console.log(randomNumber1);
                console.log(randomEl);
                passEl.push(randomEl);
                console.log(passEl);
            }
            else {
                var newArray = [0];
                var randomNumber1 = Math.floor(Math.random() * newArray.length);
                var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
                var randomEl = charOptions[randomNumber1][randomNumber2];
                console.log(randomNumber1);
                console.log(randomEl);
                passEl.push(randomEl);
                console.log(passEl);
            }
        }
        for (var i = 0; i < passEl; i++) {
            password.push(passEl);
            console.log(password);
            var passString = password.join("");
            console.log(passString);
        }
        
        // makeString();
        // var myJSON = JSON.stringify(passEl);
        // console.log(myJSON);
        // document.getElementById("password").value = myJSON;
        document.getElementById("password").value = passEl.join("");
       
    }

    // passEl.push("password");
document.getElementById("copy").addEventListener("click", copyPassword);
    function copyPassword() {
        var copyText = document.getElementById("password");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
    }
// document.getElementById("generate").addEventListener("click", makePass()) {
    // passEl.push("password");

console.log(password);



// makePass();

// getSpec();
// getUcase();
// getLcase();
// console.log(window);
// console.log(lengthEl);


// var randomNumber1 = Math.floor(Math.random() * charOptions.length);
// var randomNumber2 = Math.floor(Math.random() * charOptions[randomNumber1].length);
// console.log(randomNumber1);
// console.log(randomNumber2);
// console.log(charOptions[randomNumber1][randomNumber2]);