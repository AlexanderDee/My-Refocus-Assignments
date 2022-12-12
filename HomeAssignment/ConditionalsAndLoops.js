//Task1
let ox = 96;
function oxygenSat(ox){
    if (ox > 95){
        console.log(`Normal reading.`);
    } else if ( (ox >= 92) && (ox < 95) ){
        console.log(`Seek advice from health professionals.`);
    } else if (ox < 92){
        console.log(`Seek urgent medical advice.`);
    } else if (ox = 95){
        console.log(`Acceptable to continue home monitoring.`)
    }
}

oxygenSat(ox);

//Task2
let bpm = 100;
function pulseRate(bpm){
    if ( (bpm >= 40) && (bpm <= 100) ){
        console.log(`Normal reading.`);
    } else if ( (bpm >= 101) && (bpm <= 109) ){
        console.log(`Acceptable to continue home monitoring.`);
    } else if ( (bpm >= 110 ) && (bpm <=130) ){
        console.log(`Seek advice from health professionals.`);
    } else if ( (bpm >= 131 )){
        console.log(`Seek urgent medical advice.`);
    }
}

pulseRate(bpm);