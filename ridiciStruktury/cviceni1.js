// Máte definovanou proměnou dec (přirozené číslo z desítkové soustavy). Vytvořte kód, který převede číslo dec do dvojkové soustavy (binárního zápisu).
let dec = 47;
let result = "";
let remainder = 0;
let divider = 2;
while (dec > 0) {
    remainder = dec % divider;
    dec = (dec - dec % divider) / divider;
    result = remainder + result;
}
console.log(result);