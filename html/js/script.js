import { bmrMifflin, bmrHarris, methodDetect } from './calculators.js';
import { activity_intensity, diet_type } from './extracalculators.js';

const formBMR = document.getElementById('bmr-form');

const bmrResult = document.getElementById('bmrResult');
const tdeeResult = document.getElementById('tdeeResult');
const light_cutting = document.getElementById('light_cutting');
const cutting = document.getElementById('cutting');
const aggressive_cutting = document.getElementById('aggressive_cutting');
const light_bulking = document.getElementById('light_bulking');
const bulking = document.getElementById('bulking');
const aggressive_bulking = document.getElementById('aggressive_bulking');


formBMR.addEventListener('submit', function (event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value;
    const intensity = document.getElementById('intensity').value;
    const formula = document.getElementById('formula').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);

    let bmrCalculado;
    let aux;

    bmrCalculado = methodDetect(formula, gender, weight, height, age);

    if (bmrCalculado === "Error") {
        bmrResult.textContent = bmrCalculado;
    } else {
        bmrResult.textContent = `${Math.trunc(bmrCalculado)}`;
    }

    if (bmrCalculado === "Error") {
        bmrResult.textContent = bmrCalculado;
    } else {
        const tdee = activity_intensity(bmrCalculado, intensity);
        aux = diet_type(tdee, 'maintance'); 
        tdeeResult.textContent = `${Math.trunc(aux)}`;

        aux = diet_type(tdee, 'aggressive_cutting');
        aggressive_cutting.textContent = `${Math.trunc(aux)}`;

        aux = diet_type(tdee, 'light_cutting');
        light_cutting.textContent = `${Math.trunc(aux)}`;

        aux = diet_type(tdee, 'cutting');
        cutting.textContent = `${Math.trunc(aux)}`;

        aux = diet_type(tdee, 'light_bulking');
        light_bulking.textContent = `${Math.trunc(aux)}`;

        aux = diet_type(tdee, 'bulking');
        bulking.textContent = `${Math.trunc(aux)}`;

        aux = diet_type(tdee, 'aggressive_bulking');
        aggressive_bulking.textContent = `${Math.trunc(aux)}`;
    }
});

function clear()
{   
   document.getElementById("bmr-form").reset();
    bmrResult.textContent = 'Value';
    tdeeResult.textContent = 'Value';
    light_cutting.textContent = 'Value';
    cutting.textContent = 'Value';
    aggressive_cutting.textContent = 'Value';
    light_bulking.textContent = 'Value';
    bulking.textContent = 'Value';
    aggressive_bulking.textContent = 'Value';

}

const clearButton = document.querySelector('input[value="Clear"]');
clearButton.addEventListener('click', clear);