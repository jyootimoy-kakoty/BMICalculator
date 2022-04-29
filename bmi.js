/*BMI calculator*/
var weightKg, weightGm, height, heightFeet, heightInch, BMI;
//alert(`enter weight (Kg): ${weight = Event.key}`);
//alert(`enter height (Feet): ${height = Event.key}`);
weightKg = 0;//prompt("Please enter your Weight (Kg.Gm)", 0.00);
heightFeet = 0;//prompt("Please enter your Height (Feet.Inch)", 0.00);
weightGm = 0;
heightInch = 0;

document.getElementById('weightKg').addEventListener('change', function getWeightKg() {
    weightKg = parseFloat(document.getElementById('weightKg').value) || 0; 
});
document.getElementById('weightGm').addEventListener('change', function getWeightGm() {
    weightGm = parseFloat(document.getElementById('weightGm').value) || 0; 
});
document.getElementById('heightFeet').addEventListener('change', function getHeightFeet() {
    heightFeet = parseFloat(document.getElementById('heightFeet').value) || 0; 
});
document.getElementById('heightInch').addEventListener('change', function getHeightInch() {
    heightInch = parseFloat(document.getElementById('heightInch').value) || 0; 
});

function calculate() {
    document.getElementById('heightInch').value = heightInch;
    document.getElementById('weightGm').value = weightGm;
    heightInch = 0.0254 * heightInch;
    heightFeet = 0.3048 * heightFeet;
    //console.log(1, heightFeet, heightInch);
    let heightM2 = heightFeet + heightInch;
    let weight = weightKg + weightGm;
    //console.log(2, heightFeet, heightInch, heightM2, weight);
    BMI = weight / (heightM2 ** 2);
}

let submitButton = document.querySelector('.submitBtn').addEventListener('click', function validate(event) {
    event.preventDefault();
    if((weightKg == 0) && ( heightFeet == 0)) return alert(`Please enter your Weight (Kg)\nPlease enter your Height (Feet)`);
    else if(weightKg == 0) return alert("Please enter your Weight (Kg)");
    else if(heightFeet == 0) return alert("Please enter your Height (Feet)");
    else {
        calculate();
        document.querySelector('.output').style.visibility = 'visible';
        let result = document.querySelector('.output');
        if(BMI < 19) {
            result.innerHTML = `BMI: ${BMI}. You're underweight!😢`;
            document.querySelector('.output').style.color = 'Blue';
        }
        else if(BMI >= 19 && BMI <=24) {
            result.innerHTML = `BMI: ${BMI}. You're Healthy!👌`;//Press Windows + . for the emoji window pop-up
            document.querySelector('.output').style.color = 'Green';
        }
        else if(BMI > 24 && BMI <=29) {
            result.innerHTML = `BMI: ${BMI}. You're Overweight!🎅`;
            document.querySelector('.output').style.color = 'Orange';
        }
        else if(BMI > 30 && BMI <=39) {
            result.innerHTML = `BMI: ${BMI}. You're Obese! ⚠`;
            document.querySelector('.output').style.color = 'Red';
        }
        else {
            result.innerHTML = `BMI: ${BMI}. You're Extremely Obese!⚡`;
            document.querySelector('.output').style.color = 'Crimson';
        }
    }
});
