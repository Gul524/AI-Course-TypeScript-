/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

*/






let ip = ['suelman','jawad','kashan','usman','ali'];

console.log("Unfortunately, the dinner table won’t arrive in time for the dinner, and we can only invite two people for dinner.");

// Remove guests until only two names remain
while (ip.length > 2) {
    let removedGuest: string = ip.pop()!;
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation message to the two remaining guests
for (let i = 0; i < ip.length; i++) {
    console.log(`Dear ${ip[i]},\nYou're still invited to dinner.`);
}

// Remove the last two names from the list
ip.pop();
ip.pop();

// Print the empty list
console.log("Final guest list:",ip);