
let current_ussers = ['u1','u2','u3','u4','u5'];
let new_ussers = ['u3','u4','u6','u8'];

for(n of new_ussers)
   if(current_ussers.include(n))
       console.log("person need to enter new ussername ")
   else
       console.log("usser name availble");
  