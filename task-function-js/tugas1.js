// 1. Date
// Menentukan waktu sekarang
let dt = new Date();
console.log(`Date now is ${dt}`);

//2. Get Today
let dat = dt.getDate()
console.log(`Sekarang tanggal ${dat} di bulan agustus`);

//3. ChartAt
// Mencari index dari sebuah string
let str = 'Kiky Ganteng'
let stri = str.charAt(2)
console.log(stri);

//4. concat
// Menggabungkan string dua atau lebih
let text1 = 'kiky '
let text2 = 'ganteng '
let text3 = 'sekali'
let text4 = text1.concat(text2, text3)
console.log(text4);

// 5. lenght
// mengembalikan jumlah pada sebuah karakter
let str1 = 'kiky ganteng sekali'
let str2 = str1.length
console.log(str2);

// 6. toLowerCase
// Mengubah karakter menjadi huruf kecil
let bo = 'KIKY GANTENG'
let ob = bo.toLocaleLowerCase()
console.log(ob);

// 7. Join
// Mennggabungkan nilai array menjadi string dan di pisah dengan separator
let arr = ['kiky', 'ganteng', 'banget']
let arrNew = arr.join(' ')
console.log(arrNew);

// 8. Reverse
// Membalikan elemen array
let gas = ['kiky', 'ganteng', 'banget', 'bro']
let sag = gas.reverse()
console.log(sag);

// 9.Shift
// Menghapus elemen pertama dan mengembalikkannya array
let bro = ['kiky', 'ganteng', 'banget', 'bro']
let orb = bro.shift()
console.log(orb);

// 10. Console.log
// Menampilkan hasil di terminal javascript
console.log('hello');