
console.log("Print all numbers between -10 and 19");
for(let i = -10; i < 20; i++){
    console.log(i);;;
}


console.log("Print all even numbers between 10 and 40");
// for(let i = 10; i < 41; i+=2){
//     console.log(i);
// } // This method isn't forgiving.

for(let i = 10; i <= 40; i += 1){
    if(i % 2 ===0){
        console.log(i);
    }
}

console.log("Print all odd numbers between 300 and 333");
for(let i = 301; i < 334; i+=2){
    console.log(i);
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for(let i = 5; i <= 50; i++){
    if((i % 5 === 0) && (i % 3 === 0)){
        console.log(i);
    }
}