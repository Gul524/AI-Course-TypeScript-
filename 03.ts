

let pn: string = "Suleman";

console.log("Lowercase:", pn.toLowerCase());
console.log("Uppercase:", pn.toUpperCase());

function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log("Titlecase:", toTitleCase(pn));