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
 * 2. membuat varibel "hasil" yang awalnya bernilai 0
 * 3. Gunakan looping untuk mengisi variabel cek. index depan sebagai puluhan, index setelahnya sebagai satuan
 * 4. Jika angka yang terbentuk pada variabel cek adalah ganjil lanjut ke langkah selanjutnya
 * 5. Jika variabel cek lebih besar dari hasil, maka hasil bernilai variabel cek
 * 6. Jika variabel bernilai 0 maka angka yang terbentuk pada variabel cek semuanya genap
 * 7. Jika bukan 0, tampilkan hasil
 */


function oddFinder(string) {
   var hasil = 0;
   for (var i = 0; i < string.length; i++) {
      var cek = parseInt(string[i]) * 10 + parseInt(string[i+1]);
      if (cek % 2 == 1) {
         if (cek > hasil) {
            hasil = cek;
         }
      }
   }

   if (hasil == 0) {
      return 'Tidak ada yang ganjil';
   }
   
   return hasil;
}


console.log(oddFinder('1234987566710')); //87
console.log(oddFinder('246804422')); //Tidak ada yang ganjil