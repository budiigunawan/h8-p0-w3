var teks = 'hello world!';
var teksArray = teks.split('');
var hasil = '';

for (var i = teksArray.length-1; i >= 0; i--) {
    hasil += teksArray[i];
}

console.log(hasil);