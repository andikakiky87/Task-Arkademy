const gaGen = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x % 2 == 0) {
                resolve(`${x} adalah Genap`)
            } else {
                reject(`${x} adalah Ganjil`)
            }
        }, 3000);

    })
}

const cek = (input) => {
    gaGen(input)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

cek(5)