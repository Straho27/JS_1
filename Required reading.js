function reading(input) {
    let current_book_page = Number(input[0]);
    let page_read_hour = Number(input[1]);
    let need_days = Number(input[2]);

    let all_time = current_book_page / page_read_hour;
    let hours_per_day = all_time / need_days;

    console.log(hours_per_day);
}

reading([
    "212",
    "20",
    "2"
])

reading([
    "432",
    "15",
    "4"
])