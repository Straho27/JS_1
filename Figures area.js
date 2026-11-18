function figures(input) {
    let type = input.shift();
    let area = 0;

    if (type === "square") {
        let a = Number(input.shift());
        area = a * a;
    }
    else if (type === "rectangle") {
        let a = Number(input.shift());
        let b = Number(input.shift());
        area = a * b;
    }
    else if (type === "circle") {
        let radius = Number(input.shift());
        area = Math.PI * radius * radius;
    }
    else if (type === "triangle") {
        let a = Number(input.shift());
        let h = Number(input.shift());
        area = (a * h) / 2;
    }

    console.log(`Area = ${area.toFixed(3)}`);
}

figures(["square", "5"])
figures(["rectangle", "7", "2.5"])
figures(["circle", "6"])
figures(["triangle", "4.5", "20"])