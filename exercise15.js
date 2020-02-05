function groupAnimals(animals) {
    //sort
    for (let i = 1; i < animals.length; i++) {
        for (let j = 0; j < i; j++) {
            if (animals[i][0] < animals[j][0]) {
                var temp = animals[i];
                animals[i] = animals[j];
                animals[j] = temp; 
            }
        }
    }

    //cek huruf pertama animals
    var cek = '';

    var hasil = [];
    var ind = 0;

    for (let k = 0; k < animals.length; k++) {
        var indeks = cek.indexOf(animals[k][0]);
        if (indeks == -1) {
            hasil[ind] = [];
            hasil[ind].push(animals[k]);
            cek += animals[k][0];
            ind++
        }
        else {
            hasil[indeks].push(animals[k]);
        }
    }

    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]