/**
 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 *                            false jika bukan merupakan pelajar
 *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 *               Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 *                  Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here

/**
  ALGORITMA
  1. Masukkan nama, tahun lahir, status pelajar
  2. Variabel umur bernilai 2020 - tahun lahir
  3. Jika umur < 2 tahun maka harga tiket gratis
  4. Jika umur 2 sampai dengan 10 tahun maka harga tiket 25000
  5. Jika umur 11 sampai dengan 18 tahun dan merupakan pelajar harga tiket 1.25 x 25000, jika bukan pelajar harga tiket 1.5 x 25000
  6. Jika umur lebih dari 19 tahun dan merupakan pelajar harga tiket 1.5 x 25000, jika bukan pelajar harga tiket 2 x 25000
  7. Jika umur lebih dari 120 tahun tampilkan "Invalid Age"
  8. Tampilkan nama dan harga tiket

  PSEUDOCODE 
  SET "nama" with any value
  SET "tahunLahir" with any integer number
  SET "pelajar" with true or false
  SET "harga" without any value
  SET "umur" with 2020 - "tahunLahir"

  IF "umur" < 2 THEN "harga" IS 0
  ELSE IF "umur" > 2 AND "umur" <= 10 THEN "harga" IS 25000
  ELSE IF "umur" > 10 AND "umur" <= 18
    IF "pelajar" IS TRUE THEN "harga" IS 25000 * 1.25
    ELSE "harga" IS 25000 * 1.5
  ELSE IF "umur" > 18 AND "umur" <= 120
    IF "pelajar" IS TRUE THEN "harga" IS 25000 * 1.5
    ELSE "harga" IS 25000 * 2
  ELSE DISPLAY "Invalid Age"
  ENDIF

  DISPLAY "nama", "harga"
 */
