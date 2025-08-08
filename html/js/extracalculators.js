export function activity_intensity(bmr, intensity) {
    const cases = {
        none: bmr*1.2, 
        low: bmr*1.375, 
        medium: bmr*1.55, 
        high: bmr*1.725, 
        physical_job: bmr*1.9,
    };
    return cases[intensity];
}

export function diet_type(tdee, model){
    const cases = {
        light_cutting: tdee-300,
        cutting: tdee-500,
        aggressive_cutting: tdee-750,
        maintance: tdee,
        light_bulking: tdee+300,
        bulking: tdee+500,
        aggressive_bulking: tdee+750,
    };
    return cases[model];
}