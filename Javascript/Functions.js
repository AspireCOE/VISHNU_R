//Functions --> Performs specific tasks and can be called multiple times

const { visitParameterList } = require("typescript");

//1.Function to check whether the given number or not
//function declaration
function isPositive(number){ //parameters
    return number>0;
}
console.log(isPositive(5)); //passing arguments
console.log(isPositive(-5));

//2.Function without any parameters
function sayHello(){
    console.log("Hello");
}
sayHello();

//3.Function to find the product of two numbers
function findProduct(a,b){
    return a*b;
}
console.log(findProduct(5,4));
console.log(typeof(findProduct));

//4.Default parameters
function greet(name="User"){
    console.log("Hello ",name)
}
greet("Vishnu");
greet();

//5.Recursion -->function calling itself
function factorial(number){
    if(number==0 || number==1){
        return 1;
    }
    else{
        return number*factorial(number-1);
    }
}
console.log(factorial(5));

//6.Function expression -->declaring function in a variable and it act as a object
let arrayList=[1,2,3,4,5];
let findSum=function(arrayList){
    let sum=0;
    for(let i=0;i<=arrayList.length;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(findSum(arrayList));
