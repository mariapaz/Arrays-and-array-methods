let btn = document.getElementById("btn");
let input = document.getElementById("input");
let result = document.getElementById("result");  

let firstArr = [];
let filterArr = [];
let reduceNum = 0;
//const initialValue = 0;


btn.addEventListener("click", function() {
  let method = document.querySelector('input[name="method"]:checked');
if (method){
  // transform the string into array without commas
  firstArr = input.value.split(','); 

  if(method.value == 'filter'){  // checkbox filter method
     filterArr = firstArr.filter(function(num){
     if(Number(num) % 2 == 0){
       return num;
     } 
   })
    
     result.innerHTML = 'Odd number/s in this array: ' 
 + filterArr;
    
  } else if (method.value == 'reduce'){ // checkbox reduce method
    reduceNum = firstArr.reduce((num1, num2) => Number(num1) + Number(num2) );
     result.innerHTML = 'The sum of all numbers in this array: ' + reduceNum;
  }
}else{
 result.innerHTML = 'Please choose a method';
}
});