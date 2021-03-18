// Vypočítejte faktoriál čísla zadaného na vstupu.
let number = window.prompt("Zadej číslo");
let faktorial = 1n;
for (let i = 2n; i <= BigInt(number); i++) {
    faktorial *= i;
}
alert(`Faktoriál ${number} je ${faktorial}`)