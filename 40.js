function make_album(artist_name, album_title, album_tracks) { return artist_name + ".." + album_title + ".." + album_tracks; }
;
var x = make_album("arjit singh", "album_1");
var y = make_album("shenaz gul", 'album2');
var z = make_album("shah khan", 'album3');
var t = make_album("shah khan", 'album3', "25");
console.log("\n" + x + "\n" + y + "\n" + z + "\n" + t);
