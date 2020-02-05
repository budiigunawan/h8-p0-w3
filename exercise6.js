function angkaPalindrome(num) {
    if (num < 9) {
        return num+1;
    }
    else {
        var hasil = num + 1;
        
        while(hasil) {
          var hasilString = hasil.toString();
          var hasilBalik = '';
          
          for (var i = hasilString.length-1; i >= 0; i--) {
            hasilBalik += hasilString[i];
          }

          if (hasilString == hasilBalik) {
            return hasil;
            break;
          }
          hasil++
        }
    }
  }
  
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001