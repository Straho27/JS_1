function deposite(input) {
    let deposite_sum = Number(input[0]);
    let deposite_month = Number(input[1]);
    let annual_interest_rate = Number(input[2]);

    let sum = deposite_sum + deposite_month * ((deposite_sum * annual_interest_rate / 100) / 12);

    console.log(sum);
}

deposite([
    "200",
    "3",
    "5.7"
])

deposite([
    "2350",
    "6",
    "7"
])