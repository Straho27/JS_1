function excellentGrade(input){
    let grade = Number(input[0]);

    if(grade >= 5.50){
        console.log(`Excellent!`);
    }
}

excellentGrade(["6"])
excellentGrade(["5"])
excellentGrade(["5.50"])