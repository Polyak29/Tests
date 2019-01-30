var x = new Uint8Array();
x = [0x11,0x12,0x13];
var mas = [];
for(var i = 0, j = x.length - 1; i < x.length; i++, j--){
    mas[i] = x[j];
}
console.log("Начальный массив:", x);
console.log("Результат", mas);
