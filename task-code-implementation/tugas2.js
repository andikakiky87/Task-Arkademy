const cekBelajar = (x) => {
    if (x === undefined) {
        console.log('Please input Someting');
    } else if(typeof x !== 'string'){
        console.log('Please input String');
    }else {
        const arr = x.split(' ').reverse().join(' ')
        console.log(arr);
    }
}

cekBelajar('Saya Ganteng')