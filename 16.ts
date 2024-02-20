/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/

let ip = ['suelman','jawad','kashan','umer'];
let im = "join me today for a dinner ";
let c = ","; 
for (let f of ip)
    {  console.log("Dear " + f + c + "\n" + im );}

console.log("umer is not coming , ok then invite usman ");

for (let f of ip)
    {  console.log("Dear " + f.replace("umer","usman") + c + "\n" + im );}

console.log(" I found some more space as bigger diner table , So i am going to invite some more friend");

ip.push("ali");


// Print a second set of invitation messages
console.log("\nSecond set of invitation messages:");
for (let i = 0; i < ip.length; i++) {
    console.log(`Dear ${ip[i]},\nYou are cordially invited to dinner. Please join us for an evening  delicious food.`);
}



