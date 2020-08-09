function Rata(mtk, bind, bing, ipa) {
    let nilai = [mtk, bind, bing, ipa]
    let total = (mtk + bind + bing + ipa) / nilai.length;
    if (mtk === undefined || bind === undefined || bing === undefined || ipa === undefined) {
        console.log('Nilai wajib diisi')
    }else {
        console.log(`Rata-rata = ${total}`)
        if (total >= 90 && total <= 100) {
            console.log('Grade = A')
        } else if (total >= 80 && total <= 89) {
            console.log('Grade = B')
        } else if (total >= 70 && total <= 70) {
            console.log('Grade = c')
        } else if (total >= 60 && total <= 69) {
            console.log('Grade = D')
        } else {
            console.log('Grade = E')
        }
    }
}
Rata(80,80,80,80)

