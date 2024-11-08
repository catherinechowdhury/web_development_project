//BMI Calculation
let weight= 130;
let height= 64;
let bmi= (weight*703)/(height**2);
let healthstate

if(bmi<18.5){
    healthstate="underweight";
}else if(bmi<=25){
    healthstate="normal";
}else if(bmi<=30){
    healthstate="overweight"
}else{
    healthstate="obese"
}

console.log(`BMI=${bmi.toFixed(2)}. Healthstate = ${healthstate}.`)