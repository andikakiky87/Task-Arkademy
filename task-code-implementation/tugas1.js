const cekPal = (x) => {
    const data = x.toLowerCase()
    const call = data.split('')
    console.log(call);
    const rev = call.reverse().join('')
    if (rev == data) {
        console.log(`${x} adalah Palindrom`);
    } else {
        console.log(`${x} bukan Palindrom`);
    }
}

cekPal('MALam')




