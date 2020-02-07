/// menyamakan tanpa kamus///
/// hasil soal pertama : ['pulpen','penggaris','type-x','penghapus', 'pencil']

//gabungin ke satu array dulu
// perulangan di array 1, k = 0; k < arr1.length; k++
//var check = false

//perulangan di array hasil j = 0; j < result.length; j++
// jika result sama check = true.
//endperulangan array hasil

//jika !check(false) (di result belum ada), result.push(arr1[k])
function alatTulis(arr1, arr2) {
    //gabungi ke satu arrray dulu
    for (let a = 0; a < arr2.length; a++) {
        arr1.push(arr2[a]);
    }

    var result = [];

    for (let k = 0; k < arr1.length; k++) {
        var check = false;

        for (let j = 0; j < result.length; j++) {
            // if tidak perlu break, karena kalau sudah ketemu akan berhenti
            if (result[j] === arr1[k]) {
                check = true;
            }
        }

        if (!check) {
            result.push(arr1[k]);
        }
    }

    return result;
}

var kotakPensil1 = ['pulpen', 'penggaris', 'type-x'];
var kotakPensil2 = ['penghapus', 'penggaris', 'type-x', 'penghapus', 'pencil'];

console.log(alatTulis(kotakPensil1,kotakPensil2));

///hasil soal kedua : [["pulpen"], ["penggaris","penggaris"],["type-x","type-x"],["penghapus","penghapus"],["pencil"]]