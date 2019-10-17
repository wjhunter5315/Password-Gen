console.log(window);

var password = {
    passLength: 8,
    passSpec: [],
    passUcase: [],
    passLcase: [],
}

var passLength = prompt("Between 8 - 128, how long would you like your password to be?");

var passSpec = confrim("Would you like your password to include special characters (&%!#^) ?");

var passUcase = confrim("Would you like your password to have upper-case letters?");

var passLcase = confirm("Would you like your password to have lower-case letters?");


function currentPass() {
    console.log("Length: " + password.passLength);
    console.log("Special Characters: " + password.passSpec);
    console.log("Upper Case: " + password.passUcase);
    console.log("Lower Case: " + password.passLcase);
    console.log("------------------------------");
  }

  if passSpec {
      //enable special characters
  }

  else {
      //dont use special characters
  }

  if passUcase {
      //allow random upper-case letters
  }

  else {
      //do not allow random upper-case letters
  }

  if passLcase {
      //allow lower-case letters
  }

  else {
      //do not allow lower-case letters
  }