let arr=[1,2,3,4,5,6,7,8,9,10]
let sum = 0;

arr.forEach((element) =>{
   if( element % 2 === 0){
        sum += element;
   }   
});

console.log("the sum of even numbers: " + sum);
