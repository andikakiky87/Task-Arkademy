const getmonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December']
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000);
}

const getData = async (err, data) => {
    try {
        const getData = await data.map((item) => {
            return item
        })
        console.log(getData);
    } catch (error) {
        console.log(err);
    }
}
getmonth(getData)