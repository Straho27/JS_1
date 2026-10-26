function preparationProject(input) {
    let name = input[0];
    let projects_quantity = Number(input[1]);

    let need_time = projects_quantity * 3;

    console.log(`The architect ${name} will need ${need_time} hours to complete ${projects_quantity} project/s.`);
}

preparationProject([
    "George",
    "4"
])