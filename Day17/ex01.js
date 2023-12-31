// Bài 1: Tính tiền taxi

function calcTaxiCost(distance) {
    var result,
        level1 = 15000,
        level2 = 13500,
        level3 = 11000;

    if (distance <= 0 || typeof distance !== "number") return "Không hợp lệ";

    if (distance <= 1) {
        result = distance * level1;
    } else if (distance <= 5) {
        result = level1 + (distance - 1) * level2;
    } else {
        result = level1 + 4 * level2 + (distance - 5) * level3;
        if (distance > 120) result -= result * 0.1;
    }
    return result;
}
console.log(calcTaxiCost(150));
console.log(calcTaxiCost(20.5));
console.log(calcTaxiCost(-20));
console.log(calcTaxiCost(150));
console.log(calcTaxiCost("Hello F8"));
console.log(calcTaxiCost(0));

// Bài 2: Tính tiền điện

function calcElectricBill(kwh) {
    var result,
        level1 = 1678,
        level2 = 1734,
        level3 = 2014,
        level4 = 2536,
        level5 = 2834,
        level6 = 2927;

    if (kwh <= 0 || typeof kwh !== "number") return "Không hợp lệ";

    if (kwh <= 50) {
        result = kwh * level1;
    } else if (kwh <= 100) {
        result = 50 * level1 + (kwh - 50) * level2;
    } else if (kwh <= 200) {
        result = 50 * (level1 + level2) + (kwh - 100) * level3;
    } else if (kwh <= 300) {
        result = 50 * (level1 + level2) + 100 * level3 + (kwh - 200) * level4;
    } else if (kwh <= 400) {
        result =
            50 * (level1 + level2) +
            100 * (level3 + level4) +
            (kwh - 300) * level5;
    } else {
        result =
            50 * level1 +
            50 * level2 +
            100 * (level3 + level4 + level5) +
            (kwh - 400) * level6;
    }
    return result;
}

console.log(calcElectricBill(-1));
console.log(calcElectricBill(30));
console.log(calcElectricBill(80));
console.log(calcElectricBill(180));
console.log(calcElectricBill(280));
console.log(calcElectricBill(380));
console.log(calcElectricBill(1000));

// Bài 3: Tính giá trị biểu thức

function calcSum(n) {
    if (n <= 0 || typeof n !== "number" || n % 1 !== 0) return "Không hợp lệ";
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i * (i + 1);
    }
    return sum;
}
console.log(calcSum(10));

// Bài 4: Viết hàm kiểm tra số nguyên tố

function isPrime(n) {
    if (n <= 1 || typeof n !== "number" || n % 1 !== 0) return false;

    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
            break;
        }
    }
    return true;
}
var n = 10;
if (isPrime(n)) {
    console.log(`${n} là số nguyên tố.`);
} else {
    console.log(`${n} không phải là số nguyên tố.`);
}

// Bài 5: Vẽ tam giác số

function drawTriangle(n) {
    var line = "";
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            line += j + " ";
        }
        line += "\n";
    }
    console.log(line);
}
drawTriangle(10);

// Bài 6: Vẽ bàn cờ vua

function drawChessboard() {
    const chessboard = document.getElementById("chessboard");
    const boardSize = 8;

    for (var row = 1; row <= boardSize; row++) {
        const tr = document.createElement("tr");
        tr.classList.add(row % 2 === 0 ? "row-even" : "row-odd");

        for (var col = 1; col <= boardSize; col++) {
            const td = document.createElement("td");
            td.classList.add(col % 2 === 0 ? "col-even" : "col-odd");
            tr.appendChild(td);
        }

        chessboard.appendChild(tr);
    }
}

drawChessboard();

// Bài 7:  Vẽ bảng cửu chương

function drawMultiplyTable() {
    const table = document.getElementById("multiply-table");

    for (var i = 2; i < 10; i++) {
        const tr = document.createElement("tr");

        for (var j = 1; j < 11; j++) {
            const td = document.createElement("td");
            tr.appendChild(td);
            td.innerHTML = `${i} x ${j} = ${i * j}`;
        }
        table.appendChild(tr);
    }
}
drawMultiplyTable();

// Bài 8: Tính giá trị biểu thức không dùng vòng lặp

function getSum(n) {
    if (n === 1) {
        return 1;
    } else {
        return getSum(n - 1) + 1 / n;
    }
}

const result = getSum(5);
console.log(result);