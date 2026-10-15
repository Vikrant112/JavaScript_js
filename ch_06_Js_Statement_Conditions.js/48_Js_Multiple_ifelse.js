//problem statement
// Score - 0 to 100
// score>90 - A
// Score 80 to 90 - B
// Score 70 to 80 - C
// Score 60 to 70 - D
// Score 50 to 60 -E
// Score <50 => Fail

let score = 95;

if (score > 100 || score < 0) {
    console.log("Invalid Score");
} else {
    if (score > 90) {
        console.log("Grade A - Excelent");
    }
    else if (score >= 80 && score <= 90) {
        console.log("Grade B - Very Good");

    } else if (score >= 70 && score <= 80) {
        console.log("Grade C -  Good");

    } else if (score >= 60 && score <= 70) {
        console.log("Grade D - Need Improvement");

    } else if (score >= 50 && score <= 60) {
        console.log("Grade E - work hard");

    }
    else if (score < 50) {
        console.log("Fail");

    }
}

