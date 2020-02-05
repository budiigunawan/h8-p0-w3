/**
 * Instruksi
 *
 * ===============
 * Count Stuff
 * ===============
 *
 * Pada program ini kalian harus mencari beberapa hal yang terdapat di dalam sebuah string.
 * Kalian diberikan 2 input, 'line' dan 'param'.
 * String line berisi angka (0-9), huruf (lowercase) atau karakter lain yang sembarang ('/', '#', '@', '$', dll). String ini merupakan string yang akan kalian proses.
 * Contoh line: '123abcdfghi9657$%^&*'
 * String param berisi parameter yang akan menentukan barang yang kalian cari di dalam string tersebut.
 * param bisa berupa: - 'sigma'
 *                         jika param berupa sigma, maka jumlahkan semua angka di dalam string.
 *                     - 'letters'
 *                         jika param berupa letters, maka carilah jumlah huruf di dalam string.
 *                     - 'length'
 *                         jika param berupa length, maka program akan mengoutput panjang dari elemen string yang berupa huruf dan angka.
 *                     - Selain ketiga param diatas, maka program akan mengoutput 'Parameter salah'
 * Contoh
 *
 * 1.
 * 'line' : 'abcdefghijklmonjasd'
 * 'param': 'letters'
 *
 * Output: 19
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'sigma'
 *
 * Output: 0
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'length'
 *
 * Output: 19
 *
 * 2. line: 'abcde12345
 *
 * param : 'sigma'
 *
 * Output: 15
 *
 * line: 'abcde12345
 *
 * param : 'length'
 *
 * Output: 10
 *
 * RULES :
 * - HANYA BOLEH MENGGUNAKAN BUILT-IN METHOD / FUNCTION dari tipe data Number
 *
 */

var line = 'abcde&12345' //kalian bisa mengubah isi dari 'line' untuk menguji contoh-contoh string yang lainnya
var param = 'length' //kalian bisa mengisi param ini dengan 'sigma', 'letters', 'length', dll

//tulis kode kalian disini
var huruf = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var angka = '0123456789';
var jumlahHuruf = 0;
var jumlahAngka = 0;

if (param === 'letters') {
    for (var i = 0; i < line.length; i++) {
        for (var h = 0; h < huruf.length; h++){
            if (line[i] == huruf[h]) {
                jumlahHuruf++
            }
        }
    }
    console.log(jumlahHuruf);
}
else if (param === 'sigma') {
    for (var j = 0; j < line.length; j++) {
        if (Number(line[j]) == line[j]){
            jumlahAngka += parseInt(line[j]);
        }
    }
    console.log(jumlahAngka);
}
else if (param === 'length') {
    for (var k = 0; k < line.length; k++) {
        if (Number(line[k]) == line[k]){
            jumlahAngka++
        }
        
        for (let h = 0; h < huruf.length; h++) {
            if (line[k] == huruf[h]) {
                jumlahHuruf++
            }
        }
        // if (huruf.indexOf(line[k]) != -1) {
        //     jumlahHuruf++
        // }
        // else if (angka.indexOf(line[k]) != -1) {
        //     jumlahAngka++
        // }
    }
    console.log(jumlahAngka + jumlahHuruf);
}
else {
    console.log('Parameter Salah');
}
