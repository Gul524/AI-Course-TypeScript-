var ussers = ['u1', 'u2', 'u3', 'u4', "admin"];
for (var _i = 0, ussers_1 = ussers; _i < ussers_1.length; _i++) {
    u = ussers_1[_i];
    if (u != "admin")
        console.log("hello " + u + " ,thank you for logging in again");
    else if (u == "admin")
        console.log("hello admin ,would you like to see a status report");
}
