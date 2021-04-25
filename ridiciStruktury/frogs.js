/* Dvě žáby začínají na ose x a budou skákat směrem k +∞. Na začátku programu si definujte dvě proměnné xA a xB, které určují jejich startovní pozice na ose x.
Dále si definujte dvě proměnně sA a sB, které určují, o kolik v jednom kole žáby poskočí.
Platí, že xB > xA.
Napište program, který určí, zdali se žáby s danými parametry xA, xB, sA, sB potkají po dokončení nějakého skoku na stejném bodě na ose x, nebo zdali se nikdy nepotkají.*/
let xA = 108;
let xB = 666;
let sA = 3;
let sB = 5;

if (sA <= sB) {
    console.log("Žáby se nikdy nepotkají.");
} else {
    while (xA < xB) {
        xA += sA;
        xB += sB;
        // console.log(`xA = ${xA}, xB = ${xB}`);
    }
}
if (xA === xB) {
    console.log("Žáby se potkají.");
} else
    console.log("Žáby se nikdy nepotkají.");