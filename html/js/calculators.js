export function bmrMifflin(gender, weight, height, age) {
    let bmr;
    
    if (weight <= 0 || height <= 0 || age < 15) {
        return "Error";
    } else {
        if (gender.toLowerCase() === 'male') {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            return bmr;
        } else if (gender.toLowerCase() === 'female') {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            return bmr;
    }
}
}

export function bmrHarris(gender, weight, height, age) {
    let bmr;
    
    if (weight <= 0 || height <= 0 || age < 15) {
        return "Error";
    } else {
        if (gender.toLowerCase() === 'male') {
            bmr = (13.397*weight) + (4.799*height) - (5.677*age) + 88.362;
            return bmr;
        } else if (gender.toLowerCase() === 'female') {
            bmr = (9.247*weight) + (3.098*height) - (4.330*age) + 447.593;
            return bmr;
    }
}
}

export function methodDetect(formula, gender, weight, height, age){
    let bmrCalculado;
    if (formula == 'mifflin') {
        bmrCalculado = bmrMifflin(gender, weight, height, age);
    } else if (formula == 'harris') {
        bmrCalculado = bmrHarris(gender, weight, height, age);
    }
    return bmrCalculado;
}