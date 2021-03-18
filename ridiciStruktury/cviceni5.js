// Sečtěte čísla od 1 do 100, která nejsou dělitelná 5.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 5 !== 0) {
        sum += i;
    }
}
console.log(`sum = ${sum}`)
