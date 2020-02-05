function pasanganTerbesar(num) {
    var numString = num.toString();
    var hasil = 0;

    for (let i = 0; i < numString.length; i++) {
        var temp = parseInt(numString[i]) * 10 + parseInt(numString[i+1]);
        if ( temp > hasil) {
            hasil = temp;
        }
    }

    return hasil;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99