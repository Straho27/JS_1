function foodDelivery(input) {
    let chicken_menu_price = 10.35;
    let fish_menu_price = 12.40;
    let vegetable_menu_price = 8.15;

    let chicken_menu_quantity = Number(input[0]);
    let fish_menu_quantity = Number(input[1]);
    let vegetable_menu_quantity = Number(input[2]);

    let chicken_menu_sum = chicken_menu_quantity * chicken_menu_price;
    let fish_menu_sum = fish_menu_quantity * fish_menu_price;
    let vegetable_menu_sum = vegetable_menu_quantity * vegetable_menu_price;

    let need_sum = chicken_menu_sum + fish_menu_sum + vegetable_menu_sum;
    let desert_sum = need_sum * 0.20;
    let sum = need_sum + desert_sum + 2.50;

    console.log(sum);
}

foodDelivery([
    "2",
    "4",
    "3"
])

foodDelivery([
    "9",
    "2",
    "6"
])