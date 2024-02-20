

function make_album(artist_name:string,album_title:string,album_tracks?:number): object{ return artist_name + ".." + album_title + ".." + album_tracks ; };

let x = make_album("arjit singh","album_1");
let y = make_album("shenaz gul",'album2');
let z = make_album("shah khan",'album3');


let t  = make_album("shah khan",'album3',"25");

console.log("\n"+ x + "\n" + y + "\n" + z  + "\n" + t);