//Task1
function convertToKelvin(tempCelsius)
{
    tempKelvin = (tempCelsius + 273.15);
    return tempKelvin;
}
console.log (convertToKelvin(15));
console.log (convertToKelvin(65));

function convertToKelvin(tempFarenheit)
{
    tempKelvin = (tempFarenheit - 32) * 5/9 + 273.15;
    return tempKelvin;
}
console.log (convertToKelvin(50));
console.log (convertToKelvin(23));

//Task2
function computeTip(totalBill)
{
    tempTip = (totalBill * .10);
    return tempTip
}
console.log (computeTip(1000));
console.log (computeTip(575));