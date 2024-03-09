
function getSleepHours(day) {

    if (day == "monday") {

        return 7;
    }
    else if (day == "tuesday") {

        return 3;
    }
    else if (day == "wednesday") {

        return 8;
    }
    else if (day == "thusday") {

        return 5;
    }
    else if (day == "friday") {

        return 11;
    }
    else if (day == "saturday") {

        return 20;
    }
    else if (day == "sunday") {

        return 22;
    }

    else {
        console.log("invalid day");
    }
}

console.log(getSleepHours("saturday"));
console.log(getSleepHours("sunday"));
console.log(getSleepHours("friday"));



function getActualSleepHours() {

    let sum = getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thusday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
    console.log(sum);
}
getActualSleepHours();


function getIdealSleepHours() {
    let idealHours = 10;
    return idealHours * 7;
}
console.log(getIdealSleepHours());

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
        console.log("the user got the perfect amount of sleep");
    }
    else if (actualSleepHours > idealSleepHours){
        console.log(" the user got more sleep than needed.");
    }
    else {
        console.log("the user should get some rest.");
    }
}
calculateSleepDebt();

