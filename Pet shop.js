function petShop(input) {
    let quantity_dog_food = Number(input[0]);
    let quantity_cat_food = Number(input[1]);

    let dog_food_price = quantity_dog_food * 2.50;
    let cat_food_price = quantity_cat_food * 4;
    let price = dog_food_price + cat_food_price;

    console.log(price, "euro.");
}

petShop([
    "5",
    "4"
])

petShop([
    "13",
    "9"
])