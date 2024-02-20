/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

*/
var ip = ['suelman', 'jawad', 'kashan', 'umer'];
var im = "join me today for a dinner ";
var c = ",";
for (var _i = 0, ip_1 = ip; _i < ip_1.length; _i++) {
    var f = ip_1[_i];
    console.log("Dear " + f + c + "\n" + im);
}
console.log("umer is not coming , ok then invite usman ");
for (var _a = 0, ip_2 = ip; _a < ip_2.length; _a++) {
    var f = ip_2[_a];
    console.log("Dear " + f.replace("umer", "usman") + c + "\n" + im);
}
