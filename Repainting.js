function repainting(input) {
    let naylon_price = 1.50;
    let paint_price = 14.50;
    let paint_thinner_price = 5;

    let quantity_naylon = Number(input[0]);
    let quantity_paint = Number(input[1]);
    let quantity_thinner_paint = Number(input[2]);
    let work_hours = Number(input[3]);

    let naylon_sum = (quantity_naylon + 2) * naylon_price;
    let paint_sum = (quantity_paint + (10 / 100)) * paint_price;
    let thinner_paint_sum = quantity_thinner_paint * paint_thinner_price;

    let sum = naylon_sum + paint_sum + thinner_paint_sum + 0.40;
    let sum_workers = (sum * (30 / 100)) * work_hours;
    let need_sum = sum + sum_workers;

    console.log(need_sum);
}

repainting([
    "10",
    "11",
    "4",
    "8"
])