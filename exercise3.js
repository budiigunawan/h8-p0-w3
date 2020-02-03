function dataHandling(arr) {
    var hasil = '';
    for (var i = 0; i < arr.length; i++) {        
        
        var biodata = `
        Nomor ID: ${arr[i][0]}
        Nama Lengkap: ${arr[i][1]}
        TTL: ${arr[i][2]} ${arr[i][3]}
        Hobi: ${arr[i][4]}
        `

        hasil += biodata;
    }

    return hasil;
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input));