const inputHeightAndWeight = require("./bmiCalculator.js");

console.log("Testing for Weight = 300 pounds and Height = 66 inches, result should be Morbidly Obese");
console.log("**********");
console.log("Mobidly Obese", inputHeightAndWeight(66,300)==="Morbidly Obese");
console.log("Severely Obese", inputHeightAndWeight(66,300)==="Severely Obese");
console.log("Moderately Obese", inputHeightAndWeight(66,300)==="Moderately Obese");
console.log("Overweight", inputHeightAndWeight(66,300)==="Overweight");
console.log("Normal", inputHeightAndWeight(66,300)==="Normal");
console.log("Underweight", inputHeightAndWeight(66,300)==="Underweight");
console.log("Severely Underweight", inputHeightAndWeight(66,300)==="Severely Underweight");

console.log("**********");
console.log("Testing for Weight = 240 pounds and Height = 66 inches, result should be Severely Obese");
console.log("**********");
console.log("Severely Obese", inputHeightAndWeight(66,240)==="Severely Obese");
console.log("Moderately Obese", inputHeightAndWeight(66,240)==="Moderately Obese");
console.log("Morbidly Obese", inputHeightAndWeight(66,240)==="Morbidly Obese");
console.log("Overweight", inputHeightAndWeight(66,240)==="Overweight");
console.log("Normal", inputHeightAndWeight(66,240)==="Normal");
console.log("Underweight", inputHeightAndWeight(66,240)==="Underweight");
console.log("Severely Underweight", inputHeightAndWeight(66,240)==="Severely Underweight");

console.log("**********");
console.log("Testing for Weight = 200 pounds and Height = 66 inches, result should be Moderately Obese");
console.log("**********");
console.log("Moderately Obese", inputHeightAndWeight(66,200)==="Moderately Obese");
console.log("Severely Obese", inputHeightAndWeight(66,200)==="Severely Obese");
console.log("Morbidly Obese", inputHeightAndWeight(66,200)==="Morbidly Obese");
console.log("Overweight", inputHeightAndWeight(66,200)==="Overweight");
console.log("Normal", inputHeightAndWeight(66,300)==="Normal");
console.log("Underweight", inputHeightAndWeight(66,200)==="Underweight");
console.log("Severely Underweight", inputHeightAndWeight(66,200)==="Severely Underweight");

console.log("**********");
console.log("Testing for Weight = 160 pounds and Height = 66 inches, result should be Overweight");
console.log("**********");
console.log("Overweight", inputHeightAndWeight(66,160)==="Overweight");
console.log("Moderately Obese", inputHeightAndWeight(66,160)==="Moderately Obese");
console.log("Severely Obese", inputHeightAndWeight(66,160)==="Severely Obese");
console.log("Morbidly Obese", inputHeightAndWeight(66,160)==="Morbidly Obese");
console.log("Normal", inputHeightAndWeight(66,160)==="Normal");
console.log("Underweight", inputHeightAndWeight(66,160)==="Underweight");
console.log("Severely Underweight", inputHeightAndWeight(66,160)==="Severely Underweight");

console.log("**********");
console.log("Testing for Weight = 150 pounds and Height = 66 inches, result should be Normal");
console.log("**********");
console.log("Normal", inputHeightAndWeight(66,150)==="Normal");
console.log("Overweight", inputHeightAndWeight(66,150)==="Overweight");
console.log("Moderately Obese", inputHeightAndWeight(66,150)==="Moderately Obese");
console.log("Severely Obese", inputHeightAndWeight(66,150)==="Severely Obese");
console.log("Morbidly Obese", inputHeightAndWeight(66,150)==="Morbidly Obese");
console.log("Underweight", inputHeightAndWeight(66,150)==="Underweight");
console.log("Severely Underweight", inputHeightAndWeight(66,150)==="Severely Underweight");

console.log("**********");
console.log("Testing for Weight = 100 pounds and Height = 66 inches, result should be Underweight");
console.log("**********");
console.log("Underweight", inputHeightAndWeight(66,100)==="Underweight");
console.log("Normal", inputHeightAndWeight(66,100)==="Normal");
console.log("Overweight", inputHeightAndWeight(66,100)==="Overweight");
console.log("Moderately Obese", inputHeightAndWeight(66,100)==="Moderately Obese");
console.log("Severely Obese", inputHeightAndWeight(66,100)==="Severely Obese");
console.log("Morbidly Obese", inputHeightAndWeight(66,100)==="Morbidly Obese");
console.log("Severely Underweight", inputHeightAndWeight(66,100)==="Severely Underweight");

console.log("**********");
console.log("Testing for Weight = 90 pounds and Height = 66 inches, result should be Severely Underweight");
console.log("**********");
console.log("Severely Underweight", inputHeightAndWeight(66,90)==="Severely Underweight");
console.log("Underweight", inputHeightAndWeight(66,90)==="Underweight");
console.log("Normal", inputHeightAndWeight(66,90)==="Normal");
console.log("Overweight", inputHeightAndWeight(66,90)==="Overweight");
console.log("Moderately Obese", inputHeightAndWeight(66,90)==="Moderately Obese");
console.log("Severely Obese", inputHeightAndWeight(66,90)==="Severely Obese");
console.log("Morbidly Obese", inputHeightAndWeight(66,90)==="Morbidly Obese");
