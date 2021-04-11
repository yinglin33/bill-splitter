let splitAmount;
let subtotal;
let tax;
let tip;
let numPeople;

function submit() {
    subtotal = parseFloat(document.getElementById("subtotal").value);
    tax = parseFloat(document.getElementById("tax").value);
    tip = parseFloat(document.getElementById("tip").value);
    numPeople = parseFloat(document.getElementById("numPeople").value);
    splitAmount = (subtotal + tax + tip) / numPeople;

    resultString = "Everyone pays: $" + splitAmount.toString();
    document.getElementById("results").innerHTML = resultString;
    console.log(splitAmount);
}

function submitRandom() {
    subtotal = parseFloat(document.getElementById("subtotal").value);
    tax = parseFloat(document.getElementById("tax").value);
    tip = parseFloat(document.getElementById("tip").value);
    numPeople = parseFloat(document.getElementById("numPeople").value);

    //splits a number using random, up to 50%
    function split(currentTotal) {
        let randomNumber = currentTotal * Math.random() * 0.5; //only up to 50% of what's left
        let roundedSplit = Math.round(randomNumber * 100) / 100; //rounded to 2 decimal places
        return roundedSplit;
    }

    //shuffling algorithm from online
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    //dividing different values for payment and placing into an array
    let paymentArray = [];
    let currentLeft = subtotal + tax + tip;

    for (var i = 0; i < numPeople; i++) {
        if (i == numPeople - 1) {
            paymentArray.push(Math.round(currentLeft * 100) / 100); //rounding
            currentLeft = 0.00;
        }
        else {
            splitValue = split(currentLeft);
            paymentArray.push(splitValue);
            currentLeft = currentLeft - splitValue;
        }
    }
    console.log(paymentArray);
    // percentArray = shuffle(percentArray); // shuffles payment array randomly
    percentArray = shuffle(paymentArray); // shuffles payment array randomly

    //updating screen after submission
    let resultString = ""

    for (var i = 0; i < numPeople; i++) {
        resultString = resultString + "Person " + (i + 1).toString() + " pays: $" ;
        resultString = resultString + percentArray[i].toString() + "<br>";
    }

    document.getElementById("results").innerHTML = resultString;
}

function selectRandom() {
    subtotal = parseFloat(document.getElementById("subtotal").value);
    tax = parseFloat(document.getElementById("tax").value);
    tip = parseFloat(document.getElementById("tip").value);
    numPeople = parseFloat(document.getElementById("numPeople").value);

    let randomPeople = Math.floor(Math.random() * (numPeople + 1) );
    let total = subtotal + tax + tip;

    //updating screen after submission
    let resultString = "Person " + randomPeople.toString() + " pays: $" + total.toString();

    document.getElementById("results").innerHTML = resultString;
}