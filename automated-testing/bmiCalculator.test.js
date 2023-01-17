const inputHeightAndWeight=require("./bmiCalculator.js");

test('Testing BMI for Weight of 200 pounds and Height of 66 inches should be Moderately Obese',()=>{
    expect(inputHeightAndWeight(66,200)).toBe('Moderately Obese');
});


test('Testing BMI for Weight of 200 pounds and Height of 66 inches should not be Normal',()=>{
    expect(inputHeightAndWeight(66,200)).not.toBe('Normal');
});

test('Testing BMI for Weight of 200 pounds and Height of 66 inches should not be Morbidly Obese',()=>{
    expect(inputHeightAndWeight(66,200)).not.toBe('Morbidly Obese');
});

test('Testing BMI for Weight of 200 pounds and Height of 66 inches should not be Severely Obese',()=>{
    expect(inputHeightAndWeight(66,200)).not.toBe('Severely Obese');
});

test('Testing BMI for Weight of 200 pounds and Height of 66 inches should not be Overweight',()=>{
    expect(inputHeightAndWeight(66,200)).not.toBe('Overweight');
});

test('Testing BMI for Weight of 200 pounds and Height of 66 inches should not be Underweight',()=>{
    expect(inputHeightAndWeight(66,200)).not.toBe('Underweight');
});

test('Testing BMI for Weight of 200 pounds and Height of 66 inches should not be Severely Underweight',()=>{
    expect(inputHeightAndWeight(66,200)).not.toBe('Severely Underweight');
});