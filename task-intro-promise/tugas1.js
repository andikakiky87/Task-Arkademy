const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(`Ya..${cek} adalah Hari kerja `)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 2000);
    })
}
// const dis = (x) => {
//     cekHariKerja(x)
//         .then(res => console.log(res))
//         .catch(err => console.log(err.message))
// }

const display = async (x) => {
    try {
        const res = await cekHariKerja(x)
        console.log(res);
    } catch (error) {
        console.log(error.message);
    }
}
display('minggu')