let cont = true;
let count = 0;
let sum = 0;
while (cont) {
    let input = window.prompt("Zadej číslo:");
    if (input === "") {
        cont = false
    } else {
        sum += parseFloat(input);
        count++;
    }
}
alert(`Průměr je ${sum / count}`)

