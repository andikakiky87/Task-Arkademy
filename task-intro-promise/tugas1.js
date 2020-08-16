const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(`Ya.. benar Hari kerja ${cek}`)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 2000);
    })
}
const dis = (x) => {
    cekHariKerja(x)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const display = async (x) => {
    try {
        const res = await cekHariKerja(x)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
display('rabu')