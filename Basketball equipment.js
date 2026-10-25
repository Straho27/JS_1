function basketball(input) {
    let basketball_tax = Number(input.shift());

    let basketball_shoes = basketball_tax - (basketball_tax * 0.40);
    let basketball_team = basketball_shoes - (basketball_shoes * 0.20);
    let basketball_ball = basketball_team / 4;
    let basketball_accessoar = basketball_ball / 5;

    let sum = basketball_tax + basketball_shoes + basketball_team + basketball_ball + basketball_accessoar;

    console.log(sum);
}

basketball(["365"])
basketball(["550"])