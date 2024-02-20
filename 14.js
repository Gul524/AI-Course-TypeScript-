/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


*/
var ip = ['suelman', 'jawad', 'kashan', 'umer'];
var im = "join me today for a dinner ";
var c = ",";
for (var _i = 0, ip_1 = ip; _i < ip_1.length; _i++) {
    var f = ip_1[_i];
    console.log("Dear " + f + c + "\n" + im);
}
