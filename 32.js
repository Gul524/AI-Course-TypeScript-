var current_ussers = ['u1', 'u2', 'u3', 'u4', 'u5'];
var new_ussers = ['u3', 'u4', 'u6', 'u8'];
for (var _i = 0, new_ussers_1 = new_ussers; _i < new_ussers_1.length; _i++) {
    n = new_ussers_1[_i];
    if (current_ussers.include(n))
        console.log("person need to enter new ussername ");
    else
        console.log("usser name availble");
}
