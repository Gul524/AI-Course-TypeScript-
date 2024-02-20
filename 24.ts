/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/


let car = 'TOYOTA';
let num = 7;
let fruits[i] = ['apple','banana','orange'];

// equality / inequality test with string 
console.log("\n Is car == 'TOYOTA' ? , I predict True. ");
console.log(car == TOYOTA);

// Lowar case test
console.log("\nIs car spelling == lowercase letter (toyota) , I predict  false );
console.log(car == car.toLowerCase());

//number test 
console.log("\nIs number == '2' , I predict True.");
console.log(num == 2);

console.log("\n Is number is greater then '2' ? , I predict True.");
console.log(num > 2);

// using and(&&) operater.
console.log("\n Is car == 'honda' ? and number== '7' ? , I predict  False");
console.log(car == honda && num == 7 );

// using or(||) operator.
console.log("Is car == 'toyota'? or is number == '5'? , I predict True.");
console.log(car == 'toyota' || num == '5');


//  test of array 
console.log("Is 'orange' is in fruits ? I predict true(yes));
if(fruits.include("orange"))
  console.log("Element is in list");
  
if(fruits.indexof("tomato")== '0')
 console.log("tomato is not in fruits list");
