function biggestNumber(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());

    if (firstNumber > secondNumber) {
        console.log(firstNumber);
    }
    else {
        console.log(secondNumber);
    }
}

biggestNumber(["5", "3"])
biggestNumber(["12", "10"])
biggestNumber(["-10", "-3"])