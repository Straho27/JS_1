function schoolMaterial(input) {
    let pen_packet_price = 5.80;
    let marker_packet_price = 7.20;
    let preparation_price = 1.20;

    let pen_quantity = Number(input[0]);
    let marker_quantity = Number(input[1]);
    let liters_preparation = Number(input[2]);
    let discount = Number(input[3]);

    let sum_pens = pen_quantity * pen_packet_price;
    let sum_markers = marker_quantity * marker_packet_price;
    let sum_preparation = liters_preparation * preparation_price;
    let sum = sum_pens + sum_markers + sum_preparation;

    sum -= sum * (discount / 100);

    console.log(sum);
}

schoolMaterial([
    "2",
    "3",
    "4",
    "25"
])

schoolMaterial([
    "4",
    "2",
    "5",
    "13"
])