function guessPass(input) {
    let password = input.shift();

    if (password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    }
    else {
        console.log("Wrong password!");
    }
}

guessPass(["qwerty"])
guessPass(["s3cr3t!P@ssw0rd"])
guessPass(["4b12b4m1"])