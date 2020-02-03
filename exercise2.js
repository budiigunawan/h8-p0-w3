var teks = 'hello world!';
var teksArray = teks.split('');
var hasil = [];

for (var i = teksArray.length-1; i >= 0; i--) {
    hasil.push(teksArray[i]);
}

console.log(hasil.join(''));