var randomNumber,
    result = 0,
    button = document.getElementById('button'),
    placeholder = document.getElementById('placeholder'),
    getImage = document.getElementById('image');
    var score=[0,0]

const dice = {
    sides: 6,
    roll: function() {
        randomNumber = Math.floor(Math.random() * this.sides) + 1;
        console.log('roll function ' + randomNumber);
        return randomNumber;
    }
};
//randomNumber = Math.floor(Math.random() * this.sides) + 1;
//Prints dice roll to the page

function printNumber(number) {
    if (randomNumber != 1) {
        placeholder.innerHTML = number;
    } else {
        result = 0;
        placeholder.innerHTML = '0';
    }
}

button.onclick = function() {
    result += dice.roll();
    console.log('Overall score ' + result);
    printNumber(result);
};
