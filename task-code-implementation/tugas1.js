const cekPal = (x) => {
    if (typeof x !== 'string' || x === undefined) {
        console.log('Please input String');
    } else {
        const data = x.toLowerCase()
        const call = data.split('')
        // console.log(call);
        const rev = call.reverse().join('')
        if (rev == data) {
            console.log(`Palindrom`);
        } else {
            console.log(`bukan Palindrom`);
        }
    }
}

cekPal(12)




