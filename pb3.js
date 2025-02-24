function sumAndmalti(numbers){
// console.log(numbers)
let sum = 0;
    let multi = 1;
for( const number of numbers){
    // console.log(number)
    
    if(number > 0){
        sum = sum + number
        
    }
    else{
        multi = multi * number
        
    }
}
return 'positive sum:' + sum + ', negative multiplaction:' + multi
}

 const numbers = sumAndmalti([2, -3, 5, -1, 4, -2]);
 console.log(numbers)