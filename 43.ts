
let magicians: string[] = [" Suleman", "Gul", "jawad", "kashan"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

let greatMagicians: string[] = make_great([...magicians]);
show_magicians(magicians);
show_magicians(greatMagicians);