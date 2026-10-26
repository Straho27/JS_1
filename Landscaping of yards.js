function landscapingYards(input) {
    let yards_meters = Number(input[0]);

    let price = yards_meters * 7.61;
    let dispocnt = price * 0.18;
    let price_after_discount = price - dispocnt;

    console.log(`The final price is: ${price_after_discount} euro.`);
    console.log(`The discount is: ${dispocnt} euro`);
}

landscapingYards(["550"])