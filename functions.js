function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}

console.log(add(10,20));
console.log(subtract(100,20));
console.log(multiply(10,20));
console.log(divide(50,2));
// one line callback function type: Arrow function
setTimeout(()=>console.log("My name is Anthony Gonsalviz!"),1000);

//passing function as parameter inside a function with no name is called as anonymous function.
setTimeout(function(){
    console.log("Hi, My name is Anthony");
},5000);