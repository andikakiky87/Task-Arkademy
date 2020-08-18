const getmonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December']
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 2000);
}

const getData = (err, data) => {
    try {
        data.map((item) => {
            return console.log(item);
        })
    } catch (error) {
        console.log(err.message);
    }
}



getmonth(getData)