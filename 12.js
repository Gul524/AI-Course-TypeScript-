/*
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

*/
var names = ["Suleman", "Jawad", "Kashan", "Gul"];
var greetingMessage = "Hello, ";
// Print personalized message to each person
for (var i = 0; i < names.length; i++) {
    console.log(greetingMessage + names[i] + "!");
}
