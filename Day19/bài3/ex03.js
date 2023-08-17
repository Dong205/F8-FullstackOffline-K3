var arr = ['a', 'b', 'c', 'a', 'b', 'c'];
var finalArr = [];

for (var i = 0; i < arr.length; i++) {
    if (finalArr.indexOf(arr[i]) === -1) {
        finalArr[finalArr.length] = arr[i];
    }
}
arr = finalArr;
console.log(arr);