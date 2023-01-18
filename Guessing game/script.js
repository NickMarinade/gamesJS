
const button = document.querySelector('button');

let randomNumber = Math.floor(Math.random() * 30) + 1;
console.log(randomNumber);

function check() {
    let x = document.querySelector('input');
    let defaultVal = randomNumber;
    let currentVal = x.value;
    let difference = Math.abs( defaultVal - currentVal );
    
    if (defaultVal == currentVal) {
      document.getElementById("log").innerHTML = "You guessed it!" + "<br>Well Done!";
    } else if (currentVal > 30) {
        alert("LESS THEN 30 PLEASE =)");
    } else if (difference > 1) {
        document.getElementById("log").innerHTML = "SORRY, YOU ARE WRONG =(" + "<br>The secret number was: " + defaultVal
      + "<br>Your guess is: " + currentVal;
    } else {
      document.getElementById("log").innerHTML = "SO CLOSE!" + "<br>The secret number was: " + defaultVal
      + "<br>Your guess is: " + currentVal;
    }
  };

