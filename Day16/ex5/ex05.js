var a = 8, b =123, c = 5;   
document.write(`3 số a,b,c là:  ${a}, ${b}, ${c} </br>`);
var max, min, between;
min = a;
if (min >=b) {
    min = b;
}
if (min>=c) {
    min = c;
}
max = a;
if (max<=b) {
    max = b;
}
if (max <= c) {
    max = c;
}
between = a + b + c - min - max;

document.write(`3 số a,b,c sau khi sắp xếp là:  ${min}, ${between}, ${max}`);