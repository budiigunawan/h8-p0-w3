/**
 * 
 * ================
 * 2 Digit Oddities
 * ================
 * 
 * '1234987566710'
 * 
 * 
 * Pada program ini, kalian harus mengimplementasikan function oddFinder() yang menerima input berupa 'string' berisi angka.
 * String ini pasti diisi oleh angka dan tidak akan diisi oleh huruf/karakter lainnya.
 * Untuk setiap angka 2 digit yang bisa dibentuk dari kiri ke kanan, carilah angka ganjil yang paling besar.
 * Jika tidak ada angka ganjil di dalam string tersebut, maka function akan return 'Tidak ada yang ganjil'
 * 
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN METHOD / FUNCTION KECUALI Number .parseInt
 * - HARUS MENULIS PSEUDOCODE / ALGORITMA, TIDAK MENULIS = 0!
 * 
 * ALGORITMA 
 * 1. Tentukan string
 * 2. Cek string, jika genap semua tampilkan tidak ada yang ganjil
 * 3. Jika ada angka ganjil lanjut ke langkah selanjutnya
 * 4. Gunakan nested loop untuk mengisi variabel angkaBaru
 * 5. Buat variabel angkaBaruGanjil dengan mengetes variabel angkaBaru % 2 tidak sama dengan 0
 * 6. Buat variabel hasil, jika angkaBaruGanjil > hasil inputkan kedalam hasil
 * 7. Tampilkan hasil
 */


function oddFinder(string) {
   for (var i = 0; i < string.length; i++) {
      
   }
}


console.log(oddFinder('1234987566710')); //87
console.log(oddFinder('246804422')); //Tidak ada yang ganjil