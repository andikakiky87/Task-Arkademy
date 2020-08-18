const divideAndSort = (data) => {
    const arr = data.toString().split('0')
    const baru = arr.map((item) => {
        const cek = Array.from(String(item), Number);
        const dataa = cek.sort((a, b) => {
            return a - b
        })
        return dataa
    })
    const dataku = [].concat.apply([], baru).join('')
    const num = parseInt(dataku)
    console.log(num);
}

divideAndSort(5956560159466056)