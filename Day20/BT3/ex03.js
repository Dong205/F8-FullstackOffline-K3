var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
var result = [];

for (var i = 0; i < arr[0].length; i++) {
  result[i] = arr
    .map(function (value) {
      return value[i];
    })
    .filter(function (value) {
      return typeof value === typeof arr[0][i];
    });
}

console.log(result);