function targetTerdekat(arr) {
    var posX = [];
    var posO = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            posX.push(i);
        }
        else if (arr[i] === 'o') {
            posO.push(i);
        }
    }

    if (posX.length == 0) {
        return 0;
    }
    else {
        var hasil = 0;
        for (let j = 0; j < posX.length; j++){
            var temp = posX[j]-posO[0];

            if (temp < 0) {
                temp = temp * -1;
            }
            
            if (hasil == 0 || temp < hasil){
                hasil = temp;
            }
        }
    }
    return hasil;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2