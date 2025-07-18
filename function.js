
//function

function addition(a,b){
    return a+b;
}

// ananymous function

let subraction = function(a,b){
    return a-b;
}

// arrow function

let multiply = (a,b)=>{
    return a*b;
}

//optimised arrow function

let div = (a,b)=> a/b;

console.log(addition(10,20));
console.log(subraction(30,20));
console.log(multiply(30,20));
console.log(div(30,10));

function outerFunction (){
   let count = 0;

   function innerFunction(){
    count++;
    console.log(count);
   }
   return innerFunction;
}

let myCount = outerFunction();

console.log(myCount());
console.log(myCount());
console.log(myCount());




