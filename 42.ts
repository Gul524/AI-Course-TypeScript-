
  
let magicians: string[] = [" Suleman", "Gul", "jawad", "kashan"];

function make_great(): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

function show_magicians(): void {
    console.log("List of Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

make_great();
show_magicians();