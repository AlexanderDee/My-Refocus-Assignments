let BMI = 0;

let h = 0; //should be in inches
let w = 0; //should be in pounds


function inputHeightAndWeight(h,w){
    console.log(`Height: ${h} inches\r\nWeight: ${w} pounds`);
    let BMI = ((w/(h*h))*703) //formula for body mass index in US units
    console.log(`Your BMI: ${BMI}`);

    
    if(BMI > 40){
        console.log("Morbidly Obese");
    }else if(BMI >= 35 && BMI < 40){
        console.log("Severely Obese");
    }else if(BMI >= 30 && BMI < 35){
        console.log("Moderately Obese");
    }else if(BMI >= 25 && BMI < 30){
        console.log("Overweight");
    }else if(BMI >= 18 && BMI < 25){
        console.log("Normal");
    }else if(BMI >= 16 && BMI < 18){
        console.log("Underweight");
    }else if(BMI < 16){
        console.log("Severely Underweight");
    }
}

inputHeightAndWeight(66,154.32)