
let ussers = ['u1','u2','u3','u4',"admin"]
for(u of ussers )
 if( u != "admin")
   console.log( "hello " + u + " ,thank you for logging in again" );
 else if (u == "admin")
   console.log("hello admin ,would you like to see a status report")
