// 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

//declare string
let string1:string="apple";
let string2 :string ="orange";

//test inequality
 console.log ("\ntest 1 : string1 is equal to string2");
 console.log(string1==string2);
  
 //test equality
 console.log("\ntest 2: string1 is not equal to string2");
 console.log(string1!=string2);


 // • Tests using the lower case function

 console.log("\ntesting lower case function")
 let message:string="Hello World";
 //covert to lower case.
 console.log(message.toLocaleLowerCase()==message);


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log("\ntesting numerical numbers")

//declare number
let num1:number=5;
let num2:number=10;

console.log(num1==num2);
console.log(num1!=num2);
console.log(num1<num2);
console.log(num1>num2);
console.log(num1<=num2);
console.log(num1>=num2);


// • Tests using "and" and "or" operators
console.log("\ntests 'and ', 'or' operators" );

//declaretion
const Condition1 = true;
const Condition2 = false;

console.log(Condition1 && Condition2)
console.log(Condition1 || Condition2)

// • Test whether an item is in a array
console.log("\ntest whether item array")

let fruit:string []=['apple','mango','orange','graps']
console.log(fruit.includes("3"));

// • Test whether an item is not in a array
console.log("\ntest whether item not in array")
let fruits:string []=['apple','mango','orange','graps']
console.log(fruit.includes("5"));















