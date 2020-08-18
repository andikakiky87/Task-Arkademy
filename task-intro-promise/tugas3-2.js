const cekGaji = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = ['graham', 'joe', 'joni', 'mahmudi']
            const getData = data.find((item) => {
                return item === user
            })
            if (getData) {
                resolve(getData)
            } else {
                reject('Sorry User Not Found')
            }
        }, 3000);
    })
}

const displayGaji = async (data,gaji, day) => {
    try {
        const dt = await cekGaji(data)
        const cek = gaji * day
        console.log(`Gaji ${dt} dalam ${day} jam sebesar ${cek} dollar`);
    } catch (err) {
        console.log(err);
    }
}

displayGaji('joni', 24 , 22)