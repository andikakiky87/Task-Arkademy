function rataRata(mtk, bind, bing, ipa) {
    let arr = [mtk, bind, bing, ipa]
    //cek parameter kosong
    if (mtk === undefined || bind === undefined || bing === undefined || ipa === undefined) {
         console.log('Nilai Harus diisi')
    }else{
        //cek type per-array
        for (i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number') {
                return console.log('Nilai harus number')
            } 
        }
        //hitung rata
        let total = 0
        for (j = 0; j < arr.length; j++) {
            total += arr[j] / arr.length
        }
        console.log(`Rata-rata = ${total}`)
        //cek grade
        if (total >= 90 && total <= 100) {
            return console.log('Grade = A')
        } else if (total >= 80 && total <= 89) {
            return console.log('Grade = B')
        } else if (total >= 70 && total <= 70) {
            return console.log('Grade = c')
        } else if (total >= 60 && total <= 69) {
            return console.log('Grade = D')
        } else {
            return console.log('Grade = E')
        }
    }
}
rataRata(80, 90, 89, 69)