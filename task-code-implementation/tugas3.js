const divideAndSort = (data) => {
    if (typeof data !== 'number') {
        console.log('Please input Number');
    } else {
        const arr = data.toString().split('0')
        // console.log(arr);
        const baru = arr.map((item) => {
            const dataa = item.split('').sort().join('')
            return dataa
        })
        console.log(baru);
        const dataku = baru.join('')
        // console.log(dataku);
        const num = parseInt(dataku)
        console.log(num);
    }
}

divideAndSort(85649058511056)
