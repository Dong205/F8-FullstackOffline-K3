function sortInsertArr(array, insertElement) {
    if (array.length === 0) {
        array.splice(0, 0, insertElement);
    }
    else if (array.length > 0) {
        var insertIndex = 0;
        array.sort(function (a, b) {
            return a - b;
        });

        if (insertElement < array[0]) {
            array.splice(0, 0, insertElement);
        }
        else if (insertElement > array[array.length - 1]) {
            array.splice(array.length, 0, insertElement);
        }
        else {
            for (var i = 0; i < array.length; ++i) {
                if (insertElement <= array[i]) {
                    insertIndex = i;
                    break;
                }
            }
            array.splice(insertIndex, 0, insertElement);
        }
    }
    return array;
}

var arr = [3, 2, 6, 9, 8];
arr = sortInsertArr(arr, 7);
console.log(arr);