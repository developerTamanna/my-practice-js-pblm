   function bigNumber(list){
    //   console.log(list);
    newArray = [];
    for(let number of list){
        // console.log(number)
        if(number>50){
            newArray.push(number);
        }
    }
    return newArray;
   }


const arrayList = [12, 25, 37, 50, 75, 100];
console.log(bigNumber(arrayList))