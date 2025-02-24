function checkEvenOdd(number){
    //  console.log(number)
    if(number % 2 ==0){
        return number + 'yes this is a even number'
    }
    else{
       return number + 'this is a odd number'
    }
}

const number = 10;
console.log(checkEvenOdd(number))