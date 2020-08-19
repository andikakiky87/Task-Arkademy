const divideAndSort = (data) => {
    if (typeof data !== 'number') {
        console.log('Please input Number');
    } else {
        const arr = data.toString().split('0')
        const baru = arr.map((item) => {
            const dataa = item.split('').sort().join('')
            return dataa
        })
        const dataku = baru.join('')
        const num = parseInt(dataku)
        console.log(num);
    }
}

divideAndSort(85649058511056)
