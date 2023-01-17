function inputHeightAndWeight(h,w){
    let bmi = 0;
    bmi = ((w/(h*h))*703);
    //console.log(`Height: ${h} \r\nWeight: ${w}\r\nYour BMI result is: ${bmi}`);

    if(bmi > 40){
        return "Morbidly Obese";
    }else if(bmi >= 35 && bmi < 40){
        return "Severely Obese";
    }else if(bmi >= 30 && bmi < 35){
        return "Moderately Obese";
    }else if(bmi >= 25 && bmi < 30){
        return "Overweight";
    }else if(bmi >= 18 && bmi < 25){
        return "Normal";
    }else if(bmi >= 16 && bmi < 18){
        return "Underweight";
    }else if(bmi < 16){
        return "Severely Underweight";
    }
 
    return bmi;
};

//console.log (inputHeightAndWeight(66,200));

module.exports = inputHeightAndWeight;