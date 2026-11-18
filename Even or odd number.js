function evenOrOdd(input) {
    let number = Number(input.shift());

    if (number % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}

evenOrOdd(["3"])
evenOrOdd(["2"])
evenOrOdd(["25"])