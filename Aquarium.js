function aquarium(input) {
    let long_size = Number(input[0]);
    let width_size = Number(input[1]);
    let height_size = Number(input[2]);
    let percent_occupied_space = Number(input[3]);

    let area = long_size * width_size * height_size;
    let free_space_water = area / 1000;
    let need_water = free_space_water * (1 - (percent_occupied_space / 100));

    console.log(need_water);
}

aquarium([
    "85",
    "75",
    "47",
    "17"
])